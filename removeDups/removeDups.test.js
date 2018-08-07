const removeDups = require('./removeDups');

describe('Remove Duplicates from singly linked list', () => {
	it('Should be able to notice an empty list', () => {
		const linkedList = {};
		expect(removeDups(linkedList)).toBe(-1);
	});

	it('Should be able to remove duplicate entries in a linked list', () => {
		const linkedList = {
			value: 3,
			next: {
				value: 2,
				next: {
					value: 3,
					next: {
						value: 6,
						next: {
							value: 6,
							next: {
								value: 6,
								next: null
							}
						}
					}
				}
			}
		}; // end linked list

		expect(removeDups(linkedList)).toEqual({ value: 3, next: { value: 2, next: { value: 6, next: null } } });
	});

	it('Should be able to remove duplicates from a longer list', () => {
		const linkedList = {
			value: 6,
			next: {
				value: 3,
				next: {
					value: 2,
					next: {
						value: 1,
						next: {
							value: 5,
							next: {
								value: 5,
								next: {
									value: 3,
									next: {
										value: 6,
										next: {
											value: 7,
											next: {
												value: 7,
												next: {
													value: 1,
													next: {
														value: 3,
														next: {
															value: 2,
															next: {
																value: 5,
																next: {
																	value: 6,
																	next: null
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		};

		expect(removeDups(linkedList)).toEqual({
			value: 6,
			next: {
				value: 3,
				next: {
					value: 2,
					next: {
						value: 1,
						next: {
							value: 5,
							next: {
								value: 7,
								next: null
							}
						}
					}
				}
			}
		});
	});
	it('Should be able to do a linked list with two repeated values', () => {
		const linkedlist = {
			value: 1,
			next: {
				value: 2,
				next: {
					value: 1,
					next: {
						value: 2,
						next: {
							value: 1,
							next: {
								value: 2,
								next: {
									value: 1,
									next: {
										value: 2,
										next: {
											value: 1,
											next: {
												value: 2,
												next: {
													value: 1,
													next: {
														value: 2,
														next: {
															value: 1,
															next: {
																value: 2,
																next: {
																	value: 1,
																	next: {
																		value: 2,
																		next: {
																			value: 1,
																			next: {
																				value: 2,
																				next: {
																					value: 1,
																					next: {
																						value: 2,
																						next: {
																							value: 1,
																							next: {
																								value: 2,
																								next: {
																									value: 1,
																									next: {
																										value: 2,
																										next: {
																											value: 1,
																											next: {
																												value: 2,
																												next: {
																													value: 1,
																													next: {
																														value: 2,
																														next: {
																															value: 1,
																															next: {
																																value: 2,
																																next: {
																																	value: 1,
																																	next: {
																																		value: 2,
																																		next: {
																																			value: 1,
																																			next: {
																																				value: 2,
																																				next: {
																																					value: 1,
																																					next: {
																																						value: 2,
																																						next: {
																																							value: 1,
																																							next: {
																																								value: 2,
																																								next: {
																																									value: 1,
																																									next: {
																																										value: 2,
																																										next: {
																																											value: 1,
																																											next: {
																																												value: 2,
																																												next: {
																																													value: 1,
																																													next: {
																																														value: 2,
																																														next: {
																																															value: 1,
																																															next: {
																																																value: 2,
																																																next: {
																																																	value: 1,
																																																	next: {
																																																		value: 2,
																																																		next: {
																																																			value: 1,
																																																			next: {
																																																				value: 2,
																																																				next: null
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}; // end of linked list

		expect(removeDups(linkedlist)).toEqual({ value: 1, next: { value: 2, next: null } });
	});
});
