import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* Job Info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
