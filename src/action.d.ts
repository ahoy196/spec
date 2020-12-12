declare module App.Action {
    type actionStatus = "defined" | "done" | "pending";
    class ActionClass {
        private url;
        private meaning;
        constructor(url: URL);
        fetch(): Map<URL, actionStatus>;
    }
    interface Action {
        actionStatus: actionStatus;
        action: ActionClass;
    }
}
//# sourceMappingURL=action.d.ts.map