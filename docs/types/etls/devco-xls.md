<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## getBudget

Transform message (DEVCO XLS)

### Parameters

- `record`

## DevcoXlsTransform

Map fields for DEVCO producer, CSV file types

Example input data: [stub][1]

Transform function: [implementation details][2]

### Parameters

- `record` **[Object][3]** Piece of data to transform before going to harmonized storage.

Returns **Project** JSON matching the type fields.

### getBudget

Preprocess `budget`

Input fields taken from the `record` are:

- `Total EU Contribution (Million Euro)`
- `Total Budget (Million Euro)`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **Budget**

### getDescription

Preprocess `description`

Input fields taken from the `record` are:

- `Description and main objectives`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

### getCodeByCountry

Gets country code from a country name.

#### Parameters

- `countryName` **[String][4]** The name of the country

Returns **[String][4]** The ISO 3166-1 country code

### getLocations

Preprocess `project_locations`

Input fields taken from the `record` are:

- `Country`
- `Region`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[Array][5]**

### getResults

Preprocess `results`

Input fields taken from the `record` are:

- `1.1 Access on grid electricity ('000 people)`
- `1.2 Access mini grid electricity ('000 people)`
- `1.3 Access off-grid electricity ('000 people)`
- `1.4 Inferred access (additional generation) ('000 people)`
- `1.5 Inferred access (cross-border transmission) ('000 people)`
- `1.6 Access to biomass/biogas clean cooking ('000 people)`
- `1.7 Access to LPG/ethanol cooking ('000 people)`
- `1.8 Electricity from renewables (GWh/year)`
- `1.9 Renewable generation capacity (MW)`
- `1.10 Electricity from energy efficiency (liberated capacity) (MW)`
- `1.11 Transmission lines (km)`
- `1.12 Distribution lines (km)`
- `1.13 Energy Savings (MWh/year)`
- `1.14 GHG emissions avoided per year (ktons CO2eq)`
- `1.15 No of direct jobs person/year (construction)`
- `1.16 No of permanent jobs (operation)`
- `2.1 Direct and Inferred electricity access ('000 people)`
- `2.2 Clean cooking and fuel access ('000 people)`
- `2.3 Direct and Inferred access to energy ('000 people)`
- `2.4 Electricity from renewabes (GWh/year)`
- `2.5 Reneable generation capacity (MW)`
- `2.6 Electricity generation capacity (MW)`
- `2.7 Transmission and distribution lines (km)`
- `2.8 GHG emissions avoided per year (ktons CO2eq)`
- `2.9 No of direct and permanent jons (construction and operation)`
- `BET1 (Access to energy)`
- `BET2 (Renewable energy generation and energy efficiency)`
- `BET3 (Contribution to the fight against climate change)`
- `EURF 1 (No of people provided with access to electricity with EU support)`
- `EURF 2 (Renewable energy production supported by the EU)`
- `EURF 3 (GHG emission avoided)`
- `SDG 7.1.1 Percentage of population with access to electricity)`
- `SDG 7.1.2 (Proportion of population with primary reliance on clean fuels and technology)`
- `SDG 7.2.1 Renewable energy share in the total final energy consumption)`
- `SDG 7.3.1 (Energy intensity measured in terms of primary energy and GDP)`
- `SDG 8.3.1 (Proportion of informal employement in non-agriculture employment, by sex)`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **Result**

### getType

Preprocess `type`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[Array][5]** Project types

[1]: https://github.com/ec-europa/eubfr-data-lake/blob/master/services/ingestion/etl/devco/csv/test/stubs/record.json
[2]: https://github.com/ec-europa/eubfr-data-lake/blob/master/services/ingestion/etl/devco/csv/src/lib/transform.js
[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
