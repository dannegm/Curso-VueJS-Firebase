// Module Routers
import loginRoutes from './login/router';
import timelineRoutes from './timeline/router';

// Module Stores
import loginStore from './login/store';
import timelineStore from './timeline/store';

export const Routes = [...timelineRoutes, ...loginRoutes];

export const Stores = {
    login: loginStore.module,
    timeline: timelineStore.module,
};

export const InitialStates = {
    login: { ...loginStore.state },
    timeline: { ...timelineStore.state },
};
