export default function UserInput({ handleChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial investment</label>
          <input
            id=""
            name=""
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => handleChange("initialInvestment", Number(event.target.value))}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual investment</label>
          <input
            id=""
            name=""
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => handleChange("annualInvestment", Number(event.target.value))}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">Expected return</label>
          <input
            id=""
            name=""
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => handleChange("expectedReturn", Number(event.target.value))}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            id=""
            name=""
            type="number"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", Number(event.target.value))}
            required
          />
        </p>
      </div>
    </section>
  )
}
