import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Function to remove a tour from the list
  // Passed down to the Tours component (Tours.js) and then to individual Tour components (Tour.js)
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Show loading screen while data is being fetched
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Display message when there are no tours left
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            onClick={fetchTours}
            className="btn"
            type="button"
            style={{ marginTop: "2rem" }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        {/* Passing the list of tours and removeTour function to the Tours component */}
        {/* Tours component (Tours.js) will render each tour using the Tour component (Tour.js) */}
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};

export default App;
