const ClickToPayProvider = ({ children }) => {
    const viewMode = 'show card';
    return children(viewMode);
};

export default ClickToPayProvider;
