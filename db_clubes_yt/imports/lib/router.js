import { FlowrRouter } from 'meteor/kadira:flow-router'

FlowRouter.route('/blog/:postId', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
    },

    name: "<name for the route>" // optional
});

FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout1", {main: "login"});
    }
});