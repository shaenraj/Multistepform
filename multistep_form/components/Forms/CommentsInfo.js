import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function CommentsInfo({ formStep, nextFormStep }) {
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
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
       <button className="step" style={{textAlign:"left",backgroundColor:"orange", marginBottom:"10px"}}>Step3:Final comments</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="comments">comments</label>
          <textarea 
          type="text"
          id="comments"
          col="4" rows="5"
           {...register("comments", { required: true })}
          >

          </textarea>

          {errors.comments && (
            <p className={styles.errorText}>comments are mandatory</p>
          )}
        </div>
        <button type="submit" style={{textAlign:"center",width:"30%",marginLeft:"70%",backgroundColor:"purple"}}>Next></button>
      </form>
    </div>
  );
}
