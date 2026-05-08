const OwnerProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      {/* name */}
      <h1 className="text-4xl font-bold mb-10">BOBA The Hungry Bear</h1>

      {/* photo box */}
      <div className="w-72 h-72 bg-gray-200 mb-10 flex items-center justify-center rounded-lg shadow-sm border-gray-300">
        <span className="text-gray-500 font-medium">picture</span>
      </div>

      {/* description */}
      <h2 div className="texy-lg font-bold mb-4">
        Short Biography:
      </h2>
      <p className="max-w-3xl text-gray-600 leading-relaxed px-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus
        fugit maxime cumque laborum et aliquam accusamus ratione quidem, nulla
        eum? Amet id deleniti vitae tempore in autem minima fugiat.
      </p>
    </div>
  );
};

export default OwnerProfile;
