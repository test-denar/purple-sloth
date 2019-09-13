import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class ContentBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="content">
                {markdownify(_.get(this.props, 'section.content'))}
            </section>
        );
    }
}
