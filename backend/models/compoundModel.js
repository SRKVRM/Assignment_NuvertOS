function CompoundModel(sequelize, Sequelize){
    const Compound = sequelize.define("compound", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        compoundName: {
            type: Sequelize.TEXT
        },
        compoundDescription: {
            type: Sequelize.TEXT
        },
        imageSource: {
            type: Sequelize.TEXT
        },
        imageAttribution: {
            type: Sequelize.TEXT
        },
        dateModified: {
            type: Sequelize.DATE
        }
    },{
        timestamps: false
    });

    return Compound;
}

module.exports = CompoundModel;
