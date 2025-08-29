import { useEffect } from "react";
const Certificate = () => {
  useEffect(() => {
    window.open("https://drive.google.com/drive/folders/1ULKgrU5EfkT7trh8QaRontY_VHwoq7EB", "_blank"); // GANTI dengan link kamu
  }, []);

  return (
    <div className="text-white text-center mt-5">
      <h4>Opening your certificate in a new tab...</h4>
    </div>
  );
};

export default Certificate;
