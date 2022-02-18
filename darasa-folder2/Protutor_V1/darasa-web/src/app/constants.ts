// Constants

const GENDERS = [
  { value: 'male', name: 'Male' },
  { value: 'female', name: 'Female' }
];

const TITLES = [
  { id: 'mr', name: 'Mr.' },
  { Id: 'mrs', name: 'Mrs.' },
  { id: 'miss', name: 'Miss.' },
  { id: 'ms', name: 'Ms.' },
  { id: 'dr', name: 'Dr.' },
  { id: 'prof', name: 'Prof.' },
];

const TIMEZONES = [
  { value: 'Pacific/Midway', name: 'UTC-11:00 Pacific/Midway' },
  { value: 'Pacific/Niue', name: 'UTC-11:00 Pacific/Niue' },
  { value: 'Pacific/Pago_Pago', name: 'UTC-11:00 Pacific/Pago Pago' },
  { value: 'America/Adak', name: 'UTC-10:00 America/Adak' },
  { value: 'Pacific/Honolulu', name: 'UTC-10:00 Pacific/Honolulu' },
  { value: 'Pacific/Rarotonga', name: 'UTC-10:00 Pacific/Rarotonga' },
  { value: 'Pacific/Tahiti', name: 'UTC-10:00 Pacific/Tahiti' },
  { value: 'US/Hawaii', name: 'UTC-10:00 US/Hawaii' },
  { value: 'Pacific/Marquesas', name: 'UTC-09:30 Pacific/Marquesas' },
  { value: 'America/Anchorage', name: 'UTC-09:00 America/Anchorage' },
  { value: 'America/Juneau', name: 'UTC-09:00 America/Juneau' },
  { value: 'America/Metlakatla', name: 'UTC-09:00 America/Metlakatla' },
  { value: 'America/Nome', name: 'UTC-09:00 America/Nome' },
  { value: 'America/Sitka', name: 'UTC-09:00 America/Sitka' },
  { value: 'America/Yakutat', name: 'UTC-09:00 America/Yakutat' },
  { value: 'Pacific/Gambier', name: 'UTC-09:00 Pacific/Gambier' },
  { value: 'US/Alaska', name: 'UTC-09:00 US/Alaska' },
  { value: 'America/Los_Angeles', name: 'UTC-08:00 America/Los Angeles' },
  { value: 'America/Tijuana', name: 'UTC-08:00 America/Tijuana' },
  { value: 'America/Vancouver', name: 'UTC-08:00 America/Vancouver' },
  { value: 'Canada/Pacific', name: 'UTC-08:00 Canada/Pacific' },
  { value: 'Pacific/Pitcairn', name: 'UTC-08:00 Pacific/Pitcairn' },
  { value: 'US/Pacific', name: 'UTC-08:00 US/Pacific' },
  { value: 'America/Boise', name: 'UTC-07:00 America/Boise' },
  { value: 'America/Cambridge_Bay', name: 'UTC-07:00 America/Cambridge Bay' },
  { value: 'America/Chihuahua', name: 'UTC-07:00 America/Chihuahua' },
  { value: 'America/Creston', name: 'UTC-07:00 America/Creston' },
  { value: 'America/Dawson', name: 'UTC-07:00 America/Dawson' },
  { value: 'America/Dawson_Creek', name: 'UTC-07:00 America/Dawson Creek' },
  { value: 'America/Denver', name: 'UTC-07:00 America/Denver' },
  { value: 'America/Edmonton', name: 'UTC-07:00 America/Edmonton' },
  { value: 'America/Fort_Nelson', name: 'UTC-07:00 America/Fort Nelson' },
  { value: 'America/Hermosillo', name: 'UTC-07:00 America/Hermosillo' },
  { value: 'America/Inuvik', name: 'UTC-07:00 America/Inuvik' },
  { value: 'America/Mazatlan', name: 'UTC-07:00 America/Mazatlan' },
  { value: 'America/Ojinaga', name: 'UTC-07:00 America/Ojinaga' },
  { value: 'America/Phoenix', name: 'UTC-07:00 America/Phoenix' },
  { value: 'America/Whitehorse', name: 'UTC-07:00 America/Whitehorse' },
  { value: 'America/Yellowknife', name: 'UTC-07:00 America/Yellowknife' },
  { value: 'Canada/Mountain', name: 'UTC-07:00 Canada/Mountain' },
  { value: 'US/Arizona', name: 'UTC-07:00 US/Arizona' },
  { value: 'US/Mountain', name: 'UTC-07:00 US/Mountain' },
  { value: 'America/Bahia_Banderas', name: 'UTC-06:00 America/Bahia Banderas' },
  { value: 'America/Belize', name: 'UTC-06:00 America/Belize' },
  { value: 'America/Chicago', name: 'UTC-06:00 America/Chicago' },
  { value: 'America/Costa_Rica', name: 'UTC-06:00 America/Costa Rica' },
  { value: 'America/El_Salvador', name: 'UTC-06:00 America/El Salvador' },
  { value: 'America/Guatemala', name: 'UTC-06:00 America/Guatemala' },
  { value: 'America/Indiana/Knox', name: 'UTC-06:00 America/Indiana/Knox' },
  { value: 'America/Indiana/Tell_City', name: 'UTC-06:00 America/Indiana/Tell City' },
  { value: 'America/Managua', name: 'UTC-06:00 America/Managua' },
  { value: 'America/Matamoros', name: 'UTC-06:00 America/Matamoros' },
  { value: 'America/Menominee', name: 'UTC-06:00 America/Menominee' },
  { value: 'America/Merida', name: 'UTC-06:00 America/Merida' },
  { value: 'America/Mexico_City', name: 'UTC-06:00 America/Mexico City' },
  { value: 'America/Monterrey', name: 'UTC-06:00 America/Monterrey' },
  { value: 'America/North_Dakota/Beulah', name: 'UTC-06:00 America/North Dakota/Beulah' },
  { value: 'America/North_Dakota/Center', name: 'UTC-06:00 America/North Dakota/Center' },
  { value: 'America/North_Dakota/New_Salem', name: 'UTC-06:00 America/North Dakota/New Salem' },
  { value: 'America/Rainy_River', name: 'UTC-06:00 America/Rainy River' },
  { value: 'America/Rankin_Inlet', name: 'UTC-06:00 America/Rankin Inlet' },
  { value: 'America/Regina', name: 'UTC-06:00 America/Regina' },
  { value: 'America/Resolute', name: 'UTC-06:00 America/Resolute' },
  { value: 'America/Swift_Current', name: 'UTC-06:00 America/Swift Current' },
  { value: 'America/Tegucigalpa', name: 'UTC-06:00 America/Tegucigalpa' },
  { value: 'America/Winnipeg', name: 'UTC-06:00 America/Winnipeg' },
  { value: 'Canada/Central', name: 'UTC-06:00 Canada/Central' },
  { value: 'Pacific/Galapagos', name: 'UTC-06:00 Pacific/Galapagos' },
  { value: 'US/Central', name: 'UTC-06:00 US/Central' },
  { value: 'America/Atikokan', name: 'UTC-05:00 America/Atikokan' },
  { value: 'America/Bogota', name: 'UTC-05:00 America/Bogota' },
  { value: 'America/Cancun', name: 'UTC-05:00 America/Cancun' },
  { value: 'America/Cayman', name: 'UTC-05:00 America/Cayman' },
  { value: 'America/Detroit', name: 'UTC-05:00 America/Detroit' },
  { value: 'America/Eirunepe', name: 'UTC-05:00 America/Eirunepe' },
  { value: 'America/Grand_Turk', name: 'UTC-05:00 America/Grand Turk' },
  { value: 'America/Guayaquil', name: 'UTC-05:00 America/Guayaquil' },
  { value: 'America/Havana', name: 'UTC-05:00 America/Havana' },
  { value: 'America/Indiana/Indianapolis', name: 'UTC-05:00 America/Indiana/Indianapolis' },
  { value: 'America/Indiana/Marengo', name: 'UTC-05:00 America/Indiana/Marengo' },
  { value: 'America/Indiana/Petersburg', name: 'UTC-05:00 America/Indiana/Petersburg' },
  { value: 'America/Indiana/Vevay', name: 'UTC-05:00 America/Indiana/Vevay' },
  { value: 'America/Indiana/Vincennes', name: 'UTC-05:00 America/Indiana/Vincennes' },
  { value: 'America/Indiana/Winamac', name: 'UTC-05:00 America/Indiana/Winamac' },
  { value: 'America/Iqaluit', name: 'UTC-05:00 America/Iqaluit' },
  { value: 'America/Jamaica', name: 'UTC-05:00 America/Jamaica' },
  { value: 'America/Kentucky/Louisville', name: 'UTC-05:00 America/Kentucky/Louisville' },
  { value: 'America/Kentucky/Monticello', name: 'UTC-05:00 America/Kentucky/Monticello' },
  { value: 'America/Lima', name: 'UTC-05:00 America/Lima' },
  { value: 'America/Nassau', name: 'UTC-05:00 America/Nassau' },
  { value: 'America/New_York', name: 'UTC-05:00 America/New York' },
  { value: 'America/Nipigon', name: 'UTC-05:00 America/Nipigon' },
  { value: 'America/Panama', name: 'UTC-05:00 America/Panama' },
  { value: 'America/Pangnirtung', name: 'UTC-05:00 America/Pangnirtung' },
  { value: 'America/Port-au-Prince', name: 'UTC-05:00 America/Port-au-Prince' },
  { value: 'America/Rio_Branco', name: 'UTC-05:00 America/Rio Branco' },
  { value: 'America/Thunder_Bay', name: 'UTC-05:00 America/Thunder Bay' },
  { value: 'America/Toronto', name: 'UTC-05:00 America/Toronto' },
  { value: 'Canada/Eastern', name: 'UTC-05:00 Canada/Eastern' },
  { value: 'Pacific/Easter', name: 'UTC-05:00 Pacific/Easter' },
  { value: 'US/Eastern', name: 'UTC-05:00 US/Eastern' },
  { value: 'America/Anguilla', name: 'UTC-04:00 America/Anguilla' },
  { value: 'America/Antigua', name: 'UTC-04:00 America/Antigua' },
  { value: 'America/Aruba', name: 'UTC-04:00 America/Aruba' },
  { value: 'America/Barbados', name: 'UTC-04:00 America/Barbados' },
  { value: 'America/Blanc-Sablon', name: 'UTC-04:00 America/Blanc-Sablon' },
  { value: 'America/Boa_Vista', name: 'UTC-04:00 America/Boa Vista' },
  { value: 'America/Campo_Grande', name: 'UTC-04:00 America/Campo Grande' },
  { value: 'America/Caracas', name: 'UTC-04:00 America/Caracas' },
  { value: 'America/Cuiaba', name: 'UTC-04:00 America/Cuiaba' },
  { value: 'America/Curacao', name: 'UTC-04:00 America/Curacao' },
  { value: 'America/Dominica', name: 'UTC-04:00 America/Dominica' },
  { value: 'America/Glace_Bay', name: 'UTC-04:00 America/Glace Bay' },
  { value: 'America/Goose_Bay', name: 'UTC-04:00 America/Goose Bay' },
  { value: 'America/Grenada', name: 'UTC-04:00 America/Grenada' },
  { value: 'America/Guadeloupe', name: 'UTC-04:00 America/Guadeloupe' },
  { value: 'America/Guyana', name: 'UTC-04:00 America/Guyana' },
  { value: 'America/Halifax', name: 'UTC-04:00 America/Halifax' },
  { value: 'America/Kralendijk', name: 'UTC-04:00 America/Kralendijk' },
  { value: 'America/La_Paz', name: 'UTC-04:00 America/La Paz' },
  { value: 'America/Lower_Princes', name: 'UTC-04:00 America/Lower Princes' },
  { value: 'America/Manaus', name: 'UTC-04:00 America/Manaus' },
  { value: 'America/Marigot', name: 'UTC-04:00 America/Marigot' },
  { value: 'America/Martinique', name: 'UTC-04:00 America/Martinique' },
  { value: 'America/Moncton', name: 'UTC-04:00 America/Moncton' },
  { value: 'America/Montserrat', name: 'UTC-04:00 America/Montserrat' },
  { value: 'America/Port_of_Spain', name: 'UTC-04:00 America/Port of Spain' },
  { value: 'America/Porto_Velho', name: 'UTC-04:00 America/Porto Velho' },
  { value: 'America/Puerto_Rico', name: 'UTC-04:00 America/Puerto Rico' },
  { value: 'America/Santo_Domingo', name: 'UTC-04:00 America/Santo Domingo' },
  { value: 'America/St_Barthelemy', name: 'UTC-04:00 America/St Barthelemy' },
  { value: 'America/St_Kitts', name: 'UTC-04:00 America/St Kitts' },
  { value: 'America/St_Lucia', name: 'UTC-04:00 America/St Lucia' },
  { value: 'America/St_Thomas', name: 'UTC-04:00 America/St Thomas' },
  { value: 'America/St_Vincent', name: 'UTC-04:00 America/St Vincent' },
  { value: 'America/Thule', name: 'UTC-04:00 America/Thule' },
  { value: 'America/Tortola', name: 'UTC-04:00 America/Tortola' },
  { value: 'Atlantic/Bermuda', name: 'UTC-04:00 Atlantic/Bermuda' },
  { value: 'Canada/Atlantic', name: 'UTC-04:00 Canada/Atlantic' },
  { value: 'America/St_Johns', name: 'UTC-03:30 America/St Johns' },
  { value: 'Canada/Newfoundland', name: 'UTC-03:30 Canada/Newfoundland' },
  { value: 'America/Araguaina', name: 'UTC-03:00 America/Araguaina' },
  { value: 'America/Argentina/Buenos_Aires', name: 'UTC-03:00 America/Argentina/Buenos Aires' },
  { value: 'America/Argentina/Catamarca', name: 'UTC-03:00 America/Argentina/Catamarca' },
  { value: 'America/Argentina/Cordoba', name: 'UTC-03:00 America/Argentina/Cordoba' },
  { value: 'America/Argentina/Jujuy', name: 'UTC-03:00 America/Argentina/Jujuy' },
  { value: 'America/Argentina/La_Rioja', name: 'UTC-03:00 America/Argentina/La Rioja' },
  { value: 'America/Argentina/Mendoza', name: 'UTC-03:00 America/Argentina/Mendoza' },
  { value: 'America/Argentina/Rio_Gallegos', name: 'UTC-03:00 America/Argentina/Rio Gallegos' },
  { value: 'America/Argentina/Salta', name: 'UTC-03:00 America/Argentina/Salta' },
  { value: 'America/Argentina/San_Juan', name: 'UTC-03:00 America/Argentina/San Juan' },
  { value: 'America/Argentina/San_Luis', name: 'UTC-03:00 America/Argentina/San Luis' },
  { value: 'America/Argentina/Tucuman', name: 'UTC-03:00 America/Argentina/Tucuman' },
  { value: 'America/Argentina/Ushuaia', name: 'UTC-03:00 America/Argentina/Ushuaia' },
  { value: 'America/Asuncion', name: 'UTC-03:00 America/Asuncion' },
  { value: 'America/Bahia', name: 'UTC-03:00 America/Bahia' },
  { value: 'America/Belem', name: 'UTC-03:00 America/Belem' },
  { value: 'America/Cayenne', name: 'UTC-03:00 America/Cayenne' },
  { value: 'America/Fortaleza', name: 'UTC-03:00 America/Fortaleza' },
  { value: 'America/Maceio', name: 'UTC-03:00 America/Maceio' },
  { value: 'America/Miquelon', name: 'UTC-03:00 America/Miquelon' },
  { value: 'America/Montevideo', name: 'UTC-03:00 America/Montevideo' },
  { value: 'America/Nuuk', name: 'UTC-03:00 America/Nuuk' },
  { value: 'America/Paramaribo', name: 'UTC-03:00 America/Paramaribo' },
  { value: 'America/Punta_Arenas', name: 'UTC-03:00 America/Punta Arenas' },
  { value: 'America/Recife', name: 'UTC-03:00 America/Recife' },
  { value: 'America/Santarem', name: 'UTC-03:00 America/Santarem' },
  { value: 'America/Santiago', name: 'UTC-03:00 America/Santiago' },
  { value: 'America/Sao_Paulo', name: 'UTC-03:00 America/Sao Paulo' },
  { value: 'Antarctica/Palmer', name: 'UTC-03:00 Antarctica/Palmer' },
  { value: 'Antarctica/Rothera', name: 'UTC-03:00 Antarctica/Rothera' },
  { value: 'Atlantic/Stanley', name: 'UTC-03:00 Atlantic/Stanley' },
  { value: 'America/Noronha', name: 'UTC-02:00 America/Noronha' },
  { value: 'Atlantic/South_Georgia', name: 'UTC-02:00 Atlantic/South Georgia' },
  { value: 'America/Scoresbysund', name: 'UTC-01:00 America/Scoresbysund' },
  { value: 'Atlantic/Azores', name: 'UTC-01:00 Atlantic/Azores' },
  { value: 'Atlantic/Cape_Verde', name: 'UTC-01:00 Atlantic/Cape Verde' },
  { value: 'Africa/Abidjan', name: 'UTC+00:00 Africa/Abidjan' },
  { value: 'Africa/Accra', name: 'UTC+00:00 Africa/Accra' },
  { value: 'Africa/Bamako', name: 'UTC+00:00 Africa/Bamako' },
  { value: 'Africa/Banjul', name: 'UTC+00:00 Africa/Banjul' },
  { value: 'Africa/Bissau', name: 'UTC+00:00 Africa/Bissau' },
  { value: 'Africa/Conakry', name: 'UTC+00:00 Africa/Conakry' },
  { value: 'Africa/Dakar', name: 'UTC+00:00 Africa/Dakar' },
  { value: 'Africa/Freetown', name: 'UTC+00:00 Africa/Freetown' },
  { value: 'Africa/Lome', name: 'UTC+00:00 Africa/Lome' },
  { value: 'Africa/Monrovia', name: 'UTC+00:00 Africa/Monrovia' },
  { value: 'Africa/Nouakchott', name: 'UTC+00:00 Africa/Nouakchott' },
  { value: 'Africa/Ouagadougou', name: 'UTC+00:00 Africa/Ouagadougou' },
  { value: 'Africa/Sao_Tome', name: 'UTC+00:00 Africa/Sao Tome' },
  { value: 'America/Danmarkshavn', name: 'UTC+00:00 America/Danmarkshavn' },
  { value: 'Antarctica/Troll', name: 'UTC+00:00 Antarctica/Troll' },
  { value: 'Atlantic/Canary', name: 'UTC+00:00 Atlantic/Canary' },
  { value: 'Atlantic/Faroe', name: 'UTC+00:00 Atlantic/Faroe' },
  { value: 'Atlantic/Madeira', name: 'UTC+00:00 Atlantic/Madeira' },
  { value: 'Atlantic/Reykjavik', name: 'UTC+00:00 Atlantic/Reykjavik' },
  { value: 'Atlantic/St_Helena', name: 'UTC+00:00 Atlantic/St Helena' },
  { value: 'Europe/Dublin', name: 'UTC+00:00 Europe/Dublin' },
  { value: 'Europe/Guernsey', name: 'UTC+00:00 Europe/Guernsey' },
  { value: 'Europe/Isle_of_Man', name: 'UTC+00:00 Europe/Isle of Man' },
  { value: 'Europe/Jersey', name: 'UTC+00:00 Europe/Jersey' },
  { value: 'Europe/Lisbon', name: 'UTC+00:00 Europe/Lisbon' },
  { value: 'Europe/London', name: 'UTC+00:00 Europe/London' },
  { value: 'UTC', name: 'UTC+00:00 UTC' },
  { value: 'UTC', name: 'UTC+00:00 UTC' },
  { value: 'Africa/Algiers', name: 'UTC+01:00 Africa/Algiers' },
  { value: 'Africa/Bangui', name: 'UTC+01:00 Africa/Bangui' },
  { value: 'Africa/Brazzaville', name: 'UTC+01:00 Africa/Brazzaville' },
  { value: 'Africa/Casablanca', name: 'UTC+01:00 Africa/Casablanca' },
  { value: 'Africa/Ceuta', name: 'UTC+01:00 Africa/Ceuta' },
  { value: 'Africa/Douala', name: 'UTC+01:00 Africa/Douala' },
  { value: 'Africa/El_Aaiun', name: 'UTC+01:00 Africa/El Aaiun' },
  { value: 'Africa/Kinshasa', name: 'UTC+01:00 Africa/Kinshasa' },
  { value: 'Africa/Lagos', name: 'UTC+01:00 Africa/Lagos' },
  { value: 'Africa/Libreville', name: 'UTC+01:00 Africa/Libreville' },
  { value: 'Africa/Luanda', name: 'UTC+01:00 Africa/Luanda' },
  { value: 'Africa/Malabo', name: 'UTC+01:00 Africa/Malabo' },
  { value: 'Africa/Ndjamena', name: 'UTC+01:00 Africa/Ndjamena' },
  { value: 'Africa/Niamey', name: 'UTC+01:00 Africa/Niamey' },
  { value: 'Africa/Porto-Novo', name: 'UTC+01:00 Africa/Porto-Novo' },
  { value: 'Africa/Tunis', name: 'UTC+01:00 Africa/Tunis' },
  { value: 'Arctic/Longyearbyen', name: 'UTC+01:00 Arctic/Longyearbyen' },
  { value: 'Europe/Amsterdam', name: 'UTC+01:00 Europe/Amsterdam' },
  { value: 'Europe/Andorra', name: 'UTC+01:00 Europe/Andorra' },
  { value: 'Europe/Belgrade', name: 'UTC+01:00 Europe/Belgrade' },
  { value: 'Europe/Berlin', name: 'UTC+01:00 Europe/Berlin' },
  { value: 'Europe/Bratislava', name: 'UTC+01:00 Europe/Bratislava' },
  { value: 'Europe/Brussels', name: 'UTC+01:00 Europe/Brussels' },
  { value: 'Europe/Budapest', name: 'UTC+01:00 Europe/Budapest' },
  { value: 'Europe/Busingen', name: 'UTC+01:00 Europe/Busingen' },
  { value: 'Europe/Copenhagen', name: 'UTC+01:00 Europe/Copenhagen' },
  { value: 'Europe/Gibraltar', name: 'UTC+01:00 Europe/Gibraltar' },
  { value: 'Europe/Ljubljana', name: 'UTC+01:00 Europe/Ljubljana' },
  { value: 'Europe/Luxembourg', name: 'UTC+01:00 Europe/Luxembourg' },
  { value: 'Europe/Madrid', name: 'UTC+01:00 Europe/Madrid' },
  { value: 'Europe/Malta', name: 'UTC+01:00 Europe/Malta' },
  { value: 'Europe/Monaco', name: 'UTC+01:00 Europe/Monaco' },
  { value: 'Europe/Oslo', name: 'UTC+01:00 Europe/Oslo' },
  { value: 'Europe/Paris', name: 'UTC+01:00 Europe/Paris' },
  { value: 'Europe/Podgorica', name: 'UTC+01:00 Europe/Podgorica' },
  { value: 'Europe/Prague', name: 'UTC+01:00 Europe/Prague' },
  { value: 'Europe/Rome', name: 'UTC+01:00 Europe/Rome' },
  { value: 'Europe/San_Marino', name: 'UTC+01:00 Europe/San Marino' },
  { value: 'Europe/Sarajevo', name: 'UTC+01:00 Europe/Sarajevo' },
  { value: 'Europe/Skopje', name: 'UTC+01:00 Europe/Skopje' },
  { value: 'Europe/Stockholm', name: 'UTC+01:00 Europe/Stockholm' },
  { value: 'Europe/Tirane', name: 'UTC+01:00 Europe/Tirane' },
  { value: 'Europe/Vaduz', name: 'UTC+01:00 Europe/Vaduz' },
  { value: 'Europe/Vatican', name: 'UTC+01:00 Europe/Vatican' },
  { value: 'Europe/Vienna', name: 'UTC+01:00 Europe/Vienna' },
  { value: 'Europe/Warsaw', name: 'UTC+01:00 Europe/Warsaw' },
  { value: 'Europe/Zagreb', name: 'UTC+01:00 Europe/Zagreb' },
  { value: 'Europe/Zurich', name: 'UTC+01:00 Europe/Zurich' },
  { value: 'Africa/Blantyre', name: 'UTC+02:00 Africa/Blantyre' },
  { value: 'Africa/Bujumbura', name: 'UTC+02:00 Africa/Bujumbura' },
  { value: 'Africa/Cairo', name: 'UTC+02:00 Africa/Cairo' },
  { value: 'Africa/Gaborone', name: 'UTC+02:00 Africa/Gaborone' },
  { value: 'Africa/Harare', name: 'UTC+02:00 Africa/Harare' },
  { value: 'Africa/Johannesburg', name: 'UTC+02:00 Africa/Johannesburg' },
  { value: 'Africa/Khartoum', name: 'UTC+02:00 Africa/Khartoum' },
  { value: 'Africa/Kigali', name: 'UTC+02:00 Africa/Kigali' },
  { value: 'Africa/Lubumbashi', name: 'UTC+02:00 Africa/Lubumbashi' },
  { value: 'Africa/Lusaka', name: 'UTC+02:00 Africa/Lusaka' },
  { value: 'Africa/Maputo', name: 'UTC+02:00 Africa/Maputo' },
  { value: 'Africa/Maseru', name: 'UTC+02:00 Africa/Maseru' },
  { value: 'Africa/Mbabane', name: 'UTC+02:00 Africa/Mbabane' },
  { value: 'Africa/Tripoli', name: 'UTC+02:00 Africa/Tripoli' },
  { value: 'Africa/Windhoek', name: 'UTC+02:00 Africa/Windhoek' },
  { value: 'Asia/Amman', name: 'UTC+02:00 Asia/Amman' },
  { value: 'Asia/Beirut', name: 'UTC+02:00 Asia/Beirut' },
  { value: 'Asia/Damascus', name: 'UTC+02:00 Asia/Damascus' },
  { value: 'Asia/Famagusta', name: 'UTC+02:00 Asia/Famagusta' },
  { value: 'Asia/Gaza', name: 'UTC+02:00 Asia/Gaza' },
  { value: 'Asia/Hebron', name: 'UTC+02:00 Asia/Hebron' },
  { value: 'Asia/Jerusalem', name: 'UTC+02:00 Asia/Jerusalem' },
  { value: 'Asia/Nicosia', name: 'UTC+02:00 Asia/Nicosia' },
  { value: 'Europe/Athens', name: 'UTC+02:00 Europe/Athens' },
  { value: 'Europe/Bucharest', name: 'UTC+02:00 Europe/Bucharest' },
  { value: 'Europe/Chisinau', name: 'UTC+02:00 Europe/Chisinau' },
  { value: 'Europe/Helsinki', name: 'UTC+02:00 Europe/Helsinki' },
  { value: 'Europe/Kaliningrad', name: 'UTC+02:00 Europe/Kaliningrad' },
  { value: 'Europe/Kiev', name: 'UTC+02:00 Europe/Kiev' },
  { value: 'Europe/Mariehamn', name: 'UTC+02:00 Europe/Mariehamn' },
  { value: 'Europe/Riga', name: 'UTC+02:00 Europe/Riga' },
  { value: 'Europe/Sofia', name: 'UTC+02:00 Europe/Sofia' },
  { value: 'Europe/Tallinn', name: 'UTC+02:00 Europe/Tallinn' },
  { value: 'Europe/Uzhgorod', name: 'UTC+02:00 Europe/Uzhgorod' },
  { value: 'Europe/Vilnius', name: 'UTC+02:00 Europe/Vilnius' },
  { value: 'Europe/Zaporozhye', name: 'UTC+02:00 Europe/Zaporozhye' },
  { value: 'Africa/Addis_Ababa', name: 'UTC+03:00 Africa/Addis Ababa' },
  { value: 'Africa/Asmara', name: 'UTC+03:00 Africa/Asmara' },
  { value: 'Africa/Dar_es_Salaam', name: 'UTC+03:00 Africa/Dar es Salaam' },
  { value: 'Africa/Djibouti', name: 'UTC+03:00 Africa/Djibouti' },
  { value: 'Africa/Juba', name: 'UTC+03:00 Africa/Juba' },
  { value: 'Africa/Kampala', name: 'UTC+03:00 Africa/Kampala' },
  { value: 'Africa/Mogadishu', name: 'UTC+03:00 Africa/Mogadishu' },
  { value: 'Africa/Nairobi', name: 'UTC+03:00 Africa/Nairobi' },
  { value: 'Antarctica/Syowa', name: 'UTC+03:00 Antarctica/Syowa' },
  { value: 'Asia/Aden', name: 'UTC+03:00 Asia/Aden' },
  { value: 'Asia/Baghdad', name: 'UTC+03:00 Asia/Baghdad' },
  { value: 'Asia/Bahrain', name: 'UTC+03:00 Asia/Bahrain' },
  { value: 'Asia/Kuwait', name: 'UTC+03:00 Asia/Kuwait' },
  { value: 'Asia/Qatar', name: 'UTC+03:00 Asia/Qatar' },
  { value: 'Asia/Riyadh', name: 'UTC+03:00 Asia/Riyadh' },
  { value: 'Europe/Istanbul', name: 'UTC+03:00 Europe/Istanbul' },
  { value: 'Europe/Kirov', name: 'UTC+03:00 Europe/Kirov' },
  { value: 'Europe/Minsk', name: 'UTC+03:00 Europe/Minsk' },
  { value: 'Europe/Moscow', name: 'UTC+03:00 Europe/Moscow' },
  { value: 'Europe/Simferopol', name: 'UTC+03:00 Europe/Simferopol' },
  { value: 'Indian/Antananarivo', name: 'UTC+03:00 Indian/Antananarivo' },
  { value: 'Indian/Comoro', name: 'UTC+03:00 Indian/Comoro' },
  { value: 'Indian/Mayotte', name: 'UTC+03:00 Indian/Mayotte' },
  { value: 'Asia/Tehran', name: 'UTC+03:30 Asia/Tehran' },
  { value: 'Asia/Baku', name: 'UTC+04:00 Asia/Baku' },
  { value: 'Asia/Dubai', name: 'UTC+04:00 Asia/Dubai' },
  { value: 'Asia/Muscat', name: 'UTC+04:00 Asia/Muscat' },
  { value: 'Asia/Tbilisi', name: 'UTC+04:00 Asia/Tbilisi' },
  { value: 'Asia/Yerevan', name: 'UTC+04:00 Asia/Yerevan' },
  { value: 'Europe/Astrakhan', name: 'UTC+04:00 Europe/Astrakhan' },
  { value: 'Europe/Samara', name: 'UTC+04:00 Europe/Samara' },
  { value: 'Europe/Saratov', name: 'UTC+04:00 Europe/Saratov' },
  { value: 'Europe/Ulyanovsk', name: 'UTC+04:00 Europe/Ulyanovsk' },
  { value: 'Europe/Volgograd', name: 'UTC+04:00 Europe/Volgograd' },
  { value: 'Indian/Mahe', name: 'UTC+04:00 Indian/Mahe' },
  { value: 'Indian/Mauritius', name: 'UTC+04:00 Indian/Mauritius' },
  { value: 'Indian/Reunion', name: 'UTC+04:00 Indian/Reunion' },
  { value: 'Asia/Kabul', name: 'UTC+04:30 Asia/Kabul' },
  { value: 'Antarctica/Mawson', name: 'UTC+05:00 Antarctica/Mawson' },
  { value: 'Asia/Aqtau', name: 'UTC+05:00 Asia/Aqtau' },
  { value: 'Asia/Aqtobe', name: 'UTC+05:00 Asia/Aqtobe' },
  { value: 'Asia/Ashgabat', name: 'UTC+05:00 Asia/Ashgabat' },
  { value: 'Asia/Atyrau', name: 'UTC+05:00 Asia/Atyrau' },
  { value: 'Asia/Dushanbe', name: 'UTC+05:00 Asia/Dushanbe' },
  { value: 'Asia/Karachi', name: 'UTC+05:00 Asia/Karachi' },
  { value: 'Asia/Oral', name: 'UTC+05:00 Asia/Oral' },
  { value: 'Asia/Qyzylorda', name: 'UTC+05:00 Asia/Qyzylorda' },
  { value: 'Asia/Samarkand', name: 'UTC+05:00 Asia/Samarkand' },
  { value: 'Asia/Tashkent', name: 'UTC+05:00 Asia/Tashkent' },
  { value: 'Asia/Yekaterinburg', name: 'UTC+05:00 Asia/Yekaterinburg' },
  { value: 'Indian/Kerguelen', name: 'UTC+05:00 Indian/Kerguelen' },
  { value: 'Indian/Maldives', name: 'UTC+05:00 Indian/Maldives' },
  { value: 'Asia/Colombo', name: 'UTC+05:30 Asia/Colombo' },
  { value: 'Asia/Kolkata', name: 'UTC+05:30 Asia/Kolkata' },
  { value: 'Asia/Kathmandu', name: 'UTC+05:45 Asia/Kathmandu' },
  { value: 'Antarctica/Vostok', name: 'UTC+06:00 Antarctica/Vostok' },
  { value: 'Asia/Almaty', name: 'UTC+06:00 Asia/Almaty' },
  { value: 'Asia/Bishkek', name: 'UTC+06:00 Asia/Bishkek' },
  { value: 'Asia/Dhaka', name: 'UTC+06:00 Asia/Dhaka' },
  { value: 'Asia/Omsk', name: 'UTC+06:00 Asia/Omsk' },
  { value: 'Asia/Qostanay', name: 'UTC+06:00 Asia/Qostanay' },
  { value: 'Asia/Thimphu', name: 'UTC+06:00 Asia/Thimphu' },
  { value: 'Asia/Urumqi', name: 'UTC+06:00 Asia/Urumqi' },
  { value: 'Indian/Chagos', name: 'UTC+06:00 Indian/Chagos' },
  { value: 'Asia/Yangon', name: 'UTC+06:30 Asia/Yangon' },
  { value: 'Indian/Cocos', name: 'UTC+06:30 Indian/Cocos' },
  { value: 'Antarctica/Davis', name: 'UTC+07:00 Antarctica/Davis' },
  { value: 'Asia/Bangkok', name: 'UTC+07:00 Asia/Bangkok' },
  { value: 'Asia/Barnaul', name: 'UTC+07:00 Asia/Barnaul' },
  { value: 'Asia/Ho_Chi_Minh', name: 'UTC+07:00 Asia/Ho Chi Minh' },
  { value: 'Asia/Hovd', name: 'UTC+07:00 Asia/Hovd' },
  { value: 'Asia/Jakarta', name: 'UTC+07:00 Asia/Jakarta' },
  { value: 'Asia/Krasnoyarsk', name: 'UTC+07:00 Asia/Krasnoyarsk' },
  { value: 'Asia/Novokuznetsk', name: 'UTC+07:00 Asia/Novokuznetsk' },
  { value: 'Asia/Novosibirsk', name: 'UTC+07:00 Asia/Novosibirsk' },
  { value: 'Asia/Phnom_Penh', name: 'UTC+07:00 Asia/Phnom Penh' },
  { value: 'Asia/Pontianak', name: 'UTC+07:00 Asia/Pontianak' },
  { value: 'Asia/Tomsk', name: 'UTC+07:00 Asia/Tomsk' },
  { value: 'Asia/Vientiane', name: 'UTC+07:00 Asia/Vientiane' },
  { value: 'Indian/Christmas', name: 'UTC+07:00 Indian/Christmas' },
  { value: 'Antarctica/Casey', name: 'UTC+08:00 Antarctica/Casey' },
  { value: 'Asia/Brunei', name: 'UTC+08:00 Asia/Brunei' },
  { value: 'Asia/Choibalsan', name: 'UTC+08:00 Asia/Choibalsan' },
  { value: 'Asia/Hong_Kong', name: 'UTC+08:00 Asia/Hong Kong' },
  { value: 'Asia/Irkutsk', name: 'UTC+08:00 Asia/Irkutsk' },
  { value: 'Asia/Kuala_Lumpur', name: 'UTC+08:00 Asia/Kuala Lumpur' },
  { value: 'Asia/Kuching', name: 'UTC+08:00 Asia/Kuching' },
  { value: 'Asia/Macau', name: 'UTC+08:00 Asia/Macau' },
  { value: 'Asia/Makassar', name: 'UTC+08:00 Asia/Makassar' },
  { value: 'Asia/Manila', name: 'UTC+08:00 Asia/Manila' },
  { value: 'Asia/Shanghai', name: 'UTC+08:00 Asia/Shanghai' },
  { value: 'Asia/Singapore', name: 'UTC+08:00 Asia/Singapore' },
  { value: 'Asia/Taipei', name: 'UTC+08:00 Asia/Taipei' },
  { value: 'Asia/Ulaanbaatar', name: 'UTC+08:00 Asia/Ulaanbaatar' },
  { value: 'Australia/Perth', name: 'UTC+08:00 Australia/Perth' },
  { value: 'Australia/Eucla', name: 'UTC+08:45 Australia/Eucla' },
  { value: 'Asia/Chita', name: 'UTC+09:00 Asia/Chita' },
  { value: 'Asia/Dili', name: 'UTC+09:00 Asia/Dili' },
  { value: 'Asia/Jayapura', name: 'UTC+09:00 Asia/Jayapura' },
  { value: 'Asia/Khandyga', name: 'UTC+09:00 Asia/Khandyga' },
  { value: 'Asia/Pyongyang', name: 'UTC+09:00 Asia/Pyongyang' },
  { value: 'Asia/Seoul', name: 'UTC+09:00 Asia/Seoul' },
  { value: 'Asia/Tokyo', name: 'UTC+09:00 Asia/Tokyo' },
  { value: 'Asia/Yakutsk', name: 'UTC+09:00 Asia/Yakutsk' },
  { value: 'Pacific/Palau', name: 'UTC+09:00 Pacific/Palau' },
  { value: 'Australia/Darwin', name: 'UTC+09:30 Australia/Darwin' },
  { value: 'Antarctica/DumontDUrville', name: 'UTC+10:00 Antarctica/DumontDUrville' },
  { value: 'Asia/Ust-Nera', name: 'UTC+10:00 Asia/Ust-Nera' },
  { value: 'Asia/Vladivostok', name: 'UTC+10:00 Asia/Vladivostok' },
  { value: 'Australia/Brisbane', name: 'UTC+10:00 Australia/Brisbane' },
  { value: 'Australia/Lindeman', name: 'UTC+10:00 Australia/Lindeman' },
  { value: 'Pacific/Chuuk', name: 'UTC+10:00 Pacific/Chuuk' },
  { value: 'Pacific/Guam', name: 'UTC+10:00 Pacific/Guam' },
  { value: 'Pacific/Port_Moresby', name: 'UTC+10:00 Pacific/Port Moresby' },
  { value: 'Pacific/Saipan', name: 'UTC+10:00 Pacific/Saipan' },
  { value: 'Australia/Adelaide', name: 'UTC+10:30 Australia/Adelaide' },
  { value: 'Australia/Broken_Hill', name: 'UTC+10:30 Australia/Broken Hill' },
  { value: 'Antarctica/Macquarie', name: 'UTC+11:00 Antarctica/Macquarie' },
  { value: 'Asia/Magadan', name: 'UTC+11:00 Asia/Magadan' },
  { value: 'Asia/Sakhalin', name: 'UTC+11:00 Asia/Sakhalin' },
  { value: 'Asia/Srednekolymsk', name: 'UTC+11:00 Asia/Srednekolymsk' },
  { value: 'Australia/Currie', name: 'UTC+11:00 Australia/Currie' },
  { value: 'Australia/Hobart', name: 'UTC+11:00 Australia/Hobart' },
  { value: 'Australia/Lord_Howe', name: 'UTC+11:00 Australia/Lord Howe' },
  { value: 'Australia/Melbourne', name: 'UTC+11:00 Australia/Melbourne' },
  { value: 'Australia/Sydney', name: 'UTC+11:00 Australia/Sydney' },
  { value: 'Pacific/Bougainville', name: 'UTC+11:00 Pacific/Bougainville' },
  { value: 'Pacific/Efate', name: 'UTC+11:00 Pacific/Efate' },
  { value: 'Pacific/Guadalcanal', name: 'UTC+11:00 Pacific/Guadalcanal' },
  { value: 'Pacific/Kosrae', name: 'UTC+11:00 Pacific/Kosrae' },
  { value: 'Pacific/Noumea', name: 'UTC+11:00 Pacific/Noumea' },
  { value: 'Pacific/Pohnpei', name: 'UTC+11:00 Pacific/Pohnpei' },
  { value: 'Asia/Anadyr', name: 'UTC+12:00 Asia/Anadyr' },
  { value: 'Asia/Kamchatka', name: 'UTC+12:00 Asia/Kamchatka' },
  { value: 'Pacific/Fiji', name: 'UTC+12:00 Pacific/Fiji' },
  { value: 'Pacific/Funafuti', name: 'UTC+12:00 Pacific/Funafuti' },
  { value: 'Pacific/Kwajalein', name: 'UTC+12:00 Pacific/Kwajalein' },
  { value: 'Pacific/Majuro', name: 'UTC+12:00 Pacific/Majuro' },
  { value: 'Pacific/Nauru', name: 'UTC+12:00 Pacific/Nauru' },
  { value: 'Pacific/Norfolk', name: 'UTC+12:00 Pacific/Norfolk' },
  { value: 'Pacific/Tarawa', name: 'UTC+12:00 Pacific/Tarawa' },
  { value: 'Pacific/Wake', name: 'UTC+12:00 Pacific/Wake' },
  { value: 'Pacific/Wallis', name: 'UTC+12:00 Pacific/Wallis' },
  { value: 'Antarctica/McMurdo', name: 'UTC+13:00 Antarctica/McMurdo' },
  { value: 'Pacific/Auckland', name: 'UTC+13:00 Pacific/Auckland' },
  { value: 'Pacific/Enderbury', name: 'UTC+13:00 Pacific/Enderbury' },
  { value: 'Pacific/Fakaofo', name: 'UTC+13:00 Pacific/Fakaofo' },
  { value: 'Pacific/Tongatapu', name: 'UTC+13:00 Pacific/Tongatapu' },
  { value: 'Pacific/Chatham', name: 'UTC+13:45 Pacific/Chatham' },
  { value: 'Pacific/Apia', name: 'UTC+14:00 Pacific/Apia' },
  { value: 'Pacific/Kiritimati', name: 'UTC+14:00 Pacific/Kiritimati' },
];

export { GENDERS, TITLES, TIMEZONES };