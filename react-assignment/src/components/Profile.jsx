const Profile = ({ name, email }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p className="mt-2">
        <span className="font-medium">Name:</span> {name}
      </p>
      <p className="mt-2">
        <span className="font-medium">Email:</span> {email}
      </p>
    </div>
  );
};

export default Profile;
