import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [
			{
				name: 'facebook',
				path: 'orgs/facebook'
			},
			{
				name: 'ember',
				path: 'orgs/ember'
			}
		]
	}
});
