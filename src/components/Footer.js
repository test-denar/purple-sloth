import React from 'react';
import _ from 'lodash';

import {markdownify, Link} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="footer container">
                <div class="copyright">{markdownify(_.get(this.props, 'pageContext.site.data.footer.content'))}</div>
                <nav>
                    {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link_item, link_item_idx) => (
                        <Link key={link_item_idx} class="subtle-link" to={_.get(link_item, 'url')} {...(_.get(link_item, 'new_window') ? {target: '_blank'} : null)}>{_.get(link_item, 'text')}</Link>
                    ))}
                </nav>
            </footer>
        );
    }
}
