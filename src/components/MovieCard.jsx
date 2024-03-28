import { useNavigate } from "react-router-dom";

const MovieCard = () => {
  const navigate = useNavigate();

  const handleNavigateDetail = () => {
    navigate("/movie-detail");
  };

  return (
    <div>
      <div
        className="flex min-h-screen flex-col overflow-hidden bg-gray-500 dark:bg-gray-700"
        onClick={handleNavigateDetail}
      >
        <div className="absolute inset-0 bg-center"></div>
        <div className="group relative m-0 flex h-98 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src="https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_47b4ca39-2fb6-45a2-9e85-d9ef34016e8a.jpg?v=1505078993"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
              Sicario
            </h1>
            <h1 className="text-sm font-light text-gray-200 shadow-xl">
              Denis Villeneuve, 2015
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
