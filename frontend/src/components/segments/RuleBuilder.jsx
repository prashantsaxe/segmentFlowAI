import React, { useState } from 'react';

const RuleBuilder = ({ onRuleChange }) => {
    const [rules, setRules] = useState([]);

    const addRule = () => {
        setRules([...rules, { condition: '', value: '' }]);
    };

    const handleConditionChange = (index, condition) => {
        const updatedRules = [...rules];
        updatedRules[index].condition = condition;
        setRules(updatedRules);
        onRuleChange(updatedRules);
    };

    const handleValueChange = (index, value) => {
        const updatedRules = [...rules];
        updatedRules[index].value = value;
        setRules(updatedRules);
        onRuleChange(updatedRules);
    };

    const removeRule = (index) => {
        const updatedRules = rules.filter((_, i) => i !== index);
        setRules(updatedRules);
        onRuleChange(updatedRules);
    };

    return (
        <div className="rule-builder">
            <h2 className="text-lg font-semibold">Rule Builder</h2>
            {rules.map((rule, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        type="text"
                        placeholder="Condition"
                        value={rule.condition}
                        onChange={(e) => handleConditionChange(index, e.target.value)}
                        className="border p-2 mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Value"
                        value={rule.value}
                        onChange={(e) => handleValueChange(index, e.target.value)}
                        className="border p-2 mr-2"
                    />
                    <button onClick={() => removeRule(index)} className="bg-red-500 text-white p-2">
                        Remove
                    </button>
                </div>
            ))}
            <button onClick={addRule} className="bg-blue-500 text-white p-2">
                Add Rule
            </button>
        </div>
    );
};

export default RuleBuilder;