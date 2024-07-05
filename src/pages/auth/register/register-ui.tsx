import "./style.scss";
import { useRegisterUser } from "./use-register-user";

export const RegisterUserInterface: React.FC<
  ReturnType<typeof useRegisterUser>
> = ({ fields, isPending, onSubmit }) => {
  return (
    <div className="register-container">
      <form onSubmit={onSubmit}>
        <div className="form-field">
          <label className="label">Full Name</label>
          <input
            disabled={isPending}
            {...fields.name}
            type="text"
            autoComplete="name"
            placeholder="Full Name"
          />
        </div>
        <div className="form-field">
          <label className="label">Phone Number</label>
          <input
            disabled={isPending}
            {...fields.phoneNumber}
            type="number"
            placeholder="Phone Number"
          />{" "}
        </div>
        <div className="form-field">
          <label className="label">Pin</label>
          <input
            disabled={isPending}
            {...fields.pin}
            type="password"
            autoComplete="off"
            placeholder="Password"
          />{" "}
        </div>
        <button disabled={isPending} className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
