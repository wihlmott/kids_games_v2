const BackArrowIcon = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 3.5,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {/* Path for a simple left-pointing arrow */}
            <path d="M19 12H5"></path> {/* Line from right to left */}
            <path d="M12 19l-7-7 7-7"></path>{" "}
            {/* Arrowhead (polyline for simplicity) */}
        </svg>
    );
};

export default BackArrowIcon;
