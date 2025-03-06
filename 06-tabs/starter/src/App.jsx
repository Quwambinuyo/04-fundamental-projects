import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [jobs, setJobs] = useState([]); // State to store job data
  const [currentItem, setCurrentItem] = useState(0); // State to track the current selected job

  // Function to fetch job data from the API
  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs); // Set the fetched jobs to state
      setIsLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setIsLoading(false); // Handle error and set loading to false
    }
  };

  // Fetch job data when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Show loading spinner while data is being fetched
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* BtnContainer is responsible for rendering the job selection buttons */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      {/* JobInfo renders detailed information for the selected job */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
