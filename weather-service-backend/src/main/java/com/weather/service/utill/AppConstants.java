package com.weather.service.utill;

public class AppConstants {

	public static final String WEATHER_SEARCH_BY_CITY_COUNTRY_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
	private static final String CITY_COUNTRY_PARAM = "?q=";
	private static final String APP_KEY = "cd54b7fbdaf08c6e9677d93bfb7a35b2";
	private static final String APP_ID_PARAM = "&appid=" + APP_KEY;
	private static final String LAT_PARAM = "?lat=";
	private static final String LON_PARAM = "&lon=";

	public static final String SEARCH_BY_CITY_COUNTRY = CITY_COUNTRY_PARAM + APP_ID_PARAM;
	public static final String SEARCH_BY_COORDINATES = LAT_PARAM + LON_PARAM + APP_ID_PARAM;

	public static final String BASE_PACKAGE = "com.weather.service";

}
