import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
    constructor(props) {
        super(props);

        // Define inline styles
        this.styles = { backgroundColor: props.data.color || '#000' };
    }

    render() {
        const { title, icon, details } = this.props.data;

        return (
            <div className="card-body" style={this.styles}>
                <div className="icon-wrapper section">
                    <span className="icon">
                        <i className={icon} aria-hidden="true"></i>
                    </span>
                </div>
                <div className="text-wrapper section">
                    <div className="title"><span>{title}</span></div>
                    <div className="details"><span>{details}</span></div>
                </div>
            </div>
        )
    }
}

class CardGridView extends React.Component {
    render() {
        return (
            <div className="card-grid-view">
                {
                    this.props.data.map((cardData, index) => (
                        <Card data={cardData} key={"card-id-" + index} />
                    ))
                }
            </div>
        )
    }
}

// Placeholder dummy text details
const TEXT_DATA = "Lorem ipsum dolor sit amet, elit. Pellentesque commodo quis enim quis rhoncus. Nunc consectetur adipiscing vel ullamcorper arcu.";

// Static card data
const CARD_DATA = [
    {
        'title': 'Typography',
        'icon': 'fas fa-font',
        'details': "I've studied Typography & Graphic Communication at possibly the best Institution to do so in the world - The University of Reading.",
        'color': '#00274C'
    },
    {
        'title': 'Responsive Web Design',
        'icon': 'fas fa-magic',
        'details': 'I design future proof mobile first reponsive websites to the latest web standards. I also keep up with the most recent best practices.',
        'color': '#00274C'
    },
    {
        'title': 'UX Design',
        'icon': 'far fa-user',
        'details': 'User Experience takes precedence throughout my entire process from research, through wireframes to design and development.',
        'color': '#00274C'
    },
    {
        'title': 'Interaction Design',
        'icon': 'far fa-hand-paper',
        'details': TEXT_DATA,
        'color': '#dfbd42'
    },
    {
        'title': 'Front-end Development',
        'icon': 'fas fa-wrench',
        'details': TEXT_DATA,
        'color': '#d98e64'
    },
    {
        'title': 'Wordpress',
        'icon': 'far fa-edit',
        'details': TEXT_DATA,
        'color': '#de6bae'
    }
]

ReactDOM.render(
    <CardGridView data={CARD_DATA} />, document.getElementById('root')
);
