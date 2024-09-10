// Click Outside Logic

const Select = ({ data, onChange = () => { }, errors, value }) => {
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
    };

    return (
        <div className={classes.Select}>
            <span className={classes.DropDownMenuContainer} ref={dropdownRef}>
                <button onClick={toggleDropdown} className={classes.DropDownBtn}>
                    {label}
                    <i className="fa fa-chevron-down" />
                </button>
            </span>
        </div>
    );
};
