<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## CordisCsvTransform

Map fields for CORDIS producer, CSV file types

Example input data: [stub][1]

Transform function: [implementation details][2]

### Parameters

- `record` **[Object][3]** Piece of data to transform before going to harmonized storage.

Returns **Project** JSON matching the type fields.

### getFundingArea

Preprocess `funding_area`
Input fields taken from the `record` are:

- `fundingScheme`
- `Activity Area` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[Array][4]**

### getTotalCost

Get total cost before formatting.

Input fields taken from the `record` are:

- `totalCost` (FR1-3 + FP5-7)
- `Total Cost` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getBudget

Preprocess budget

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **Budget**

### getDescription

Preprocess description
Concatenation of several fields as requested in [https://webgate.ec.europa.eu/CITnet/jira/browse/EUBFR-200?focusedCommentId=2808845&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-2808845][6]
Input fields taken from the `record` are:

- `acronym` or `Project Acronym` (FP4)
- `objective` or `Objectives` (FP4)
- `General Information` (FP4)
- `rcn` or `RCN` (FP4)
- `topic`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getProjectId

Preprocess `project_id`
Seeks for values in the following precedence:

- `id`
- `reference`
- `Contract Number` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getFrameworkProgramme

Preprocess `programme_name`
Seeks for values in the following precedence:

- `frameworkProgramme`
- `Framework Programme` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getLocations

Preprocess project_locations
Input fields taken from the `record` are:

- `participants`
- `participantCountries`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[Array][4]** List of {Location} objects for `project_locations` field

### getThirdParties

Preprocess third parties
Input fields taken from the `record` are:

- `coordinator`
- `coordinatorCountry`
- `participants`
- `participantCountries`

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[Array][4]** List of {ThirdParty} objects

### formatDate

Format date

#### Parameters

- `date` **[Date][7]** Date in `YYYY-MM-DD` or `DD/MM/YYYY` formats.

#### Examples

```javascript
input => '2018-12-31';
output => '2018-12-31T00:00:00.000Z';
```

```javascript
input => '01/01/1986';
output => '1986-01-01T00:00:00.000Z';
```

Returns **[Date][7]** The date formatted into an ISO 8601 date format

### getProjectWebsite

Preprocess `project_website`

Input fields taken from the `record` are:

- `projectUrl` (FR1-3 + FP5-7)
- `Project Website` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getStatus

Preprocess `status`

Input fields taken from the `record` are:

- `status` (FR1-3 + FP5-7)
- `Status` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getThemes

Preprocess `themes`

Input fields taken from the `record` are:

- `Keywords` (FP4)
- `Subject` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getProjectTitle

Preprocess `title`
Input fields taken from the `record` are:

- `title` (FR1-3 + FP5-7)
- `Project Title` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getStartDate

Get starting date before formatting.

Input fields taken from the `record` are:

- `startDate` (FR1-3 + FP5-7)
- `Start Date`(FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

### getEndDate

Get end date before formatting.

Input fields taken from the `record` are:

- `endDate` (FR1-3 + FP5-7)
- `End Date` (FP4)

#### Parameters

- `record` **[Object][3]** The row received from parsed file

Returns **[String][5]**

[1]: https://github.com/ec-europa/eubfr-data-lake/blob/master/services/ingestion/etl/cordis/csv/test/stubs/record.json
[2]: https://github.com/ec-europa/eubfr-data-lake/blob/master/services/ingestion/etl/cordis/csv/src/lib/transform.js
[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[6]: https://webgate.ec.europa.eu/CITnet/jira/browse/EUBFR-200?focusedCommentId=2808845&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-2808845
[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date
