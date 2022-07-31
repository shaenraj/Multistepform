import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";
import styled from "styled-components";


const ButtonInfo = styled.button`
    text-align:left;
    background-color: orange !important;
    margin-bottom:10px;
`;
export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <ButtonInfo className="step" >Step1: Your details</ButtonInfo>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
        <div style={{display:"flex"}}>
          <div>
        <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", {
              required: true,
            })}
          />
          {errors.firstname && (
            <p className={styles.errorText}>firstname is required</p>
          )}
        </div>
        <div>
        <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", {
              required: true,
            })}
          />
          {errors.lastname && (
            <p className={styles.errorText}>lastname is required</p>
          )}
</div>
        </div>
        </div>
        <div className={styles.formRow} style={{width:"46%"}}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className={styles.errorText}>Email is required</p>
          )}
        </div>
        <button type="submit" style={{textAlign:"center",width:"30%",marginLeft:"70%",backgroundColor:"purple"}}>Next></button>
      </form>
    </div>
  );
}
