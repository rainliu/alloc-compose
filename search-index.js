var searchIndex = JSON.parse('{\
"alloc_compose":{"doc":"Test Status Coverage Status Docs master Docs.rs Crates.io…","i":[[3,"Affix","alloc_compose","An allocator that requests some extra memory from the…",null,null],[12,"parent","","The parent allocator to be used as backend",0,null],[3,"Chunk","","Allocate memory with a multiple size of the provided chunk…",null,null],[12,"0","","",1,null],[3,"Fallback","","An allocator equivalent of an \\\"or\\\" operator in algebra.",null,null],[12,"primary","","The primary allocator",2,null],[12,"secondary","","The fallback allocator",2,null],[3,"MemoryMarker","","Marks newly allocated and deallocated memory with a byte…",null,null],[12,"0","","",3,null],[3,"Null","","An emphatically empty implementation of `AllocRef`.",null,null],[3,"Proxy","","Calls the provided callbacks when invoking methods on…",null,null],[12,"alloc","","",4,null],[12,"callbacks","","",4,null],[3,"Region","","Allocator over an user-defined region of memory.",null,null],[3,"Segregate","","Dispatches calls to `AllocRef` between two allocators…",null,null],[12,"small","","",5,null],[12,"large","","",5,null],[0,"stats","","Structures to collect allocator statistics.",null,null],[3,"Counter","alloc_compose::stats","A primitive counter for collectiong statistics.",null,null],[3,"AtomicCounter","","An atomic counter for collectiong statistics which can be…",null,null],[3,"FilteredCounter","","A counter for collectiong and filtering statistics.",null,null],[3,"FilteredAtomicCounter","","An atomic counter for collectiong and filtering statistics…",null,null],[4,"AllocInitFilter","","",null,null],[13,"None","","",6,null],[13,"Uninitialized","","",6,null],[13,"Zeroed","","",6,null],[4,"ReallocPlacementFilter","","",null,null],[13,"None","","",7,null],[13,"MayMove","","",7,null],[13,"InPlace","","",7,null],[4,"ResultFilter","","",null,null],[13,"None","","",8,null],[13,"Ok","","",8,null],[13,"Err","","",8,null],[11,"num_allocs","","Returns the number of `alloc` calls.",9,[[]]],[11,"num_deallocs","","Returns the number of `dealloc` calls.",9,[[]]],[11,"num_grows","","Returns the number of `grow` calls.",9,[[]]],[11,"num_shrinks","","Returns the number of `shrink` calls.",9,[[]]],[11,"num_owns","","Returns the number of `owns` calls.",9,[[]]],[11,"num_allocs","","Returns the number of `alloc` calls.",10,[[]]],[11,"num_deallocs","","Returns the number of `dealloc` calls.",10,[[]]],[11,"num_grows","","Returns the number of `grow` calls.",10,[[]]],[11,"num_shrinks","","Returns the number of `shrink` calls.",10,[[]]],[11,"num_owns","","Returns the number of `owns` calls.",10,[[]]],[11,"num_allocs","","Returns the total number of `alloc` calls.",11,[[]]],[11,"num_allocs_filter","","Returns the filtered number of `alloc` calls.",11,[[]]],[11,"num_deallocs","","Returns the total number of `dealloc` calls.",11,[[]]],[11,"num_grows","","Returns the total number of `grow` calls.",11,[[]]],[11,"num_grows_filter","","Returns the filtered number of `grow` calls.",11,[[]]],[11,"num_shrinks","","Returns the total number of `shrink` calls.",11,[[]]],[11,"num_shrinks_filter","","Returns the filtered number of `shrink` calls.",11,[[]]],[11,"num_owns","","Returns the total number of `owns` calls.",11,[[]]],[11,"num_owns_filter","","Returns the filtered number of `owns` calls.",11,[[]]],[11,"num_allocs","","Returns the total number of `alloc` calls.",12,[[]]],[11,"num_allocs_filter","","Returns the filtered number of `alloc` calls.",12,[[]]],[11,"num_deallocs","","Returns the total number of `dealloc` calls.",12,[[]]],[11,"num_grows","","Returns the total number of `grow` calls.",12,[[]]],[11,"num_grows_filter","","Returns the filtered number of `grow` calls.",12,[[]]],[11,"num_shrinks","","Returns the total number of `shrink` calls.",12,[[]]],[11,"num_shrinks_filter","","Returns the filtered number of `shrink` calls.",12,[[]]],[11,"num_owns","","Returns the total number of `owns` calls.",12,[[]]],[11,"num_owns_filter","","Returns the filtered number of `owns` calls.",12,[[]]],[11,"new","alloc_compose","",0,[[]]],[11,"prefix","","Returns a pointer to the prefix.",0,[[["nonnull",3],["layout",3]],["nonnull",3]]],[11,"suffix","","Returns a pointer to the suffix.",0,[[["nonnull",3],["layout",3]],["nonnull",3]]],[11,"new","","",13,[[]]],[11,"capacity","","Returns the total capacity available in this allocator.",13,[[]]],[11,"capacity_left","","Returns the free capacity left for allocating.",13,[[]]],[11,"reset","","Resets the allocator.",13,[[]]],[11,"is_last_block","","Checks if `memory` is the latest block, which was…",13,[[["memoryblock",3]]]],[8,"CallbackRef","","Backend for the [`Proxy`] allocator.",null,null],[11,"before_alloc","","Called before [`alloc`] was invoked.",14,[[["allocinit",4],["layout",3]]]],[11,"after_alloc","","Called after [`alloc`] was invoked.",14,[[["allocerr",3],["allocinit",4],["result",4],["layout",3],["memoryblock",3]]]],[11,"before_dealloc","","Called before [`dealloc`] was invoked.",14,[[["nonnull",3],["layout",3]]]],[11,"after_dealloc","","Called after [`dealloc`] was invoked.",14,[[["nonnull",3],["layout",3]]]],[11,"before_grow","","Called before [`grow`] was invoked.",14,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]]]],[11,"after_grow","","Called after [`grow`] was invoked.",14,[[["memoryblock",3],["nonnull",3],["allocerr",3],["allocinit",4],["result",4],["layout",3],["reallocplacement",4]]]],[11,"before_shrink","","Called before [`shrink`] was invoked.",14,[[["nonnull",3],["layout",3],["reallocplacement",4]]]],[11,"after_shrink","","Called after [`shrink`] was invoked.",14,[[["memoryblock",3],["nonnull",3],["allocerr",3],["result",4],["layout",3],["reallocplacement",4]]]],[11,"before_owns","","Called before [`owns`] was invoked.",14,[[]]],[11,"after_owns","","Called after [`owns`] was invoked.",14,[[]]],[11,"by_ref","","Creates a \\\"by reference\\\" adaptor for this instance of…",14,[[]]],[8,"Owns","","Trait to determine if a given `MemoryBlock` is owned by an…",null,null],[10,"owns","","Returns if the allocator owns the passed `MemoryBlock`.",15,[[["memoryblock",3]]]],[11,"from","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"from","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"from","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"from","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"from","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"into","","",16,[[]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"from","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"from","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"into","","",13,[[]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"from","alloc_compose::stats","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"into","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"into","","",11,[[]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"into","","",12,[[]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"from","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"from","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"after_alloc","","",9,[[["allocerr",3],["allocinit",4],["result",4],["layout",3],["memoryblock",3]]]],[11,"before_dealloc","","",9,[[["nonnull",3],["layout",3]]]],[11,"after_grow","","",9,[[["memoryblock",3],["nonnull",3],["allocerr",3],["allocinit",4],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_shrink","","",9,[[["memoryblock",3],["nonnull",3],["allocerr",3],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_owns","","",9,[[]]],[11,"after_alloc","","",10,[[["allocerr",3],["allocinit",4],["result",4],["layout",3],["memoryblock",3]]]],[11,"before_dealloc","","",10,[[["nonnull",3],["layout",3]]]],[11,"after_grow","","",10,[[["memoryblock",3],["nonnull",3],["allocerr",3],["allocinit",4],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_shrink","","",10,[[["memoryblock",3],["nonnull",3],["allocerr",3],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_owns","","",10,[[]]],[11,"after_alloc","","",11,[[["allocerr",3],["allocinit",4],["result",4],["layout",3],["memoryblock",3]]]],[11,"before_dealloc","","",11,[[["nonnull",3],["layout",3]]]],[11,"after_grow","","",11,[[["memoryblock",3],["nonnull",3],["allocerr",3],["allocinit",4],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_shrink","","",11,[[["memoryblock",3],["nonnull",3],["allocerr",3],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_owns","","",11,[[]]],[11,"after_alloc","","",12,[[["allocerr",3],["allocinit",4],["result",4],["layout",3],["memoryblock",3]]]],[11,"before_dealloc","","",12,[[["nonnull",3],["layout",3]]]],[11,"after_grow","","",12,[[["memoryblock",3],["nonnull",3],["allocerr",3],["allocinit",4],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_shrink","","",12,[[["memoryblock",3],["nonnull",3],["allocerr",3],["result",4],["layout",3],["reallocplacement",4]]]],[11,"after_owns","","",12,[[]]],[11,"owns","alloc_compose","",1,[[["memoryblock",3]]]],[11,"owns","","",2,[[["memoryblock",3]]]],[11,"owns","","",3,[[["memoryblock",3]]]],[11,"owns","","Will always return `false.",16,[[["memoryblock",3]]]],[11,"owns","","",4,[[["memoryblock",3]]]],[11,"owns","","",13,[[["memoryblock",3]]]],[11,"owns","","",5,[[["memoryblock",3]]]],[11,"from","alloc_compose::stats","",6,[[["allocinit",4]]]],[11,"from","","",6,[[["allocinit",4],["option",4]]]],[11,"from","","",7,[[["reallocplacement",4]]]],[11,"from","","",7,[[["option",4],["reallocplacement",4]]]],[11,"from","","",8,[[]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","alloc_compose","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"eq","alloc_compose::stats","",9,[[["counter",3]]]],[11,"ne","","",9,[[["counter",3]]]],[11,"eq","","",9,[[["atomiccounter",3]]]],[11,"eq","","",10,[[]]],[11,"eq","","",10,[[["counter",3]]]],[11,"eq","","",6,[[["allocinitfilter",4]]]],[11,"eq","","",7,[[["reallocplacementfilter",4]]]],[11,"eq","","",8,[[["resultfilter",4]]]],[11,"eq","","",11,[[["filteredcounter",3]]]],[11,"ne","","",11,[[["filteredcounter",3]]]],[11,"eq","","",11,[[["filteredatomiccounter",3]]]],[11,"eq","","",12,[[]]],[11,"eq","","",12,[[["filteredcounter",3]]]],[11,"eq","alloc_compose","",0,[[]]],[11,"eq","","",1,[[["chunk",3]]]],[11,"ne","","",1,[[["chunk",3]]]],[11,"eq","","",3,[[["memorymarker",3]]]],[11,"ne","","",3,[[["memorymarker",3]]]],[11,"eq","","",4,[[["proxy",3]]]],[11,"ne","","",4,[[["proxy",3]]]],[11,"cmp","","",4,[[["proxy",3]],["ordering",4]]],[11,"partial_cmp","","",4,[[["proxy",3]],[["ordering",4],["option",4]]]],[11,"lt","","",4,[[["proxy",3]]]],[11,"le","","",4,[[["proxy",3]]]],[11,"gt","","",4,[[["proxy",3]]]],[11,"ge","","",4,[[["proxy",3]]]],[11,"hash","","",4,[[]]],[11,"clone","alloc_compose::stats","",6,[[],["allocinitfilter",4]]],[11,"clone","","",7,[[],["reallocplacementfilter",4]]],[11,"clone","","",8,[[],["resultfilter",4]]],[11,"clone","alloc_compose","",0,[[]]],[11,"clone","","",1,[[],["chunk",3]]],[11,"clone","","",2,[[],["fallback",3]]],[11,"clone","","",3,[[],["memorymarker",3]]],[11,"clone","","",16,[[],["null",3]]],[11,"clone","","",4,[[],["proxy",3]]],[11,"clone","","",5,[[],["segregate",3]]],[11,"default","alloc_compose::stats","",9,[[],["counter",3]]],[11,"default","","",10,[[],["atomiccounter",3]]],[11,"default","","",11,[[],["filteredcounter",3]]],[11,"default","","",12,[[],["filteredatomiccounter",3]]],[11,"default","alloc_compose","",0,[[]]],[11,"default","","",1,[[],["chunk",3]]],[11,"default","","",3,[[],["memorymarker",3]]],[11,"alloc","","",0,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",0,[[["nonnull",3],["layout",3]]]],[11,"grow","","",0,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",0,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","",1,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",1,[[["nonnull",3],["layout",3]]]],[11,"grow","","",1,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",1,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","",2,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",2,[[["nonnull",3],["layout",3]]]],[11,"grow","","",2,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",2,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","",3,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",3,[[["nonnull",3],["layout",3]]]],[11,"grow","","",3,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",3,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","Will always return `Err(AllocErr)`.",16,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","Must not be called, as `alloc` always fails.",16,[[["nonnull",3],["layout",3]]]],[11,"grow","","Must not be called, as `alloc` always fails.",16,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","Must not be called, as `alloc` always fails.",16,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","",4,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",4,[[["nonnull",3],["layout",3]]]],[11,"grow","","",4,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",4,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","",13,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",13,[[["nonnull",3],["layout",3]]]],[11,"grow","","",13,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",13,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"alloc","","",5,[[["allocinit",4],["layout",3]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"dealloc","","",5,[[["nonnull",3],["layout",3]]]],[11,"grow","","",5,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"shrink","","",5,[[["nonnull",3],["layout",3],["reallocplacement",4]],[["result",4],["memoryblock",3],["allocerr",3]]]],[11,"before_alloc","","Called before [`alloc`] was invoked.",14,[[["allocinit",4],["layout",3]]]],[11,"after_alloc","","Called after [`alloc`] was invoked.",14,[[["allocerr",3],["allocinit",4],["result",4],["layout",3],["memoryblock",3]]]],[11,"before_dealloc","","Called before [`dealloc`] was invoked.",14,[[["nonnull",3],["layout",3]]]],[11,"after_dealloc","","Called after [`dealloc`] was invoked.",14,[[["nonnull",3],["layout",3]]]],[11,"before_grow","","Called before [`grow`] was invoked.",14,[[["nonnull",3],["allocinit",4],["layout",3],["reallocplacement",4]]]],[11,"after_grow","","Called after [`grow`] was invoked.",14,[[["memoryblock",3],["nonnull",3],["allocerr",3],["allocinit",4],["result",4],["layout",3],["reallocplacement",4]]]],[11,"before_shrink","","Called before [`shrink`] was invoked.",14,[[["nonnull",3],["layout",3],["reallocplacement",4]]]],[11,"after_shrink","","Called after [`shrink`] was invoked.",14,[[["memoryblock",3],["nonnull",3],["allocerr",3],["result",4],["layout",3],["reallocplacement",4]]]],[11,"before_owns","","Called before [`owns`] was invoked.",14,[[]]],[11,"after_owns","","Called after [`owns`] was invoked.",14,[[]]],[11,"by_ref","","Creates a \\\"by reference\\\" adaptor for this instance of…",14,[[]]]],"p":[[3,"Affix"],[3,"Chunk"],[3,"Fallback"],[3,"MemoryMarker"],[3,"Proxy"],[3,"Segregate"],[4,"AllocInitFilter"],[4,"ReallocPlacementFilter"],[4,"ResultFilter"],[3,"Counter"],[3,"AtomicCounter"],[3,"FilteredCounter"],[3,"FilteredAtomicCounter"],[3,"Region"],[8,"CallbackRef"],[8,"Owns"],[3,"Null"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);