import React, { useState } from 'react';
import RuleBuilder from './RuleBuilder';
import SegmentPreview from './SegmentPreview';

const AudienceBuilder = () => {
    const [rules, setRules] = useState([]);
    const [segmentName, setSegmentName] = useState('');

    const handleAddRule = (newRule) => {
        setRules([...rules, newRule]);
    };

    const handleRemoveRule = (index) => {
        const updatedRules = rules.filter((_, i) => i !== index);
        setRules(updatedRules);
    };

    const handleSaveSegment = () => {
        // Logic to save the segment (e.g., API call)
        console.log('Segment saved:', { name: segmentName, rules });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Audience Builder</h2>
            <input
                type="text"
                placeholder="Segment Name"
                value={segmentName}
                onChange={(e) => setSegmentName(e.target.value)}
                className="border p-2 mb-4 w-full"
            />
            <RuleBuilder onAddRule={handleAddRule} onRemoveRule={handleRemoveRule} rules={rules} />
            <SegmentPreview rules={rules} />
            <button
                onClick={handleSaveSegment}
                className="bg-blue-500 text-white p-2 mt-4"
            >
                Save Segment
            </button>
        </div>
    );
};

export default AudienceBuilder;