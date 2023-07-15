import { Suspense } from "react";
import styles from "../../page.module.css";
import Loading from "react-loading";

const getAgeDetails = async (name) => {
  try {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const result = await response.json();
    return result.age ?? 0;
  } catch (error) {
    console.log("Error fetching age details: ", error);
    return null;
  }
};

const getCountryDetails = async (name) => {
  try {
    let response = await fetch(`https://api.nationalize.io/?name=${name}`);
    let result = await response.json();
    return result.country[0].country_id ?? "Sorry Couldn't Find";
  } catch (error) {
    console.log(error);
    return "";
  }
};

const getGender = async (name) => {
  try {
    let response = await fetch(`https://api.genderize.io/?name=${name}`);
    let result = await response.json();
    return result.gender ?? "";
  } catch (error) {
    console.log(error);
    return "";
  }
};

const Profile = async ({ params }) => {
  const age = getAgeDetails(params.name);
  const country = getCountryDetails(params.name);
  const gender = getGender(params.name);
  const [ageResult, countryResult, genderResult] = await Promise.all([
    age,
    country,
    gender,
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.main}>
        <div className={styles.center}>{params.name}</div>
        <div className={styles.grid}>
          <div>Age : {ageResult}</div>
          <div>Gender : {genderResult}</div>
          <div>Country : {countryResult}</div>
        </div>
      </div>
    </Suspense>
  );
};

export default Profile;
