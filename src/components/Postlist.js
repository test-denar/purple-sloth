import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, safePrefix} from '../utils';

export default class Postlist extends React.Component {
    render() {
        let display_posts = getPages(this.props.pageContext.pages, '/posts').slice(0, _.get(this.props, 'section.num_posts_displayed'));
        return (
            <section id={_.get(this.props, 'section.section_id')} class="posts">
                {_.map(_.orderBy(display_posts, 'frontmatter.date', 'desc'), (post, post_idx) => (
                <Link key={post_idx} to={safePrefix(_.get(post, 'url'))} class="article-teaser">
                    {_.get(post, 'frontmatter.thumb_img_path') && <img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))}
                                                   alt={_.get(post, 'frontmatter.title')}/>}
                    <div class="copy">
                        <h2>{_.get(post, 'frontmatter.title')}</h2>
                        <h3 class="publish-date">Published on {moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</h3>
                        <p class="summary">{_.get(post, 'frontmatter.excerpt')}</p>
                        <div class="text-link">Read more</div>
                    </div>
                </Link>
                ))}
            </section>
        );
    }
}
