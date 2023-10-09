import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationApplication } from "../../utility/localstorage";
import Statistics from "./Statistics";



const MainStatistics = () => {
    const donations = useLoaderData();
 const [dataLength, setDataLength] = useState(4);
    const [appliedDonations, setAppliedDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);

   
    const handleDonationssFilter = filter =>{
        if(filter === 'all'){
            setDisplayDonations(appliedDonations);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedDonations.filter(donation => donation.remote_or_onsite === 'Remote');
            setDisplayDonations(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedDonations.filter(donation => donation.remote_or_onsite === 'Onsite');
            setDisplayDonations(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedDonationIds = getStoredDonationApplication();
        if (donations.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const donationsApplied = [];
            for (const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    donationsApplied.push(donation)
                }
            }
            setAppliedDonations(donationsApplied);
            setDisplayDonations(donationsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [donations])

    let totalDonations = donations.length  // Pass the total donations count
    let yourDonations = appliedDonations.length 
    return (
        <div>

   <Statistics
                percentageYourDonations= {((yourDonations / totalDonations) * 100).toFixed(2)}
            percentageRemainingDonations ={(((totalDonations - yourDonations) / totalDonations) * 100).toFixed(2)}
   >
               
   </Statistics>
        </div>
    );
};

export default MainStatistics;