// Module Routers
import loginRoutes from '@/modules/login/router';
import timelineRoutes from '@/modules/timeline/router';

export default [
    ...loginRoutes,
    ...timelineRoutes,
];