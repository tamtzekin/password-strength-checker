import React, { Component } from "react";
import "./PasswordStrengthMeter.css";
import zxcvbn from "zxcvbn";
import { timeout } from "q";

class PasswordStrengthMeter extends Component {
    render() {
        const { password } = this.props;
        const testedResult = zxcvbn(password);
        return (
            <div className="password-strength-meter">
                <progress
                    className={`password-strength-meter-progress strength-${this.createPasswordLabel(
                        testedResult
                    )}`}
                    value={testedResult.score}
                    max="4"
                />
                <br />
                <label className="password-strength-meter-label">
                    {password && (
                        <>
                            <em>Your password is: </em>
                            <strong>
                                {this.createPasswordLabel(testedResult)}
                            </strong>
                        </>
                    )}
                </label>
            </div>
        );
    }

    createPasswordLabel = result => {
        switch (result.score) {
            case 0:
                return "weak";
            case 1:
                return "weak";
            case 2:
                return "average";
            case 3:
                return "good";
            case 4:
                return "strong";
            default:
                return "too weak";
        }
    };
}

export default PasswordStrengthMeter;
