import React, { useEffect, useState } from "react";

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("https://9e36-2401-4900-1b89-a2f-687e-be60-6906-b4c2.ngrok-free.app/api/v1/users/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "AJdwgJWyVWadIHzi34Z5HAmE1KlZViTf",
        },
        body: JSON.stringify({
          industry: "Information Technology",
          company_size: "11-50",
          country: "India",
          job_title: "Marketing Manager",
          website: "https://example.com",
          linkedin_url: "https://linkedin.com/in/example",
          how_did_you_hear: "Google Search",
          interested_features: "AI Matching, Analytics",
          marketing_opt_in: true,
        }),
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data</div>;

  return (
    <>
    </>
  );
}

export default UserProfile;
