import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Save, Navigation, Wind } from "lucide-react";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "0.5rem",
};

const defaultCenter = [51.505, -0.09]; // Default latitude and longitude
const GEOCODING_API_URL = "https://api.opencagedata.com/geocode/v1/json";
const GEOCODING_API_KEY = "093d461680ea41ec88d992bd5ef75cc9";
const AIR_QUALITY_API_URL = "https://api.waqi.info/feed";
const AIR_QUALITY_API_KEY = "25a905c1f5ee94f97101d516583fc14448f080e1";


export default function GoogleMap() {
  const mapRef = useRef(null); // Reference to the map container
  const leafletMapRef = useRef(null); // Reference to the Leaflet map instance
  const [startPlace, setStartPlace] = useState("");
  const [endPlace, setEndPlace] = useState("");
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);
  const [airQuality, setAirQuality] = useState(null); // Air quality data

  useEffect(() => {
    if (!leafletMapRef.current) {
      // Initialize the map
      leafletMapRef.current = L.map(mapRef.current).setView(defaultCenter, 13);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMapRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const geocodePlace = async (place) => {
    try {
      const response = await axios.get(GEOCODING_API_URL, {
        params: { q: place, key: GEOCODING_API_KEY },
      });

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        return [lat, lng];
      } else {
        alert(`No results found for "${place}". Please try another location.`);
        return null;
      }
    } catch (error) {
      alert("Error fetching geocoding data. Please try again later.");
      console.error(error);
      return null;
    }
  };

  const fetchAirQuality = async (coords) => {
    try {
      const response = await axios.get(
        `${AIR_QUALITY_API_URL}/geo:${coords[0]};${coords[1]}/`,
        {
          params: { token: AIR_QUALITY_API_KEY },
        }
      );
      if (response.data.status === "ok") {
        setAirQuality(response.data.data);
      } else {
        alert("Failed to fetch air quality data.");
      }
    } catch (error) {
      alert("Error fetching air quality data. Please try again later.");
      console.error(error);
    }
  };

  const handleSetLocations = async () => {
    const start = await geocodePlace(startPlace);
    const end = await geocodePlace(endPlace);

    if (start && end) {
      setStartCoords(start);
      setEndCoords(end);

      addMarker(start, "Start Location");
      addMarker(end, "End Location");

      if (leafletMapRef.current) {
        L.polyline([start, end], { color: "blue" }).addTo(
          leafletMapRef.current
        );
        leafletMapRef.current.fitBounds([start, end]);
      }
    }
  };

  const handleAirQualityCheck = async () => {
    if (startCoords) {
      await fetchAirQuality(startCoords);
    } else {
      alert("Please set a start location first.");
    }
  };

  const addMarker = (coords, label) => {
    if (leafletMapRef.current && coords) {
      L.marker(coords)
        .addTo(leafletMapRef.current)
        .bindPopup(label)
        .openPopup();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div
            ref={mapRef}
            style={mapContainerStyle}
            className="bg-gray-100 rounded-lg"
          />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
            <h2 className="text-xl font-semibold mb-4">Route Controls</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Point
                </label>
                <input
                  type="text"
                  value={startPlace}
                  placeholder="Enter start location"
                  onChange={(e) => setStartPlace(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
               

                 <input
                  type="text"
                  value={endPlace}
                  onChange={(e) => setEndPlace(e.target.value)}
                  placeholder="Enter destination"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSetLocations}
                className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                <Navigation className="h-5 w-5" />
                <span>Calculate Route</span>
              </button>

              <button
                onClick={handleAirQualityCheck}
                className="w-full flex items-center justify-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200"
              >
                <Wind className="h-5 w-5" />
                <span>Check Air Quality</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50">
                <Save className="h-5 w-5" />
                <span>Save Route</span>
              </button>
            </div>

            {airQuality && (
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <h3 className="text-lg font-medium">Air Quality Data</h3>
                <p>
                  <strong>AQI:</strong> {airQuality.aqi}
                </p>
                <p>
                  <strong>Location:</strong> {airQuality.city.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
