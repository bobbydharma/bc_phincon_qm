export default {
    domains: {
        development: {
            sargeant: "http://localhost:3000",
            skillyId: "http://localhost:3001",
            tokophincon: "http://localhost:3000",
        },
        production: {
            sargeant: "https://sargeant.id",
            skillyId: "https://skilly.id",
            phindojo: "https://profile_tracker.my.id",
        },
    },
    database: {
        tables: ["users", "profiles", "exams", "courses", "tryout_sections"],
    },
    images: {
        logos: {
            sargeant: "https://res.cloudinary.com/dojuhvgl1/image/upload/fl_preserve_transparency/v1739515235/ss-Photoroom_kltglb.jpg",
            phindojo: "https://res.cloudinary.com/dojuhvgl1/image/upload/fl_preserve_transparency/v1743995857/phindojo-logo_oegfby.jpg",
        },
    },
    paths: {
        migrations: {
            root: "/cores",
            apps: ["../apps/skilly-id/migrations", "../apps/phindojo/migrations"],
        },
        seeders: {
            root: "/cores",
            apps: ["../apps/skilly-id/seeders", "../apps/phindojo/seeders"],
        },
    },
    response: {
        messages: {
            checkIfUserNotExists: {
                messageFailed: "Invalid username, email, or password",
            },
            checkIfUserExists: {
                messageFailed: "Action cannot be processed",
            },
            verifyToken: {
                messageFailed: "Action cannot be processed",
            },
            resetPassword: {
                messageFailed: "Action cannot be processed",
            },
            checkIfUserActive: {
                messageFailed: "Action cannot be processed",
            },
            checkIfUserHasSysAdminRole: {
                messageFailed: "Action cannot be processed",
            },
        },
    },
};
