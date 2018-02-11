import './style';

import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Redirect from './shared/Redirect';

import Header from './shared/SectionHeader';
import Menu from './shared/Menu';
import About from './About';
import WorkExperience from './Experience';
import Contact from './Contact';
import Skills from './Skills';

import { routePaths } from './shared/routePaths';

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			currentRouteObj: {}
		}
		this.appContentDiv = null;
	}

	handleRoute = ({ url }) => {
		const currentRouteObj = this.props.routePaths.filter(({ routePath }) => url.match(routePath))[0];

		this.appContentDiv ? this.appContentDiv.scrollTo(0, 0) : '';

		this.setState({
			currentRouteObj
		});
	};

	render() {

		const { backgroundImage } = this.props;
		const { currentRouteObj } = this.state;

		return (
			<div class="app flex column animated delay003 fadeIn" style={{ backgroundImage: `url(${backgroundImage})` }}>
				<div class="app-content" ref={appContentDiv => this.appContentDiv = appContentDiv}>
					<div class="header-outlet flex">
						{currentRouteObj.routePath !== '/about' && <Header headerTitle={currentRouteObj.heading} />}
					</div>
					<div class="view-outlet">
						<Router onChange={this.handleRoute}>
							<Redirect path="/" to="/about" />
							<About path="/about" />
							<WorkExperience path="/experience" />
							<Contact path="/contact" />
							<Skills path="/skills" />
						</Router>
					</div>
				</div>
				<div class="menu-outlet flex align-center animated delay007 fadeInUp">
					<Menu currentRoute={currentRouteObj} />
				</div>
			</div>
		);
	}
}

App.defaultProps = {
	backgroundImage: '/assets/images/arun_redhu.jpg',
	routePaths
}
