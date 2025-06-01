import React from 'react';

const SegmentPreview = ({ segmentRules, audienceSize }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Segment Preview</h2>
            <div className="mb-4">
                <h3 className="text-lg font-medium">Defined Rules:</h3>
                <p className="text-gray-700">{segmentRules}</p>
            </div>
            <div>
                <h3 className="text-lg font-medium">Estimated Audience Size:</h3>
                <p className="text-gray-700">{audienceSize}</p>
            </div>
        </div>
    );
};

export default SegmentPreview;