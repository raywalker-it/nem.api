
PRAGMA journal_mode = DELETE;
PRAGMA page_size = 65536;
PRAGMA temp_store = MEMORY;
PRAGMA cache_size = -1000000;
PRAGMA synchronous = OFF;

VACUUM;

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = OFF;

BEGIN;

/* =========================================================================== */
DROP TABLE IF EXISTS "scrape";
CREATE TABLE scrape (
    filename TEXT NOT NULL, 
    scrape_time INTEGER PRIMARY KEY
) WITHOUT ROWID;
CREATE UNIQUE INDEX "scrape_unique_filename_time" ON scrape ("filename","scrape_time");
 
/* =========================================================================== */

DROP TABLE IF EXISTS "scada_values";
CREATE TABLE "scada_values" (
    "scrape_time" INTEGER NOT NULL,
    "generator_id" INTEGER NOT NULL,
    "value" REAL NOT NULL,
    PRIMARY KEY (scrape_time, generator_id),
    FOREIGN KEY (generator_id) REFERENCES generator(id),
    FOREIGN KEY (scrape_time) REFERENCES scrape(scrape_time)
) WITHOUT ROWID;

/* =========================================================================== */

DROP TABLE IF EXISTS "participant";
CREATE TABLE participant (
    id INTEGER PRIMARY KEY AUTOINCREMENT, /* foreign key from generator.participant_id */
    name TEXT UNIQUE
);

/* =========================================================================== */

DROP TABLE IF EXISTS "technology";
CREATE TABLE "technology" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, /* foreign key from fuel.technology_id */
    "type" TEXT,
    "description" TEXT
);
CREATE UNIQUE INDEX "technology_unique_type_description" ON "technology" ("type", "description");

/* =========================================================================== */

DROP TABLE IF EXISTS "fuel";
CREATE TABLE "fuel" (
    "technology_id" INTEGER NOT NULL,
    "type" TEXT,
    "description" TEXT,
    FOREIGN KEY ("technology_id") REFERENCES "technology"("id")
);
CREATE UNIQUE INDEX "fuel_unique_type_description" ON fuel ("type", "description");

/* =========================================================================== */
DROP TABLE IF EXISTS "generator";
CREATE TABLE "generator" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,  /* foreign key from dispatch_scada.generator_id */
    "participant_id" INTEGER NOT NULL,
    "technology_id" INTEGER NOT NULL,
    "duid" TEXT,
    "state" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "reg_cap" DECIMAL,
    "max_cap" DECIMAL,
    FOREIGN KEY (participant_id) REFERENCES participant(id),
    FOREIGN KEY (technology_id) REFERENCES technology(id)
);
CREATE UNIQUE INDEX "generator_duid_name" ON "generator"("duid","name");

/* =========================================================================== */
DROP TABLE IF EXISTS "flat_generators";
CREATE TABLE "flat_generators" (
    "generator_id" INTEGER PRIMARY KEY,
    "name" TEXT NOT NULL,
    "participant_name" TEXT NOT NULL,
    "duid" TEXT,
    "state" TEXT NOT NULL,
    "technology_type" TEXT,
    "technology_description" TEXT,
    "fuel_type" TEXT,
    "fuel_description" TEXT,
    "reg_cap" DECIMAL,
    "max_cap" DECIMAL,
    FOREIGN KEY ("generator_id") REFERENCES "generator"("id")
);

CREATE INDEX "flat_generators_idx_state" ON "flat_generators" ("state");
CREATE INDEX "flat_generators_idx_generator_id_name_duid" ON "flat_generators" ("generator_id","name","duid");
CREATE INDEX "flat_generators_idx_techtype_techdesc" ON "flat_generators" ("technology_type", "technology_description");
CREATE INDEX "flat_generators_idx_fueltype_fueldesc" ON "flat_generators" ("fuel_type", "fuel_description");

/* =========================================================================== */
END;

VACUUM;

PRAGMA foreign_keys = 1;
