create schema proyectoint;
use proyectoint;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
surname VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL,
role TINYINT DEFAULT 0,
avatar VARCHAR(250),
description TEXT,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME
);


CREATE TABLE addresses (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
address VARCHAR (250) NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);


CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
description TEXT,
image VARCHAR(250) NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE cart (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
quenatity SMALLINT NOT NULL,
price DECIMAL NOT NULL,
state TINYINT NOT NULL, 
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE orders (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
total DECIMAL NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE categories(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
description TEXT,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE imgProducts(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
route VARCHAR (250) NOT NULL);

create table userCart(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
idUSer int unsigned not null, 
idCart int unsigned not null);

create table productCart(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
idProduct int unsigned not null, 
idCart int unsigned not null);


ALTER TABLE addresses
ADD idUser INT UNSIGNED NOT NULL;


ALTER TABLE cart
ADD idProduct INT UNSIGNED NOT NULL;


ALTER TABLE products
ADD idCategory INT UNSIGNED NOT NULL;

ALTER TABLE imgproducts
ADD idProduct INT UNSIGNED NOT NULL;

alter table addresses
add foreign key(idUSer) references users(id);


alter table products
add foreign key(idCategory) references categories(id);

alter table imgproducts
add foreign key(idProduct) references products(id);

alter table userCart 
add foreign key (idCart) references cart(id);

alter table userCart 
add foreign key (idUser) references users(id);

alter table productCart 
add foreign key (idCart) references cart(id);

alter table productCart 
add foreign key (idProduct) references products(id);

alter table categories 
add icon varchar(150) not null;

insert into categories (name, description, icon)
values ('maternidad', 'categoria con todo lo relacionado a embarazos y materniidad',  'maternidad.png'); 

insert into categories (name, description, icon)
values ('perfumeria', 'categoria con todo lo relacionado a perfumeria',  'perfumeria.png'),
('coronavirus', 'categoria con todo lo necesario para la cuarentena y la pandemia', 'coronavirus.png'),
('higiene', 'categoria con todo lo necesario para la higiene', 'higiene.png'),
('medicamentos', 'categoria con todo lo necesario para la salud', 'medicamentos.png'),
('insumos', 'categoria con todo lo necesario para la vida ', 'insumos.png');

alter table products modify image text not null;

alter table products
add price integer not null;

SET SQL_SAFE_UPDATES = 0;



insert into products (name, description, price, idCategory, image) values ('ETHYL ALCOHOL', 'Alcohol detoxification', 232.55, 2, 'http://dummyimage.com/152x148.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('erlotinib hydrochloride', 'Fallopian tube op NEC', 891.37, 1, 'http://dummyimage.com/188x201.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Levofloxacin', 'Decortication of lung', 908.39, 5, 'http://dummyimage.com/197x127.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Rifampin', 'Salivary cyst marsupial', 923.5, 2, 'http://dummyimage.com/207x196.png/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('VASOPRESSIN', 'Saliv lesion excis NEC', 68.52, 4, 'http://dummyimage.com/174x139.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Oxazepam', 'Trnsapcl rep aortc valve', 401.04, 6, 'http://dummyimage.com/190x214.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('LOPERAMIDE HYDROCHLORIDE', 'Opn reduc disloc-hand', 674.15, 1, 'http://dummyimage.com/227x244.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Chlorhexidine Gluconate', 'Local excis breast les', 603.25, 3, 'http://dummyimage.com/171x126.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Doxycycline Hyclate', 'Open testicular biopsy', 14.44, 2, 'http://dummyimage.com/114x237.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('DOCUSATE SODIUM', 'Urterost/urete cth irrig', 609.11, 2, 'http://dummyimage.com/122x149.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('methotrexate', 'C & s-lower urinary', 300.1, 4, 'http://dummyimage.com/140x126.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Lansoprazole', 'Lap gastric restric proc', 405.81, 6, 'http://dummyimage.com/231x199.png/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('rabeprazole sodium', 'Reduct intuss ali tract', 908.53, 1, 'http://dummyimage.com/165x180.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Aspirin', 'Bil fem hern repair NEC', 816.77, 2, 'http://dummyimage.com/157x184.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Theophylline Anhydrous', 'Irrigation of eye', 624.25, 4, 'http://dummyimage.com/244x131.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Pseudoephedrine Hydrochloride', 'Tonsillectomy', 347.56, 2, 'http://dummyimage.com/175x134.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Ondansetron', 'Perforat keratoplast NEC', 759.99, 4, 'http://dummyimage.com/200x174.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Aluminum Zirconium Tetrachlorohydrex Gly', 'Subconjunctival inject', 736.09, 2, 'http://dummyimage.com/194x137.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('AVOBENZONE HOMOSALATE OCTISALATE OCTOCRYLENE OXYBENZONE', 'Destruct cornea les NEC', 469.45, 1, 'http://dummyimage.com/136x237.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('POVIDONE-IODINE', 'Ligation esoph varix', 759.21, 4, 'http://dummyimage.com/165x195.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Levothyroxine Sodium', 'Insert vasc access dev', 228.93, 4, 'http://dummyimage.com/247x187.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Wheat Bran', 'Muscle reattachment', 262.09, 2, 'http://dummyimage.com/171x225.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Metformin Hydrochloride', 'Vaginoscopy', 404.75, 4, 'http://dummyimage.com/205x172.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('simvastatin', 'Ven cath renal dialysis', 168.38, 1, 'http://dummyimage.com/136x150.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Acacia', 'Bact smear-nervous syst', 119.04, 3, 'http://dummyimage.com/128x226.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Fluconazole', 'Whole blood transfus NEC', 713.23, 2, 'http://dummyimage.com/111x212.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Cimetidine Hydrochloride', 'Radius & ulna sequestrec', 487.22, 5, 'http://dummyimage.com/174x218.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Triticum Aestivum, Cajuputum, Baptisia Tinctoria, Capsicum Annuum, Fragaria Vesca, Frasera Caroliniensis, Quassia Amara, Senna', 'Intra-abd sm bowel manip', 126.0, 3, 'http://dummyimage.com/184x150.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Diphenhydramine Hydrochloride', 'Exc/dest hrt les, thrspc', 27.64, 1, 'http://dummyimage.com/142x130.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Diphenhydramine Hydrochloride', 'Implt artf urin sphinct', 869.51, 2, 'http://dummyimage.com/112x100.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Divalproex Sodium', 'Cord & epidid repair NEC', 521.61, 6, 'http://dummyimage.com/187x109.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('risperidone', 'Lobectomy of lung NEC', 161.45, 6, 'http://dummyimage.com/132x104.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Cefazolin', 'Incision of mediastinum', 229.84, 5, 'http://dummyimage.com/123x237.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Diltiazem Hydrochloride', 'Total pancreatectomy', 518.86, 2, 'http://dummyimage.com/181x155.png/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Allantoin', 'Incision uterine septum', 690.2, 4, 'http://dummyimage.com/144x173.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Grama Grass', 'Pollicization operation', 732.08, 4, 'http://dummyimage.com/116x134.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Diphenhydramine Hydrochloride', 'Open reduct tm dislocat', 823.73, 3, 'http://dummyimage.com/244x164.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Capsaicin', 'Trachea fistula clos NEC', 895.31, 1, 'http://dummyimage.com/190x207.png/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('triamcinolone acetonide', 'Revis extraoc musc surg', 276.59, 3, 'http://dummyimage.com/100x221.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Naproxen', 'Urethral meatotomy', 854.34, 4, 'http://dummyimage.com/185x200.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Dextromethorphan Hydrobromide, Guaifenesin, Phenylephrine Hydrochloride', 'Knee joint biopsy', 213.89, 2, 'http://dummyimage.com/244x215.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('spironolactone', 'Inc/exc/destr in ear NEC', 220.83, 2, 'http://dummyimage.com/111x103.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Bisacodyl', 'Toxicology-lower resp', 429.32, 2, 'http://dummyimage.com/156x227.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('KETOROLAC TROMETHAMINE', 'Total elbow replacement', 463.39, 1, 'http://dummyimage.com/108x230.jpg/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('fluocinolone acetonide', 'Revis cleft palat repair', 756.07, 2, 'http://dummyimage.com/166x169.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Baptisia tinctoria, Kreosotum, Mercurius iodatus ruber, Mercurius sulphuratus ruber, Nitricum acidum, Platinum metallicum,', 'Transsac rectosigmoidect', 886.95, 2, 'http://dummyimage.com/149x106.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Titanium Dioxide and Zinc Oxide', 'Upper limb amputat NOS', 725.94, 2, 'http://dummyimage.com/241x186.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Amlodipine Besylate', 'Clo endosc bx pancre duc', 145.9, 1, 'http://dummyimage.com/172x104.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Norethindrone and Ethinyl Estradiol', 'Epididymis/vas x-ray NEC', 78.27, 4, 'http://dummyimage.com/171x244.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Camphor, Menthol', 'Correction fetal defect', 495.28, 6, 'http://dummyimage.com/183x235.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Zinc Oxide', 'Open reduc-dislocat NOS', 627.68, 3, 'http://dummyimage.com/169x210.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Atenolol', 'Int insert dual-cham dev', 372.96, 5, 'http://dummyimage.com/177x116.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Acetazolamide', 'Partial shoulder replace', 807.13, 3, 'http://dummyimage.com/124x131.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Alternaria tenuis', 'Endosc destru bile les', 473.15, 2, 'http://dummyimage.com/153x190.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Metoprolol tartrate', 'Pericolost hernia repair', 477.46, 5, 'http://dummyimage.com/191x168.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Cefuroxime Axetil', 'App hybrid ext fix dev', 937.05, 2, 'http://dummyimage.com/186x248.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Acetaminophen', 'Cystourethroplasty', 536.35, 5, 'http://dummyimage.com/155x146.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('TOPICAL STARCH', 'AICD check', 819.65, 6, 'http://dummyimage.com/234x122.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Doxycycline Hyclate', 'Esophagostomy NOS', 615.12, 3, 'http://dummyimage.com/238x187.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Docusate sodium', 'Failed forceps', 37.64, 5, 'http://dummyimage.com/132x188.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('DOCUSATE SODIUM', 'PTCA', 387.27, 4, 'http://dummyimage.com/160x206.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Levothyroxine Sodium', 'Alo bone marrow trnsplnt', 524.95, 5, 'http://dummyimage.com/240x180.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('DOXYLAMINE SUCCINATE', 'Abdominal lymphangiogram', 733.36, 6, 'http://dummyimage.com/153x247.png/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Octinoxate and Titanium Dioxide', 'Lap periton adhesiolysis', 148.89, 3, 'http://dummyimage.com/178x105.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Salicylic Acid', 'Remov trunk device NEC', 932.61, 2, 'http://dummyimage.com/224x231.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Diltiazem Hydrochloride', 'Dx ultrasound-urinary', 829.27, 3, 'http://dummyimage.com/169x121.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Escitalopram Oxalate', 'Pack ext auditory canal', 668.98, 6, 'http://dummyimage.com/210x113.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('FLUDROCORTISONE ACETATE', 'Vena cav angiocardiogram', 88.86, 2, 'http://dummyimage.com/180x202.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Ethyl Alcohol', 'Autoimmune dis immunizat', 557.99, 2, 'http://dummyimage.com/197x206.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Quartz 60 Special Order', 'Destruc lg bowel les NEC', 201.62, 2, 'http://dummyimage.com/121x233.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('tolterodine tartrate', 'Remov mediastinal drain', 483.8, 5, 'http://dummyimage.com/140x243.bmp/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('methocarbamol', 'Remov large bowel tube', 884.1, 1, 'http://dummyimage.com/121x181.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('moxifloxacin hydrochloride', 'Thoracentesis', 418.61, 4, 'http://dummyimage.com/230x197.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Raloxifene hydrochloride', 'Urethral reanastomosis', 430.19, 3, 'http://dummyimage.com/186x229.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Levothyroxine Sodium', 'Tot osteoplasty maxilla', 401.88, 4, 'http://dummyimage.com/229x117.jpg/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('NITROGLYCERIN', 'Thermocaut/entropion rep', 451.33, 3, 'http://dummyimage.com/214x204.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Octinoxate, Octisalate, Oxybenzone, Avobenzone, Octocrylene', 'Cystourethroplasty', 966.68, 4, 'http://dummyimage.com/213x128.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('TITANIUM DIOXIDE', 'Amnioscopy', 505.68, 6, 'http://dummyimage.com/206x124.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('lomustine', 'Closed brain biopsy', 324.91, 5, 'http://dummyimage.com/174x149.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('OXYGEN', 'Tracheal injection', 230.0, 3, 'http://dummyimage.com/149x215.png/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Menthol', 'Isolation', 987.92, 2, 'http://dummyimage.com/162x164.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Acyclovir', 'Remov biliary/liver tube', 819.8, 1, 'http://dummyimage.com/248x182.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Treatment Set TS329894', 'Limb shorten proc NEC', 712.07, 1, 'http://dummyimage.com/153x191.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Ragweed Tall Giant', 'Ventri shunt-circula sys', 650.98, 4, 'http://dummyimage.com/121x122.png/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('dexamethasone', 'Revis/reinsert ocul imp', 196.03, 6, 'http://dummyimage.com/112x155.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('BENZYL ALCOHOL, LIDOCAINE HYDROCHLORIDE', 'Nasal operation NEC', 595.18, 3, 'http://dummyimage.com/170x104.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('avobenzone, Octinoxate, Octocrylene, Oxybenzone, Zinc Oxide', 'Debrid opn fx-toe', 909.74, 1, 'http://dummyimage.com/216x148.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Triclosan', 'Local destr ova les NEC', 515.89, 4, 'http://dummyimage.com/207x149.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Ceanothus americanus, Senna, Chionanthus virginica, Arsenicum album, Lycopodium clavatum, Sepia,', 'Lap pull-thru res rectum', 37.99, 6, 'http://dummyimage.com/204x125.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Metformin hydrochloride', 'Total ostectomy NEC', 122.16, 5, 'http://dummyimage.com/166x135.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Aloe, CALENDULA OFFICINALIS FLOWERING TOP, HAMAMELIS VIRGINIANA ROOT BARK/STEM BARK, and Lycopodium clavatum Spore', 'Stapedectomy revis NEC', 622.46, 4, 'http://dummyimage.com/168x140.jpg/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('ceftriaxone', 'Electro-oculogram', 564.92, 1, 'http://dummyimage.com/128x149.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Desogestrel/Ethinyl Estradiol and Ethinyl Estradiol', 'Prosth rep hrt septa NOS', 726.74, 6, 'http://dummyimage.com/239x158.bmp/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Lansoprazole', 'Replace small bowel tube', 925.46, 1, 'http://dummyimage.com/202x187.jpg/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Gabapentin', 'Pressure dressing applic', 880.68, 3, 'http://dummyimage.com/239x238.png/ff4444/ffffff');
insert into products (name, description, price, idCategory, image) values ('Oxycodone and Acetaminophen', 'Suture of saliv glnd lac', 814.13, 6, 'http://dummyimage.com/105x219.bmp/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Pyrithione Zinc', 'Sphenoidotomy', 578.68, 2, 'http://dummyimage.com/126x162.png/dddddd/000000');
insert into products (name, description, price, idCategory, image) values ('Octinoxate and Oxybenzone', 'Adrenal operation NEC', 932.97, 1, 'http://dummyimage.com/214x239.bmp/cc0000/ffffff');
insert into products (name, description, price, idCategory, image) values ('Lidocaine Hydrochloride and epinephrine', 'Platelet transfusion', 892.15, 1, 'http://dummyimage.com/131x198.jpg/5fa2dd/ffffff');
insert into products (name, description, price, idCategory, image) values ('Hyoscyamine Sulfate', 'Laser destruc rectal les', 601.6, 5, 'http://dummyimage.com/150x233.png/cc0000/ffffff');

alter table cart
add totalPrice integer not null;

alter table cart
add productName varchar(250) not null;