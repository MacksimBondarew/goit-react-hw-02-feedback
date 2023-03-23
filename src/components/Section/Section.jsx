import PropTypes from 'prop-types';
import { SectionStatics, TitleFeedback } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <SectionStatics>
            <TitleFeedback>{title}</TitleFeedback>
            {children}
        </SectionStatics>
    );
};

Section.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;
