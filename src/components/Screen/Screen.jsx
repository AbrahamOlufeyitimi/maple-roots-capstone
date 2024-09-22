import "./Screen.scss";


const Screen = (props) => {
    return (
        <div className="screen">
        {props.children}
        </div>
    );
};

export default Screen;