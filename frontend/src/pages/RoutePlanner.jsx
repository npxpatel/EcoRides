import GoogleMap from '../components/route-planner/GoogleMap';
import RouteControls from '../components/route-planner/RouteControls';

export default function RoutePlanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Plan Your Route</h1>
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <GoogleMap />
        </div>
        <div className="lg:col-span-1">
          <RouteControls />
        </div>
      </div> */}
    <GoogleMap />  
    </div>
  );
}