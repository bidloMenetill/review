import { images } from "../features/ChangeBgRehearsalRooms";

const StaticBgRehearsalRooms = () => (
  <section
    className="h-[1174px]  bg-cover bg-no-repeat bg-center transition-all duration-1000"
    style={{ backgroundImage: `url(${images[0]})` }}
  />
);
export default StaticBgRehearsalRooms;
