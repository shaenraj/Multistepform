import { useFormData } from "../context";

export default function FormCompleted() {
  const { data } = useFormData();

  const handleSubmit =()=> {
    fetch('http://localhost:8000/api/adduserdetails', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify(data),
})
    .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <h2> click submit to insert data in sqlite database</h2>

      <button onClick={handleSubmit}>submit</button>

      {/* <pre style={{textAlign:"left"}}>{JSON.stringify(data)}</pre> */}
    </>
  );
}
