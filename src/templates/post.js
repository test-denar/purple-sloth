import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section class="post">
                {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                <img class="header-image" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt=""/>
                }
                <header class="hero">
                    <div class="copy">
                        <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                        <h3>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}</h3>
                        }
                        <h3 class="publish-date">{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</h3>
                    </div>
                </header>
                <div class="content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
            </section>
            </Layout>
        );
    }
}
