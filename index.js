var setupFluxActionTest = function(actions, LocalServer, LocalClient, store) {
	const localServer = new LocalServer(store).instance;
	LocalClient.setup(localServer);

	var event = new Event('fluxServer.setup');
	window.dispatchEvent(event);

	localServer.on('action', ({path, params}) => {

		if (actions[path] != undefined) {
			actions[path](params);
		};

	}, localServer.lifespan);
}

module.exports = setupFluxActionTest;
