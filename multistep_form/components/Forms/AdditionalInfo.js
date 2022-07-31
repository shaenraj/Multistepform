import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function AdditionalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    values,
    handleChange,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    console.log(values);
    setFormValues(values);
    console.log(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <button className="step" style={{textAlign:"left",backgroundColor:"orange", marginBottom:"10px"}}>Step2: More comments</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
        <div style={{display:"flex"}}>
          <div>
        <label htmlFor="telephonenumber">Telephone Number</label>
          <input
            type="number"
            minLength="10"
             maxLength="10"
            id="telephonenumber"
            {...register("telephonenumber", {
              required: true,
            })}
          />
          {errors.telephonenumber && (
            <p className={styles.errorText}>telephonenumber is required</p>
          )}
        </div>
        <div>
        <label htmlFor="gender">
        Gender
      </label>
      <select
        name="gender"
        onChange={handleChange}
        {...register("gender", {
          required: true,
        })}
      >
        <option value="" label="Select a gender">
          Select a gender{" "}
        </option>
        <option value="Male" label="Male">
          {" "}
          Male
        </option>
        <option value="Female" label="Female">
          Female
        </option>
     
        <option value="others" label="others">
          others
        </option>
      </select>
      {errors.gender && (
            <p className={styles.errorText}>gender is required</p>
          )}
</div>
        </div>
        </div>
        <div className={styles.formRow} style={{width:"46%"}}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              required: true,
            })}
          />
          {errors.email && (
            <p className={styles.errorText}>dob is required</p>
          )}
        </div>
        <button type="submit" style={{textAlign:"center",width:"30%",marginLeft:"70%",backgroundColor:"purple"}}>Next></button>
      </form>
    </div>
  );
}
