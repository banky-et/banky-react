import "./style.scss";
import { useRegisterUser } from "./use-register-user";

export const RegisterUserInterface: React.FC<
  ReturnType<typeof useRegisterUser>
> = ({ fields, isPending, error, onSubmit }) => {
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
          />
        </div>
        <div className="form-field">
          <label className="label">Phone Number</label>
          <input disabled={isPending} {...fields.phoneNumber} type="number" />
        </div>
        <div className="form-field">
          <label className="label">Pin</label>
          <input
            disabled={isPending}
            {...fields.pin}
            type="password"
            autoComplete="off"
          />
        </div>
        {error && <div className="error">{(error as any).error}</div>}
        <button disabled={isPending} className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
