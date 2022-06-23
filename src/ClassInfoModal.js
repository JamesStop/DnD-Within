import React from 'react';
import { Link } from 'react-router-dom';
import FeatureInfo from './FeatureInfo';

function ClassInfoModal({
	currentChar,
	setCurrentChar,
	setLookingClass,
	lookingClass,
	moreInfoClass,
	SIMPLE_URL,
}) {
	function cancelClass() {
		setLookingClass(null);
	}

	function setCurrentClass() {
		setCurrentChar({ ...currentChar, class: moreInfoClass });
	}

	if (moreInfoClass.levels.length) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<h3 className='modal-title'>{moreInfoClass.overview.name}</h3>
						<button onClick={cancelClass} className='close-modal-button'>
							X
						</button>
					</div>
					<div className='modal-body-wrapper'>
						{moreInfoClass.levels
							.filter((levels) => {
								return levels.level <= currentChar.currentLevel;
							})
							.filter((levels) => {
								return levels.features.length > 0;
							})
							.map((levels) => {
								return (
									<div key={levels.level} className="features-levels-wrapper">
										<h4 className="features-level-header">Level {levels.level} benefits</h4>
										{levels.features.map((feature) => {
											return (
												<FeatureInfo
													key={feature.index}
													feature={feature}
													SIMPLE_URL={SIMPLE_URL}
												/>
											);
										})}
									</div>
								);
							})}
					</div>
					<div className='modal-foot-wrapper'>
						<Link
							to='/Races'
							onClick={() => {
								cancelClass();
								setCurrentClass();
							}}>
							<button className='choose-button'>choose</button>
						</Link>
					</div>
				</section>
			</div>
		);
	} else {
		return null;
	}
}

export default ClassInfoModal;
