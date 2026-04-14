(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18989,e=>{"use strict";var r=e.i(33967);let t="sceneUboDeclaration",i=`struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};
#define SCENE_UBO
var<uniform> scene : Scene;
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},54318,e=>{"use strict";var r=e.i(33967);let t="meshUboDeclaration",i=`struct Mesh {world : mat4x4<f32>,
visibility : f32,};var<uniform> mesh : Mesh;
#define WORLD_UBO
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},73043,e=>{"use strict";var r=e.i(33967);let t="mainUVVaryingDeclaration",i=`#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},37988,e=>{"use strict";var r=e.i(33967);e.i(18989),e.i(54318);let t="defaultUboDeclaration",i=`uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f;uniform emissiveRightColor: vec4f;uniform vDiffuseInfos: vec2f;uniform vAmbientInfos: vec2f;uniform vOpacityInfos: vec2f;uniform vReflectionInfos: vec2f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vSpecularInfos: vec2f;uniform vBumpInfos: vec3f;uniform diffuseMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform reflectionMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform specularMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform pointSize: f32;uniform alphaCutOff: f32;uniform refractionMatrix: mat4x4f;uniform vRefractionInfos: vec4f;uniform vRefractionPosition: vec3f;uniform vRefractionSize: vec3f;uniform vSpecularColor: vec4f;uniform vEmissiveColor: vec3f;uniform vDiffuseColor: vec4f;uniform vAmbientColor: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},75902,e=>{"use strict";var r=e.i(33967);let t="vertexColorMixing",i=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vertexOutputs.vColor=vec4f(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vertexOutputs.vColor*=vertexInputs.color;
#else
vertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*vertexInputs.color.rgb,vertexOutputs.vColor.a);
#endif
#endif
#ifdef INSTANCESCOLOR
vertexOutputs.vColor*=vertexInputs.instanceColor;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},86463,e=>{"use strict";var r=e.i(33967);let t="clipPlaneVertexDeclaration",i=`#ifdef CLIPPLANE
uniform vClipPlane: vec4<f32>;varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
uniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
uniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
uniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
uniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
uniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["clipPlaneVertexDeclarationWGSL",0,{name:t,shader:i}])},50328,e=>{"use strict";var r=e.i(33967);let t="clipPlaneVertex",i=`#ifdef CLIPPLANE
vertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);
#endif
#ifdef CLIPPLANE2
vertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);
#endif
#ifdef CLIPPLANE3
vertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);
#endif
#ifdef CLIPPLANE4
vertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);
#endif
#ifdef CLIPPLANE5
vertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);
#endif
#ifdef CLIPPLANE6
vertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["clipPlaneVertexWGSL",0,{name:t,shader:i}])},6474,e=>{"use strict";var r=e.i(33967);let t="logDepthVertex",i=`#ifdef LOGARITHMICDEPTH
vertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},55112,e=>{"use strict";var r=e.i(33967);let t="fogVertexDeclaration",i=`#ifdef FOG
varying vFogDistance: vec3f;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},8882,e=>{"use strict";var r=e.i(33967);let t="fogVertex",i=`#ifdef FOG
#ifdef SCENE_UBO
vertexOutputs.vFogDistance=(scene.view*worldPos).xyz;
#else
vertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},7874,e=>{"use strict";var r=e.i(33967);let t="lightVxUboDeclaration",i=`#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#endif
#if defined(AREALIGHT{X})
vLightWidth: vec4f,
vLightHeight: vec4f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["lightVxUboDeclarationWGSL",0,{name:t,shader:i}])},75579,e=>{"use strict";var r=e.i(33967);let t="shadowsVertex",i=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;
#if SHADOWCSMNUM_CASCADES{X}>0
vertexOutputs.vPositionFromLight{X}_0=uniforms.lightMatrix{X}[0]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_0=(-vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_0= (vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#if SHADOWCSMNUM_CASCADES{X}>1
vertexOutputs.vPositionFromLight{X}_1=uniforms.lightMatrix{X}[1]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_1=(-vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_1= (vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>2
vertexOutputs.vPositionFromLight{X}_2=uniforms.lightMatrix{X}[2]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_2=(-vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_2= (vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>3
vertexOutputs.vPositionFromLight{X}_3=uniforms.lightMatrix{X}[3]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_3=(-vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_3= (vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vertexOutputs.vPositionFromLight{X}=uniforms.lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}=(-vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}=(vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["shadowsVertexWGSL",0,{name:t,shader:i}])},79964,e=>{"use strict";var r=e.i(33967);let t="instancesVertex",i=`#ifdef INSTANCES
var finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
var finalPreviousWorld=mat4x4<f32>(
vertexInputs.previousWorld0,vertexInputs.previousWorld1,
vertexInputs.previousWorld2,vertexInputs.previousWorld3);
#endif
#ifdef THIN_INSTANCES
#if !defined(WORLD_UBO)
finalWorld=uniforms.world*finalWorld;
#else
finalWorld=mesh.world*finalWorld;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
finalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
var finalWorld=uniforms.world;
#else
var finalWorld=mesh.world;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
var finalPreviousWorld=uniforms.previousWorld;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},15906,e=>{"use strict";var r=e.i(33967);let t="instancesDeclaration",i=`#ifdef INSTANCES
attribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;
#ifdef INSTANCESCOLOR
attribute instanceColor : vec4<f32>;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
attribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;
#ifdef THIN_INSTANCES
uniform previousWorld : mat4x4<f32>;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
uniform previousWorld : mat4x4<f32>;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},3813,e=>{"use strict";var r=e.i(33967);let t="bonesVertex",i=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[1])*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[2])*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[3])*vertexInputs.matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[0])*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[1])*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[2])*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[3])*vertexInputs.matricesWeightsExtra[3];
#endif 
#else 
influence=uniforms.mBones[int(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];
#endif 
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["bonesVertexWGSL",0,{name:t,shader:i}])},34282,e=>{"use strict";var r=e.i(33967);let t="bonesDeclaration",i=`#if NUM_BONE_INFLUENCERS>0
attribute matricesIndices : vec4<f32>;attribute matricesWeights : vec4<f32>;
#if NUM_BONE_INFLUENCERS>4
attribute matricesIndicesExtra : vec4<f32>;attribute matricesWeightsExtra : vec4<f32>;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
var boneSampler : texture_2d<f32>;uniform boneTextureWidth : f32;
#else
uniform mBones : array<mat4x4,BonesPerMesh>;
#ifdef BONES_VELOCITY_ENABLED
uniform mPreviousBones : array<mat4x4,BonesPerMesh>;
#endif
#endif
#ifdef BONETEXTURE
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4<f32>
{let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);return mat4x4<f32>(m0,m1,m2,m3);}
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["bonesDeclarationWGSL",0,{name:t,shader:i}])},52813,42583,e=>{"use strict";var r=e.i(33967);let t="bakedVertexAnimationDeclaration",i=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationTextureSizeInverted: vec2<f32>;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;
#ifdef INSTANCES
attribute bakedVertexAnimationSettingsInstanced : vec4<f32>;
#endif
fn readMatrixFromRawSamplerVAT(smp : texture_2d<f32>,index : f32,frame : f32)->mat4x4<f32>
{let offset=i32(index)*4;let frameUV=i32(frame);let m0=textureLoad(smp,vec2<i32>(offset+0,frameUV),0);let m1=textureLoad(smp,vec2<i32>(offset+1,frameUV),0);let m2=textureLoad(smp,vec2<i32>(offset+2,frameUV),0);let m3=textureLoad(smp,vec2<i32>(offset+3,frameUV),0);return mat4x4<f32>(m0,m1,m2,m3);}
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([],52813);let a="bakedVertexAnimation",o=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
let VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.z;let VATSpeed: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.w;
#else
let VATStartFrame: f32=uniforms.bakedVertexAnimationSettings.x;let VATEndFrame: f32=uniforms.bakedVertexAnimationSettings.y;let VATOffsetFrame: f32=uniforms.bakedVertexAnimationSettings.z;let VATSpeed: f32=uniforms.bakedVertexAnimationSettings.w;
#endif
let totalFrames: f32=VATEndFrame-VATStartFrame+1.0;let time: f32=uniforms.bakedVertexAnimationTime*VATSpeed/totalFrames;let frameCorrection: f32=select(1.0,0.0,time<1.0);let numOfFrames: f32=totalFrames-frameCorrection;var VATFrameNum: f32=fract(time)*numOfFrames;VATFrameNum=(VATFrameNum+VATOffsetFrame) % numOfFrames;VATFrameNum=floor(VATFrameNum);VATFrameNum=VATFrameNum+VATStartFrame+frameCorrection;var VATInfluence : mat4x4<f32>;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[0],VATFrameNum)*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[1],VATFrameNum)*vertexInputs.matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[2],VATFrameNum)*vertexInputs.matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[3],VATFrameNum)*vertexInputs.matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[0],VATFrameNum)*vertexInputs.matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[1],VATFrameNum)*vertexInputs.matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[2],VATFrameNum)*vertexInputs.matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[3],VATFrameNum)*vertexInputs.matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[a]||(r.ShaderStore.IncludesShadersStoreWGSL[a]=o),e.s([],42583)},73636,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertex",i=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (i>=uniforms.morphTargetCount) {break;}
vertexID=f32(vertexInputs.vertexIndex)*uniforms.morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,vertexID)-vertexInputs.position)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASPOSITIONS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(readVector3FromRawSampler(i,vertexID) -vertexInputs.normal)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASNORMALS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUVS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(readVector3FromRawSampler(i,vertexID) -vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[i],tangentUpdated.a);
#endif
#ifdef MORPHTARGETTEXTURE_HASTANGENTS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv2)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated=colorUpdated+(readVector4FromRawSampler(i,vertexID)-vertexInputs.color)*uniforms.morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(vertexInputs.position{X}-vertexInputs.position)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(vertexInputs.normal{X}-vertexInputs.normal)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(vertexInputs.tangent{X}-vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[{X}],tangentUpdated.a);
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(vertexInputs.uv_{X}-vertexInputs.uv)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(vertexInputs.uv2_{X}-vertexInputs.uv2)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated=colorUpdated+(vertexInputs.color{X}-vertexInputs.color)*uniforms.morphTargetInfluences[{X}];
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["morphTargetsVertexWGSL",0,{name:t,shader:i}])},81352,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertexGlobalDeclaration",i=`#ifdef MORPHTARGETS
uniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;
#ifdef MORPHTARGETS_TEXTURE 
uniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f32>;var morphTargetsSampler : sampler;fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec3<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0).xyz;}
fn readVector4FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec4<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0);}
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["morphTargetsVertexGlobalDeclarationWGSL",0,{name:t,shader:i}])},10241,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertexGlobal",i=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
var vertexID : f32;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["morphTargetsVertexGlobalWGSL",0,{name:t,shader:i}])},34738,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertexDeclaration",i=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute position{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_NORMAL
attribute normal{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_TANGENT
attribute tangent{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_UV
attribute uv_{X} : vec2<f32>;
#endif
#ifdef MORPHTARGETS_UV2
attribute uv2_{X} : vec2<f32>;
#endif
#elif {X}==0
uniform morphTargetCount: i32;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["morphTargetsVertexDeclarationWGSL",0,{name:t,shader:i}])},51814,e=>{"use strict";var r=e.i(33967);let t="bumpVertex",i=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},42002,74404,81558,55685,93875,64170,19925,e=>{"use strict";var r=e.i(33967);let t="uvAttributeDeclaration",i=`#ifdef UV{X}
attribute uv{X}: vec2f;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([],42002);let a="prePassVertexDeclaration",o=`#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[a]||(r.ShaderStore.IncludesShadersStoreWGSL[a]=o),e.s([],74404);let n="samplerVertexDeclaration",l=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying v_VARYINGNAME_UV: vec2f;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[n]||(r.ShaderStore.IncludesShadersStoreWGSL[n]=l),e.s([],81558);let s="bumpVertexDeclaration",f=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[s]||(r.ShaderStore.IncludesShadersStoreWGSL[s]=f),e.s([],55685);let c="prePassVertex",d=`#ifdef PREPASS_DEPTH
vertexOutputs.vViewPos=(scene.view*worldPos).rgb;
#endif
#ifdef PREPASS_LOCAL_POSITION
vertexOutputs.vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=mPreviousBones[ i32(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[ i32(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[ i32(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[ i32(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[c]||(r.ShaderStore.IncludesShadersStoreWGSL[c]=d),e.s([],93875);let u="uvVariableDeclaration",p=`#ifdef MAINUV{X}
#if !defined(UV{X})
var uv{X}: vec2f=vec2f(0.,0.);
#else
var uv{X}: vec2f=vertexInputs.uv{X};
#endif
vertexOutputs.vMainUV{X}=uv{X};
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[u]||(r.ShaderStore.IncludesShadersStoreWGSL[u]=p),e.s([],64170);let m="samplerVertexImplementation",v=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (uniforms.v_INFONAME_==0.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}
#ifdef UV2
else if (uniforms.v_INFONAME_==1.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}
#endif
#ifdef UV3
else if (uniforms.v_INFONAME_==2.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv3,1.0,0.0)).xy;}
#endif
#ifdef UV4
else if (uniforms.v_INFONAME_==3.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv4,1.0,0.0)).xy;}
#endif
#ifdef UV5
else if (uniforms.v_INFONAME_==4.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv5,1.0,0.0)).xy;}
#endif
#ifdef UV6
else if (uniforms.v_INFONAME_==5.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv6,1.0,0.0)).xy;}
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[m]||(r.ShaderStore.IncludesShadersStoreWGSL[m]=v),e.s([],19925)},63608,e=>{"use strict";var r=e.i(33967);e.i(37988),e.i(42002),e.i(66911),e.i(34282),e.i(52813),e.i(15906),e.i(74404),e.i(73043),e.i(81558),e.i(55685),e.i(86463),e.i(55112);let t="lightVxFragmentDeclaration",i=`#ifdef LIGHT{X}
uniform vLightData{X}: vec4f;uniform vLightDiffuse{X}: vec4f;
#ifdef SPECULARTERM
uniform vLightSpecular{X}: vec4f;
#else
var vLightSpecular{X}: vec4f= vec4f(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: mat4x4f[SHADOWCSMNUM_CASCADES{X}];varying var vPositionFromLight{X}: vec4f[SHADOWCSMNUM_CASCADES{X}];varying var vDepthMetric{X}: f32[SHADOWCSMNUM_CASCADES{X}];varying var vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying var vPositionFromLight{X}: vec4f;varying var vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
uniform shadowsInfo{X}: vec4f;uniform depthValues{X}: vec2f;
#endif
#ifdef SPOTLIGHT{X}
uniform vLightDirection{X}: vec4f;uniform vLightFalloff{X}: vec4f;
#elif defined(POINTLIGHT{X})
uniform vLightFalloff{X}: vec4f;
#elif defined(HEMILIGHT{X})
uniform vLightGround{X}: vec3f;
#endif
#if defined(AREALIGHT{X})
uniform vLightWidth{X}: vec4f;uniform vLightHeight{X}: vec4f;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.i(7874),e.i(81352),e.i(34738),e.i(27104),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583),e.i(93875),e.i(64170),e.i(19925),e.i(51814),e.i(50328),e.i(8882),e.i(75579),e.i(75902),e.i(6474);let a="defaultVertexShader",o=`#include<defaultUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld* vec4f(positionUpdated,0.0)).xyz);
#endif
#ifndef UV1
var uvUpdated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[a]||(r.ShaderStore.ShadersStoreWGSL[a]=o),e.s(["defaultVertexShaderWGSL",0,{name:a,shader:o}],63608)},71047,e=>{"use strict";var r=e.i(99839),t=e.i(61724),i=e.i(54798),a=e.i(91500);class o extends a.FlowGraphCachedOperationBlock{constructor(e,r,t,i){super(e,i),this._operation=r,this._className=t}_doOperation(e){return this._operation(e)}getClassName(){return this._className}}var n=e.i(52656),l=e.i(98825),s=e.i(36908),f=e.i(66423),c=e.i(34960),d=e.i(59637);class u extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(e,r)=>this._polymorphicAdd(e,r),"FlowGraphAddBlock",e)}_polymorphicAdd(e,r){let t=(0,d._getClassNameOf)(e),i=(0,d._getClassNameOf)(r);return(0,d._areSameVectorClass)(t,i)||(0,d._areSameMatrixClass)(t,i)||(0,d._areSameIntegerClass)(t,i)||"Quaternion"===t||"Quaternion"===i?e.add(r):e+r}}(0,r.RegisterClass)("FlowGraphAddBlock",u);class p extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(e,r)=>this._polymorphicSubtract(e,r),"FlowGraphSubtractBlock",e)}_polymorphicSubtract(e,r){let t=(0,d._getClassNameOf)(e),i=(0,d._getClassNameOf)(r);return(0,d._areSameVectorClass)(t,i)||(0,d._areSameIntegerClass)(t,i)||(0,d._areSameMatrixClass)(t,i)||"Quaternion"===t||"Quaternion"===i?e.subtract(r):e-r}}(0,r.RegisterClass)("FlowGraphSubtractBlock",p);class m extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(e,r)=>this._polymorphicMultiply(e,r),"FlowGraphMultiplyBlock",e)}_polymorphicMultiply(e,r){let t=(0,d._getClassNameOf)(e),i=(0,d._getClassNameOf)(r);if((0,d._areSameVectorClass)(t,i)||(0,d._areSameIntegerClass)(t,i))return e.multiply(r);if("Quaternion"===t||"Quaternion"===i){let t=e.clone();return t.x*=r.x,t.y*=r.y,t.z*=r.z,t.w*=r.w,t}if(!(0,d._areSameMatrixClass)(t,i))return e*r;{if(!this.config?.useMatrixPerComponent)return r.multiply(e);let i=e.m;for(let e=0;e<i.length;e++)i[e]*=r.m[e];return"Matrix2D"===t?new c.FlowGraphMatrix2D(i):"Matrix3D"===t?new c.FlowGraphMatrix3D(i):n.Matrix.FromArray(i)}}}(0,r.RegisterClass)("FlowGraphMultiplyBlock",m);class v extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(0,t.getRichTypeByFlowGraphType)(e?.type),(e,r)=>this._polymorphicDivide(e,r),"FlowGraphDivideBlock",e)}_polymorphicDivide(e,r){let t=(0,d._getClassNameOf)(e),i=(0,d._getClassNameOf)(r);if((0,d._areSameVectorClass)(t,i)||(0,d._areSameIntegerClass)(t,i))return e.divide(r);if("Quaternion"===t||"Quaternion"===i){let t=e.clone();return t.x/=r.x,t.y/=r.y,t.z/=r.z,t.w/=r.w,t}if(!(0,d._areSameMatrixClass)(t,i))return e/r;{if(!this.config?.useMatrixPerComponent)return e.divide(r);let i=e.m;for(let e=0;e<i.length;e++)i[e]/=r.m[e];return"Matrix2D"===t?new c.FlowGraphMatrix2D(i):"Matrix3D"===t?new c.FlowGraphMatrix3D(i):n.Matrix.FromArray(i)}}}(0,r.RegisterClass)("FlowGraphDivideBlock",v);class S extends o{constructor(e){super(t.RichTypeNumber,e=>this._random(e),"FlowGraphRandomBlock",e),this.min=this.registerDataInput("min",t.RichTypeNumber,e?.min??0),this.max=this.registerDataInput("max",t.RichTypeNumber,e?.max??1),e?.seed&&(this._seed=e.seed)}_isSeed(e=this._seed){return void 0!==e}_getRandomValue(){if(this._isSeed(this._seed)){let e=1e4*Math.sin(this._seed++);return e-Math.floor(e)}return Math.random()}_random(e){let r=this.min.getValue(e),t=this.max.getValue(e);return this._getRandomValue()*(t-r)+r}}(0,r.RegisterClass)("FlowGraphRandomBlock",S);class h extends o{constructor(e){super(t.RichTypeNumber,()=>Math.E,"FlowGraphEBlock",e)}}(0,r.RegisterClass)("FlowGraphEBlock",h);class x extends o{constructor(e){super(t.RichTypeNumber,()=>Math.PI,"FlowGraphPIBlock",e)}}(0,r.RegisterClass)("FlowGraphPIBlock",x);class g extends o{constructor(e){super(t.RichTypeNumber,()=>1/0,"FlowGraphInfBlock",e)}}(0,r.RegisterClass)("FlowGraphInfBlock",g);class E extends o{constructor(e){super(t.RichTypeNumber,()=>NaN,"FlowGraphNaNBlock",e)}}function _(e,r){switch((0,d._getClassNameOf)(e)){case"FlowGraphInteger":return new f.FlowGraphInteger(r(e.value));case"Vector2":return new n.Vector2(r(e.x),r(e.y));case"Vector3":return new n.Vector3(r(e.x),r(e.y),r(e.z));case"Vector4":return new n.Vector4(r(e.x),r(e.y),r(e.z),r(e.w));case"Quaternion":return new n.Quaternion(r(e.x),r(e.y),r(e.z),r(e.w));case"Matrix":return n.Matrix.FromArray(e.m.map(r));case"Matrix2D":return new c.FlowGraphMatrix2D(e.m.map(r));case"Matrix3D":return new c.FlowGraphMatrix3D(e.m.map(r));default:return r(e)}}(0,r.RegisterClass)("FlowGraphNaNBlock",E);class T extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicAbs(e),"FlowGraphAbsBlock",e)}_polymorphicAbs(e){return _(e,Math.abs)}}(0,r.RegisterClass)("FlowGraphAbsBlock",T);class I extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicSign(e),"FlowGraphSignBlock",e)}_polymorphicSign(e){return _(e,Math.sign)}}(0,r.RegisterClass)("FlowGraphSignBlock",I);class C extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicTrunc(e),"FlowGraphTruncBlock",e)}_polymorphicTrunc(e){return _(e,Math.trunc)}}(0,r.RegisterClass)("FlowGraphTruncBlock",C);class N extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicFloor(e),"FlowGraphFloorBlock",e)}_polymorphicFloor(e){return _(e,Math.floor)}}(0,r.RegisterClass)("FlowGraphFloorBlock",N);class A extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicCeiling(e),"FlowGraphCeilBlock",e)}_polymorphicCeiling(e){return _(e,Math.ceil)}}(0,r.RegisterClass)("FlowGraphCeilBlock",A);class R extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicRound(e),"FlowGraphRoundBlock",e)}_polymorphicRound(e){return _(e,e=>e<0&&this.config?.roundHalfAwayFromZero?-Math.round(-e):Math.round(e))}}(0,r.RegisterClass)("FlowGraphRoundBlock",R);class P extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicFraction(e),"FlowGraphFractBlock",e)}_polymorphicFraction(e){return _(e,e=>e-Math.floor(e))}}(0,r.RegisterClass)("FlowGraphFractBlock",P);class y extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicNeg(e),"FlowGraphNegationBlock",e)}_polymorphicNeg(e){return _(e,e=>-e)}}function M(e,r,t){switch((0,d._getClassNameOf)(e)){case"FlowGraphInteger":return new f.FlowGraphInteger(t(e.value,r.value));case"Vector2":return new n.Vector2(t(e.x,r.x),t(e.y,r.y));case"Vector3":return new n.Vector3(t(e.x,r.x),t(e.y,r.y),t(e.z,r.z));case"Vector4":return new n.Vector4(t(e.x,r.x),t(e.y,r.y),t(e.z,r.z),t(e.w,r.w));case"Quaternion":return new n.Quaternion(t(e.x,r.x),t(e.y,r.y),t(e.z,r.z),t(e.w,r.w));case"Matrix":return n.Matrix.FromArray(e.m.map((e,i)=>t(e,r.m[i])));case"Matrix2D":return new c.FlowGraphMatrix2D(e.m.map((e,i)=>t(e,r.m[i])));case"Matrix3D":return new c.FlowGraphMatrix3D(e.m.map((e,i)=>t(e,r.m[i])));default:return t(e,r)}}(0,r.RegisterClass)("FlowGraphNegationBlock",y);class D extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,(e,r)=>this._polymorphicRemainder(e,r),"FlowGraphModuloBlock",e)}_polymorphicRemainder(e,r){return M(e,r,(e,r)=>e%r)}}(0,r.RegisterClass)("FlowGraphModuloBlock",D);class F extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,(e,r)=>this._polymorphicMin(e,r),"FlowGraphMinBlock",e)}_polymorphicMin(e,r){return M(e,r,Math.min)}}(0,r.RegisterClass)("FlowGraphMinBlock",F);class O extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,(e,r)=>this._polymorphicMax(e,r),"FlowGraphMaxBlock",e)}_polymorphicMax(e,r){return M(e,r,Math.max)}}function V(e,r,t){return Math.min(Math.max(e,Math.min(r,t)),Math.max(r,t))}function b(e,r,t,i){switch((0,d._getClassNameOf)(e)){case"FlowGraphInteger":return new f.FlowGraphInteger(i(e.value,r.value,t.value));case"Vector2":return new n.Vector2(i(e.x,r.x,t.x),i(e.y,r.y,t.y));case"Vector3":return new n.Vector3(i(e.x,r.x,t.x),i(e.y,r.y,t.y),i(e.z,r.z,t.z));case"Vector4":return new n.Vector4(i(e.x,r.x,t.x),i(e.y,r.y,t.y),i(e.z,r.z,t.z),i(e.w,r.w,t.w));case"Quaternion":return new n.Quaternion(i(e.x,r.x,t.x),i(e.y,r.y,t.y),i(e.z,r.z,t.z),i(e.w,r.w,t.w));case"Matrix":return n.Matrix.FromArray(e.m.map((e,a)=>i(e,r.m[a],t.m[a])));case"Matrix2D":return new c.FlowGraphMatrix2D(e.m.map((e,a)=>i(e,r.m[a],t.m[a])));case"Matrix3D":return new c.FlowGraphMatrix3D(e.m.map((e,a)=>i(e,r.m[a],t.m[a])));default:return i(e,r,t)}}(0,r.RegisterClass)("FlowGraphMaxBlock",O);class L extends s.FlowGraphTernaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,(e,r,t)=>this._polymorphicClamp(e,r,t),"FlowGraphClampBlock",e)}_polymorphicClamp(e,r,t){return b(e,r,t,V)}}function U(e){return Math.min(Math.max(e,0),1)}(0,r.RegisterClass)("FlowGraphClampBlock",L);class w extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicSaturate(e),"FlowGraphSaturateBlock",e)}_polymorphicSaturate(e){return _(e,U)}}function G(e,r,t){return(1-t)*e+t*r}(0,r.RegisterClass)("FlowGraphSaturateBlock",w);class B extends s.FlowGraphTernaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,(e,r,t)=>this._polymorphicInterpolate(e,r,t),"FlowGraphMathInterpolationBlock",e)}_polymorphicInterpolate(e,r,t){return b(e,r,t,G)}}(0,r.RegisterClass)("FlowGraphMathInterpolationBlock",B);class W extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeBoolean,(e,r)=>this._polymorphicEq(e,r),"FlowGraphEqualityBlock",e)}_polymorphicEq(e,r){let t=(0,d._getClassNameOf)(e),i=(0,d._getClassNameOf)(r);return(0,d._areSameVectorClass)(t,i)||(0,d._areSameMatrixClass)(t,i)||(0,d._areSameIntegerClass)(t,i)?e.equals(r):e===r}}function z(e,r,t){if((0,d.isNumeric)(e)&&(0,d.isNumeric)(r))return t((0,d.getNumericValue)(e),(0,d.getNumericValue)(r));throw Error(`Cannot compare ${e} and ${r}`)}(0,r.RegisterClass)("FlowGraphEqualityBlock",W);class k extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeBoolean,(e,r)=>this._polymorphicLessThan(e,r),"FlowGraphLessThanBlock",e)}_polymorphicLessThan(e,r){return z(e,r,(e,r)=>e<r)}}(0,r.RegisterClass)("FlowGraphLessThanBlock",k);class H extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeBoolean,(e,r)=>this._polymorphicLessThanOrEqual(e,r),"FlowGraphLessThanOrEqualBlock",e)}_polymorphicLessThanOrEqual(e,r){return z(e,r,(e,r)=>e<=r)}}(0,r.RegisterClass)("FlowGraphLessThanOrEqualBlock",H);class X extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeBoolean,(e,r)=>this._polymorphicGreaterThan(e,r),"FlowGraphGreaterThanBlock",e)}_polymorphicGreaterThan(e,r){return z(e,r,(e,r)=>e>r)}}(0,r.RegisterClass)("FlowGraphGreaterThanBlock",X);class Y extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeBoolean,(e,r)=>this._polymorphicGreaterThanOrEqual(e,r),"FlowGraphGreaterThanOrEqualBlock",e)}_polymorphicGreaterThanOrEqual(e,r){return z(e,r,(e,r)=>e>=r)}}(0,r.RegisterClass)("FlowGraphGreaterThanOrEqualBlock",Y);class Z extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeBoolean,e=>this._polymorphicIsNan(e),"FlowGraphIsNaNBlock",e)}_polymorphicIsNan(e){if((0,d.isNumeric)(e))return isNaN((0,d.getNumericValue)(e));throw Error(`Cannot get NaN of ${e}`)}}(0,r.RegisterClass)("FlowGraphIsNaNBlock",Z);class j extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeBoolean,e=>this._polymorphicIsInf(e),"FlowGraphIsInfBlock",e)}_polymorphicIsInf(e){if((0,d.isNumeric)(e))return!isFinite((0,d.getNumericValue)(e));throw Error(`Cannot get isInf of ${e}`)}}(0,r.RegisterClass)("FlowGraphIsInfBlock",j);class q extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicDegToRad(e),"FlowGraphDegToRadBlock",e)}_degToRad(e){return e*Math.PI/180}_polymorphicDegToRad(e){return _(e,this._degToRad)}}(0,r.RegisterClass)("FlowGraphDegToRadBlock",q);class K extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicRadToDeg(e),"FlowGraphRadToDegBlock",e)}_radToDeg(e){return 180*e/Math.PI}_polymorphicRadToDeg(e){return _(e,this._radToDeg)}}(0,r.RegisterClass)("FlowGraphRadToDegBlock",K);class Q extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicSin(e),"FlowGraphSinBlock",e)}_polymorphicSin(e){return _(e,Math.sin)}}class $ extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicCos(e),"FlowGraphCosBlock",e)}_polymorphicCos(e){return _(e,Math.cos)}}class J extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicTan(e),"FlowGraphTanBlock",e)}_polymorphicTan(e){return _(e,Math.tan)}}class ee extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicAsin(e),"FlowGraphASinBlock",e)}_polymorphicAsin(e){return _(e,Math.asin)}}(0,r.RegisterClass)("FlowGraphASinBlock",ee);class er extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicAcos(e),"FlowGraphACosBlock",e)}_polymorphicAcos(e){return _(e,Math.acos)}}(0,r.RegisterClass)("FlowGraphACosBlock",er);class et extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeNumber,e=>this._polymorphicAtan(e),"FlowGraphATanBlock",e)}_polymorphicAtan(e){return _(e,Math.atan)}}(0,r.RegisterClass)("FlowGraphATanBlock",et);class ei extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,t.RichTypeAny,(e,r)=>this._polymorphicAtan2(e,r),"FlowGraphATan2Block",e)}_polymorphicAtan2(e,r){return M(e,r,Math.atan2)}}(0,r.RegisterClass)("FlowGraphATan2Block",ei);class ea extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicSinh(e),"FlowGraphSinhBlock",e)}_polymorphicSinh(e){return _(e,Math.sinh)}}(0,r.RegisterClass)("FlowGraphSinhBlock",ea);class eo extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicCosh(e),"FlowGraphCoshBlock",e)}_polymorphicCosh(e){return _(e,Math.cosh)}}(0,r.RegisterClass)("FlowGraphCoshBlock",eo);class en extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeAny,e=>this._polymorphicTanh(e),"FlowGraphTanhBlock",e)}_polymorphicTanh(e){return _(e,Math.tanh)}}(0,r.RegisterClass)("FlowGraphTanhBlock",en);class el extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicAsinh(e),"FlowGraphASinhBlock",e)}_polymorphicAsinh(e){return _(e,Math.asinh)}}(0,r.RegisterClass)("FlowGraphASinhBlock",el);class es extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicAcosh(e),"FlowGraphACoshBlock",e)}_polymorphicAcosh(e){return _(e,Math.acosh)}}(0,r.RegisterClass)("FlowGraphACoshBlock",es);class ef extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicAtanh(e),"FlowGraphATanhBlock",e)}_polymorphicAtanh(e){return _(e,Math.atanh)}}(0,r.RegisterClass)("FlowGraphATanhBlock",ef);class ec extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicExp(e),"FlowGraphExponentialBlock",e)}_polymorphicExp(e){return _(e,Math.exp)}}(0,r.RegisterClass)("FlowGraphExponentialBlock",ec);class ed extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicLog(e),"FlowGraphLogBlock",e)}_polymorphicLog(e){return _(e,Math.log)}}(0,r.RegisterClass)("FlowGraphLogBlock",ed);class eu extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicLog2(e),"FlowGraphLog2Block",e)}_polymorphicLog2(e){return _(e,Math.log2)}}(0,r.RegisterClass)("FlowGraphLog2Block",eu);class ep extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicLog10(e),"FlowGraphLog10Block",e)}_polymorphicLog10(e){return _(e,Math.log10)}}(0,r.RegisterClass)("FlowGraphLog10Block",ep);class em extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicSqrt(e),"FlowGraphSquareRootBlock",e)}_polymorphicSqrt(e){return _(e,Math.sqrt)}}(0,r.RegisterClass)("FlowGraphSquareRootBlock",em);class ev extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,e=>this._polymorphicCubeRoot(e),"FlowGraphCubeRootBlock",e)}_polymorphicCubeRoot(e){return _(e,Math.cbrt)}}(0,r.RegisterClass)("FlowGraphCubeRootBlock",ev);class eS extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeAny,t.RichTypeNumber,t.RichTypeNumber,(e,r)=>this._polymorphicPow(e,r),"FlowGraphPowerBlock",e)}_polymorphicPow(e,r){return M(e,r,Math.pow)}}(0,r.RegisterClass)("FlowGraphPowerBlock",eS);class eh extends l.FlowGraphUnaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),e=>"boolean"==typeof e?!e:"number"==typeof e?~e:new f.FlowGraphInteger(~e.value),"FlowGraphBitwiseNotBlock",e)}}(0,r.RegisterClass)("FlowGraphBitwiseNotBlock",eh);class ex extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(e,r)=>{if("boolean"==typeof e&&"boolean"==typeof r)return e&&r;if("number"==typeof e&&"number"==typeof r)return e&r;if("object"==typeof e&&"object"==typeof r)return new f.FlowGraphInteger(e.value&r.value);throw Error(`Cannot perform bitwise AND on ${e} and ${r}`)},"FlowGraphBitwiseAndBlock",e)}}(0,r.RegisterClass)("FlowGraphBitwiseAndBlock",ex);class eg extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(e,r)=>{if("boolean"==typeof e&&"boolean"==typeof r)return e||r;if("number"==typeof e&&"number"==typeof r)return e|r;if("object"==typeof e&&"object"==typeof r)return new f.FlowGraphInteger(e.value|r.value);throw Error(`Cannot perform bitwise OR on ${e} and ${r}`)},"FlowGraphBitwiseOrBlock",e)}}(0,r.RegisterClass)("FlowGraphBitwiseOrBlock",eg);class eE extends i.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(0,t.getRichTypeByFlowGraphType)(e?.valueType||"FlowGraphInteger"),(e,r)=>{if("boolean"==typeof e&&"boolean"==typeof r)return e!==r;if("number"==typeof e&&"number"==typeof r)return e^r;if("object"==typeof e&&"object"==typeof r)return new f.FlowGraphInteger(e.value^r.value);throw Error(`Cannot perform bitwise XOR on ${e} and ${r}`)},"FlowGraphBitwiseXorBlock",e)}}(0,r.RegisterClass)("FlowGraphBitwiseXorBlock",eE);class e_ extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,(e,r)=>new f.FlowGraphInteger(e.value<<r.value),"FlowGraphBitwiseLeftShiftBlock",e)}}(0,r.RegisterClass)("FlowGraphBitwiseLeftShiftBlock",e_);class eT extends i.FlowGraphBinaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,(e,r)=>new f.FlowGraphInteger(e.value>>r.value),"FlowGraphBitwiseRightShiftBlock",e)}}(0,r.RegisterClass)("FlowGraphBitwiseRightShiftBlock",eT);class eI extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,e=>new f.FlowGraphInteger(Math.clz32(e.value)),"FlowGraphLeadingZerosBlock",e)}}(0,r.RegisterClass)("FlowGraphLeadingZerosBlock",eI);class eC extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,e=>new f.FlowGraphInteger(e.value?31-Math.clz32(e.value&-e.value):32),"FlowGraphTrailingZerosBlock",e)}}(0,r.RegisterClass)("FlowGraphTrailingZerosBlock",eC);class eN extends l.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeFlowGraphInteger,e=>new f.FlowGraphInteger(function(e){let r=0;for(;e;)r+=1&e,e>>=1;return r}(e.value)),"FlowGraphOneBitsCounterBlock",e)}}(0,r.RegisterClass)("FlowGraphOneBitsCounterBlock",eN),e.s(["FlowGraphAbsBlock",0,T,"FlowGraphAcosBlock",0,er,"FlowGraphAcoshBlock",0,es,"FlowGraphAddBlock",0,u,"FlowGraphAsinBlock",0,ee,"FlowGraphAsinhBlock",0,el,"FlowGraphAtan2Block",0,ei,"FlowGraphAtanBlock",0,et,"FlowGraphAtanhBlock",0,ef,"FlowGraphBitwiseAndBlock",0,ex,"FlowGraphBitwiseLeftShiftBlock",0,e_,"FlowGraphBitwiseNotBlock",0,eh,"FlowGraphBitwiseOrBlock",0,eg,"FlowGraphBitwiseRightShiftBlock",0,eT,"FlowGraphBitwiseXorBlock",0,eE,"FlowGraphCeilBlock",0,A,"FlowGraphClampBlock",0,L,"FlowGraphCosBlock",0,$,"FlowGraphCoshBlock",0,eo,"FlowGraphCubeRootBlock",0,ev,"FlowGraphDegToRadBlock",0,q,"FlowGraphDivideBlock",0,v,"FlowGraphEBlock",0,h,"FlowGraphEqualityBlock",0,W,"FlowGraphExpBlock",0,ec,"FlowGraphFloorBlock",0,N,"FlowGraphFractionBlock",0,P,"FlowGraphGreaterThanBlock",0,X,"FlowGraphGreaterThanOrEqualBlock",0,Y,"FlowGraphInfBlock",0,g,"FlowGraphIsInfinityBlock",0,j,"FlowGraphIsNanBlock",0,Z,"FlowGraphLeadingZerosBlock",0,eI,"FlowGraphLessThanBlock",0,k,"FlowGraphLessThanOrEqualBlock",0,H,"FlowGraphLog10Block",0,ep,"FlowGraphLog2Block",0,eu,"FlowGraphLogBlock",0,ed,"FlowGraphMathInterpolationBlock",0,B,"FlowGraphMaxBlock",0,O,"FlowGraphMinBlock",0,F,"FlowGraphModuloBlock",0,D,"FlowGraphMultiplyBlock",0,m,"FlowGraphNaNBlock",0,E,"FlowGraphNegationBlock",0,y,"FlowGraphOneBitsCounterBlock",0,eN,"FlowGraphPiBlock",0,x,"FlowGraphPowerBlock",0,eS,"FlowGraphRadToDegBlock",0,K,"FlowGraphRandomBlock",0,S,"FlowGraphRoundBlock",0,R,"FlowGraphSaturateBlock",0,w,"FlowGraphSignBlock",0,I,"FlowGraphSinBlock",0,Q,"FlowGraphSinhBlock",0,ea,"FlowGraphSquareRootBlock",0,em,"FlowGraphSubtractBlock",0,p,"FlowGraphTanBlock",0,J,"FlowGraphTanhBlock",0,en,"FlowGraphTrailingZerosBlock",0,eC,"FlowGraphTruncBlock",0,C],71047)},49473,93831,46887,66984,64225,3548,58672,80870,e=>{"use strict";var r,t,i,a,o,n,l=e.i(52898),s=e.i(2089);(r=a||(a={}))[r.NO_COMPRESSION=0]="NO_COMPRESSION",r[r.RLE_COMPRESSION=1]="RLE_COMPRESSION",r[r.ZIPS_COMPRESSION=2]="ZIPS_COMPRESSION",r[r.ZIP_COMPRESSION=3]="ZIP_COMPRESSION",r[r.PIZ_COMPRESSION=4]="PIZ_COMPRESSION",r[r.PXR24_COMPRESSION=5]="PXR24_COMPRESSION",(t=o||(o={}))[t.INCREASING_Y=0]="INCREASING_Y",t[t.DECREASING_Y=1]="DECREASING_Y";let f=function(){let e=new ArrayBuffer(4),r=new Float32Array(e),t=new Uint32Array(e),i=new Uint32Array(512),a=new Uint32Array(512);for(let e=0;e<256;++e){let r=e-127;r<-27?(i[e]=0,i[256|e]=32768,a[e]=24,a[256|e]=24):r<-14?(i[e]=1024>>-r-14,i[256|e]=1024>>-r-14|32768,a[e]=-r-1,a[256|e]=-r-1):r<=15?(i[e]=r+15<<10,i[256|e]=r+15<<10|32768,a[e]=13,a[256|e]=13):r<128?(i[e]=31744,i[256|e]=64512,a[e]=24,a[256|e]=24):(i[e]=31744,i[256|e]=64512,a[e]=13,a[256|e]=13)}let o=new Uint32Array(2048),n=new Uint32Array(64),l=new Uint32Array(64);for(let e=1;e<1024;++e){let r=e<<13,t=0;for(;(8388608&r)==0;)r<<=1,t-=8388608;r&=-8388609,t+=0x38800000,o[e]=r|t}for(let e=1024;e<2048;++e)o[e]=0x38000000+(e-1024<<13);for(let e=1;e<31;++e)n[e]=e<<23;n[31]=0x47800000,n[32]=0x80000000;for(let e=33;e<63;++e)n[e]=0x80000000+(e-32<<23);n[63]=0xc7800000;for(let e=1;e<64;++e)32!==e&&(l[e]=1024);return{floatView:r,uint32View:t,baseTable:i,shiftTable:a,mantissaTable:o,exponentTable:n,offsetTable:l}}();function c(e,r){let t=new Uint8Array(e),i=0;for(;0!=t[r.value+i];)i+=1;let a=new TextDecoder().decode(t.slice(r.value,r.value+i));return r.value=r.value+i+1,a}function d(e,r){let t=e.getInt32(r.value,!0);return r.value+=4,t}function u(e,r){let t=e.getUint32(r.value,!0);return r.value+=4,t}function p(e,r){let t=e.getUint8(r.value);return r.value+=1,t}function m(e,r){let t=e.getUint16(r.value,!0);return r.value+=2,t}function v(e,r){let t=e[r.value];return r.value+=1,t}function S(e,r){let t;return t="getBigInt64"in DataView.prototype?Number(e.getBigInt64(r.value,!0)):e.getUint32(r.value+4,!0)+Number(e.getUint32(r.value,!0)<<32),r.value+=8,t}function h(e,r){let t=e.getFloat32(r.value,!0);return r.value+=4,t}function x(e,r){var t;let i,a;return i=(31744&(t=m(e,r)))>>10,a=1023&t,(t>>15?-1:1)*(i?31===i?a?NaN:1/0:Math.pow(2,i-15)*(1+a/1024):a/1024*6103515625e-14)}function g(e,r){var t=h(e,r);if(Math.abs(t)>65504)throw Error("Value out of range.Consider using float instead of half-float.");t=(0,s.Clamp)(t,-65504,65504),f.floatView[0]=t;let i=f.uint32View[0],a=i>>23&511;return f.baseTable[a]+((8388607&i)>>f.shiftTable[a])}function E(e,r,t,i){var a;switch(t){case"string":case"stringvector":case"iccProfile":let n;return a=e.buffer,n=new TextDecoder().decode(new Uint8Array(a).slice(r.value,r.value+i)),r.value=r.value+i,n;case"chlist":return function(e,r,t){let i=r.value,a=[];for(;r.value<i+t-1;){let t=c(e.buffer,r),i=d(e,r),o=p(e,r);r.value+=3;let n=d(e,r),l=d(e,r);a.push({name:t,pixelType:i,pLinear:o,xSampling:n,ySampling:l})}return r.value+=1,a}(e,r,i);case"chromaticities":let l,s,f,m,v,S;return l=h(e,r),s=h(e,r),f=h(e,r),m=h(e,r),v=h(e,r),S=h(e,r),{redX:l,redY:s,greenX:f,greenY:m,blueX:v,blueY:S,whiteX:h(e,r),whiteY:h(e,r)};case"compression":return p(e,r);case"box2i":let x,g;return x=d(e,r),g=d(e,r),{xMin:x,yMin:g,xMax:d(e,r),yMax:d(e,r)};case"lineOrder":return o[p(e,r)];case"float":return h(e,r);case"v2f":return[h(e,r),h(e,r)];case"v3f":let E;return E=h(e,r),[E,h(e,r),h(e,r)];case"int":return d(e,r);case"rational":return[d(e,r),u(e,r)];case"timecode":return[u(e,r),u(e,r)];case"preview":return r.value+=i,"skipped";default:r.value+=i;return}}function _(e){for(let r=1;r<e.length;r++){let t=e[r-1]+e[r]-128;e[r]=t}}function T(e,r){let t=0,i=Math.floor((e.length+1)/2),a=0,o=e.length-1;for(;!(a>o)&&(r[a++]=e[t++],!(a>o));){;r[a++]=e[i++]}}function I(e,r){if(0x1312f76!=e.getUint32(0,!0))throw Error("Incorrect OpenEXR format");let t=e.getUint8(4),i=e.getUint8(5);r.value=8;let a={},o=!0;for(;o;){let t=c(e.buffer,r);if(t){let i=c(e.buffer,r),o=u(e,r),n=E(e,r,i,o);void 0===n?l.Logger.Warn(`Unknown header attribute type ${i}'.`):a[t]=n}else o=!1}if((-5&i)!=0)throw Error("Unsupported file format");return{version:t,spec:{singleTile:!!(2&i),longName:!!(4&i),deepFormat:!!(8&i),multiPart:!!(16&i)},...a}}e.s(["CompressionCodes",0,a,"DecodeFloat32",0,g,"InterleaveScalar",0,T,"ParseFloat16",0,x,"ParseFloat32",0,h,"ParseInt32",0,d,"ParseInt64",0,S,"ParseNullTerminatedString",0,c,"ParseUint16",0,m,"ParseUint32",0,u,"ParseUint8",0,p,"ParseUint8Array",0,v,"ParseValue",0,E,"Predictor",0,_],93831),e.s(["GetExrHeader",0,I],46887);function C(e,r){let t=0;for(let i=0;i<65536;++i)(0==i||e[i>>3]&1<<(7&i))&&(r[t++]=i);let i=t-1;for(;t<65536;)r[t++]=0;return i}function N(e,r,t,i,a){for(;t<e;)r=r<<8|v(i,a),t+=8;return{l:r>>(t-=e)&(1<<e)-1,c:r,lc:t}}function A(e,r,t,i){return{c:e=e<<8|v(t,i),lc:r+=8}}function R(e,r,t,i,a,o,n,l,s){if(e==r){if(i<8){let e=A(t,i,a,o);t=e.c,i=e.lc}let e=t>>(i-=8);if(e=new Uint8Array([e])[0],l.value+e>s)return null;let r=n[l.value-1];for(;e-- >0;)n[l.value++]=r}else{if(!(l.value<s))return null;n[l.value++]=e}return{c:t,lc:i}}let P=Array(59);function y(e,r,t,i,a,o){let n=t.value,l=u(r,t),s=u(r,t);t.value+=4;let f=u(r,t);if(t.value+=4,l<0||l>=65537||s<0||s>=65537)throw Error("Wrong HUF_ENCSIZE");let c=Array(65537),d=Array(16384);for(let e=0;e<16384;e++)d[e]={},d[e].len=0,d[e].lit=0,d[e].p=null;let p=i-(t.value-n);if(!function(e,r,t,i,a,o){let n=0,l=0;for(;i<=a;i++){if(r.value-r.value>t)return;let s=N(6,n,l,e,r),f=s.l;if(n=s.c,l=s.lc,o[i]=f,63==f){if(r.value-r.value>t)throw Error("Error in HufUnpackEncTable");let f=(s=N(8,n,l,e,r)).l+6;if(n=s.c,l=s.lc,i+f>a+1)throw Error("Error in HufUnpackEncTable");for(;f--;)o[i++]=0;i--}else if(f>=59){let e=f-59+2;if(i+e>a+1)throw Error("Error in HufUnpackEncTable");for(;e--;)o[i++]=0;i--}}!function(e){for(let e=0;e<=58;++e)P[e]=0;for(let r=0;r<65537;++r)P[e[r]]+=1;let r=0;for(let e=58;e>0;--e){let t=r+P[e]>>1;P[e]=r,r=t}for(let r=0;r<65537;++r){let t=e[r];t>0&&(e[r]=t|P[t]++<<6)}}(o)}(e,t,p,l,s,c),f>8*(i-(t.value-n)))throw Error("Wrong hufUncompress");!function(e,r,t,i){for(;r<=t;r++){let t=e[r]>>6,a=63&e[r];if(t>>a)throw Error("Invalid table entry");if(a>14){let e=i[t>>a-14];if(e.len)throw Error("Invalid table entry");if(e.lit++,e.p){let r=e.p;e.p=Array(e.lit);for(let t=0;t<e.lit-1;++t)e.p[t]=r[t]}else e.p=[,];e.p[e.lit-1]=r}else if(a){let e=0;for(let o=1<<14-a;o>0;o--){let o=i[(t<<14-a)+e];if(o.len||o.p)throw Error("Invalid table entry");o.len=a,o.lit=r,e++}}}}(c,l,s,d),function(e,r,t,i,a,o,n,l,s){let f=0,c=0,d=Math.trunc(i.value+(a+7)/8);for(;i.value<d;){let a=A(f,c,t,i);for(f=a.c,c=a.lc;c>=14;){let u=r[f>>c-14&16383];if(u.len){c-=u.len;let e=R(u.lit,o,f,c,t,i,l,s,n);e&&(f=e.c,c=e.lc)}else{let r;if(!u.p)throw Error("hufDecode issues");for(r=0;r<u.lit;r++){let p=63&e[u.p[r]];for(;c<p&&i.value<d;)f=(a=A(f,c,t,i)).c,c=a.lc;if(c>=p&&e[u.p[r]]>>6==(f>>c-p&(1<<p)-1)){c-=p;let e=R(u.p[r],o,f,c,t,i,l,s,n);e&&(f=e.c,c=e.lc);break}}if(r==u.lit)throw Error("HufDecode issues")}}}let u=8-a&7;for(f>>=u,c-=u;c>0;){let e=r[f<<14-c&16383];if(e.len){c-=e.len;let r=R(e.lit,o,f,c,t,i,l,s,n);r&&(f=r.c,c=r.lc)}else throw Error("HufDecode issues")}}(c,d,e,t,f,s,o,a,{value:0})}function M(e){let r=65535&e;return r>32767?r-65536:r}function D(e,r){let t=M(e),i=M(r),a=t+(1&i)+(i>>1);return{a:a,b:a-i}}function F(e,r){let t=65535&r,i=(65535&e)-(t>>1)&65535;return{a:t+i-32768&65535,b:i}}function O(e,r,t,i,a,o,n){let l,s,f=n<16384,c=t>a?a:t,d=1;for(;d<=c;)d<<=1;for(d>>=1,l=d,d>>=1;d>=1;){let n,c,u,p,m=(s=0)+o*(a-l),v=o*d,S=o*l,h=i*d,x=i*l;for(;s<=m;s+=S){let a=s,o=s+i*(t-l);for(;a<=o;a+=x){let t=a+h,i=a+v,o=i+h;if(f){let l=D(e[a+r],e[i+r]);n=l.a,u=l.b,c=(l=D(e[t+r],e[o+r])).a,p=l.b,l=D(n,c),e[a+r]=l.a,e[t+r]=l.b,l=D(u,p),e[i+r]=l.a,e[o+r]=l.b}else{let l=F(e[a+r],e[i+r]);n=l.a,u=l.b,c=(l=F(e[t+r],e[o+r])).a,p=l.b,l=F(n,c),e[a+r]=l.a,e[t+r]=l.b,l=F(u,p),e[i+r]=l.a,e[o+r]=l.b}}if(t&d){let t,i=a+v;n=(t=f?D(e[a+r],e[i+r]):F(e[a+r],e[i+r])).a,e[i+r]=t.b,e[a+r]=n}}if(a&d){let a=s,o=s+i*(t-l);for(;a<=o;a+=x){let t,i=a+h;n=(t=f?D(e[a+r],e[i+r]):F(e[a+r],e[i+r])).a,e[i+r]=t.b,e[a+r]=n}}l=d,d>>=1}return s}function V(e,r,t){for(let i=0;i<t;++i)r[i]=e[r[i]]}function b(e){let r=e.byteLength,t=[],i=0,a=new DataView(e);for(;r>0;){let e=a.getInt8(i++);if(e<0){let o=-e;r-=o+1;for(let e=0;e<o;e++)t.push(a.getUint8(i++))}else{r-=2;let o=a.getUint8(i++);for(let r=0;r<e+1;r++)t.push(o)}}return t}function L(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function U(e){let r=new Uint8Array(b(e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size))),t=new Uint8Array(r.length);return _(r),T(r,t),new DataView(t.buffer)}function w(e){let r=e.array.slice(e.offset.value,e.offset.value+e.size),t=fflate.unzlibSync(r),i=new Uint8Array(t.length);return _(t),T(t,i),new DataView(i.buffer)}function G(e){let r=e.array.slice(e.offset.value,e.offset.value+e.size),t=fflate.unzlibSync(r),i=e.lines*e.channels*e.width,a=1==e.type?new Uint16Array(i):new Uint32Array(i),o=0,n=0,l=[,,,,];for(let r=0;r<e.lines;r++)for(let r=0;r<e.channels;r++){let r=0;switch(e.type){case 1:l[0]=o,l[1]=l[0]+e.width,o=l[1]+e.width;for(let i=0;i<e.width;++i)r+=t[l[0]++]<<8|t[l[1]++],a[n]=r,n++;break;case 2:l[0]=o,l[1]=l[0]+e.width,l[2]=l[1]+e.width,o=l[2]+e.width;for(let i=0;i<e.width;++i)r+=t[l[0]++]<<24|t[l[1]++]<<16|t[l[2]++]<<8,a[n]=r,n++}}return new DataView(a.buffer)}function B(e){let r=e.viewer,t={value:e.offset.value},i=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),a=new Uint8Array(8192),o=0,n=Array(e.channels);for(let r=0;r<e.channels;r++)n[r]={},n[r].start=o,n[r].end=n[r].start,n[r].nx=e.width,n[r].ny=e.lines,n[r].size=e.type,o+=n[r].nx*n[r].ny*n[r].size;let l=m(r,t),s=m(r,t);if(s>=8192)throw Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");if(l<=s)for(let e=0;e<s-l+1;e++)a[e+l]=p(r,t);let f=new Uint16Array(65536),c=C(a,f),d=u(r,t);y(e.array,r,t,d,i,o);for(let r=0;r<e.channels;++r){let e=n[r];for(let t=0;t<n[r].size;++t)O(i,e.start+t,e.nx,e.size,e.ny,e.nx*e.size,c)}V(f,i,o);let v=0,S=new Uint8Array(i.buffer.byteLength);for(let r=0;r<e.lines;r++)for(let r=0;r<e.channels;r++){let e=n[r],t=e.nx*e.size,a=new Uint8Array(i.buffer,2*e.end,2*t);S.set(a,v),v+=2*t,e.end+=t}return new DataView(S.buffer)}e.s(["ApplyLut",0,V,"HufUncompress",0,y,"ReverseLutFromBitmap",0,C,"Wav2Decode",0,O],66984),e.s(["DecodeRunLength",0,b],64225),e.s(["UncompressPIZ",0,B,"UncompressPXR",0,G,"UncompressRAW",0,L,"UncompressRLE",0,U,"UncompressZIP",0,w],3548);var W=e.i(67722);(i=n||(n={}))[i.Float=0]="Float",i[i.HalfFloat=1]="HalfFloat";class z{}async function k(e,r,t,i){let o={size:0,viewer:r,array:new Uint8Array(r.buffer),offset:t,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,channelLineOffsets:{},scanOrder:()=>0,bytesPerLine:0,outLineWidth:0,lines:0,scanlineBlockSize:0,inputSize:null,type:0,uncompress:null,getter:()=>0,format:5,outputChannels:0,decodeChannels:{},blockCount:null,byteArray:null,linearSpace:!1,textureType:0};switch(e.compression){case a.NO_COMPRESSION:o.lines=1,o.uncompress=L;break;case a.RLE_COMPRESSION:o.lines=1,o.uncompress=U;break;case a.ZIPS_COMPRESSION:o.lines=1,o.uncompress=w,await W.Tools.LoadScriptAsync(z.FFLATEUrl);break;case a.ZIP_COMPRESSION:o.lines=16,o.uncompress=w,await W.Tools.LoadScriptAsync(z.FFLATEUrl);break;case a.PIZ_COMPRESSION:o.lines=32,o.uncompress=B;break;case a.PXR24_COMPRESSION:o.lines=16,o.uncompress=G,await W.Tools.LoadScriptAsync(z.FFLATEUrl);break;default:throw Error(a[e.compression]+" is unsupported")}o.scanlineBlockSize=o.lines;let l={};for(let r of e.channels)switch(r.name){case"Y":case"R":case"G":case"B":case"A":l[r.name]=!0,o.type=r.pixelType}let s=!1;if(l.R&&l.G&&l.B)s=!l.A,o.outputChannels=4,o.decodeChannels={R:0,G:1,B:2,A:3};else if(l.Y)o.outputChannels=1,o.decodeChannels={Y:0};else throw Error("EXRLoader.parse: file contains unsupported data channels.");if(1===o.type)switch(i){case n.Float:o.getter=x,o.inputSize=2;break;case n.HalfFloat:o.getter=m,o.inputSize=2}else if(2===o.type)switch(i){case n.Float:o.getter=h,o.inputSize=4;break;case n.HalfFloat:o.getter=g,o.inputSize=4}else throw Error("Unsupported pixelType "+o.type+" for "+e.compression);o.blockCount=o.height/o.scanlineBlockSize;for(let e=0;e<o.blockCount;e++)S(r,t);let f=o.width*o.height*o.outputChannels;switch(i){case n.Float:o.byteArray=new Float32Array(f),o.textureType=1,s&&o.byteArray.fill(1,0,f);break;case n.HalfFloat:o.byteArray=new Uint16Array(f),o.textureType=2,s&&o.byteArray.fill(15360,0,f);break;default:throw Error("Unsupported type: "+i)}let c=0;for(let r of e.channels)void 0!==o.decodeChannels[r.name]&&(o.channelLineOffsets[r.name]=c*o.width),c+=2*r.pixelType;return o.bytesPerLine=o.width*c,o.outLineWidth=o.width*o.outputChannels,"INCREASING_Y"===e.lineOrder?o.scanOrder=e=>e:o.scanOrder=e=>o.height-1-e,4==o.outputChannels?(o.format=5,o.linearSpace=!0):(o.format=6,o.linearSpace=!1),o}function H(e,r,t,i){let a={value:0};for(let o=0;o<e.height/e.scanlineBlockSize;o++){let n=d(t,i)-r.dataWindow.yMin;e.size=u(t,i),e.lines=n+e.scanlineBlockSize>e.height?e.height-n:e.scanlineBlockSize;let l=e.size<e.lines*e.bytesPerLine&&e.uncompress?e.uncompress(e):L(e);i.value+=e.size;for(let t=0;t<e.scanlineBlockSize;t++){let i=o*e.scanlineBlockSize,n=t+e.scanOrder(i);if(n>=e.height)continue;let s=t*e.bytesPerLine,f=(e.height-1-n)*e.outLineWidth;for(let t=0;t<e.channels;t++){let i=r.channels[t].name,o=e.channelLineOffsets[i],n=e.decodeChannels[i];if(void 0!==n){a.value=s+o;for(let r=0;r<e.width;r++){let t=f+r*e.outputChannels+n;e.byteArray&&(e.byteArray[t]=e.getter(l,a))}}}}}}z.DefaultOutputType=n.HalfFloat,z.FFLATEUrl="https://unpkg.com/fflate@0.8.2",e.s(["EXROutputType",0,n,"ExrLoaderGlobalConfiguration",0,z],58672),e.s(["CreateDecoderAsync",0,k,"ScanData",0,H],80870),e.s(["_ExrTextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(e,r,t,i,a){throw".exr not supported in Cube."}async loadData(e,r,t){let i=new DataView(e.buffer),a={value:0},o=I(i,a),n=await k(o,i,a,z.DefaultOutputType);H(n,o,i,a),t(o.dataWindow.xMax-o.dataWindow.xMin+1,o.dataWindow.yMax-o.dataWindow.yMin+1,r.generateMipMaps,!1,()=>{let e=r.getEngine();r.format=o.format,r.type=n.textureType,r.invertY=!1,r._gammaSpace=!o.linearSpace,n.byteArray&&e._uploadDataToTextureDirectly(r,n.byteArray,0,0,void 0,!0)})}}],49473)},32578,e=>{"use strict";var r=e.i(39715),t=e.i(52656),i=e.i(35081);class a{static extractMinAndMaxIndexed(e,r,t,i,a,o){for(let n=t;n<t+i;n++){let t=3*r[n],i=e[t],l=e[t+1],s=e[t+2];a.minimizeInPlaceFromFloats(i,l,s),o.maximizeInPlaceFromFloats(i,l,s)}}static extractMinAndMax(e,r,t,i,a,o){for(let n=r,l=r*i;n<r+t;n++,l+=i){let r=e[l],t=e[l+1],i=e[l+2];a.minimizeInPlaceFromFloats(r,t,i),o.maximizeInPlaceFromFloats(r,t,i)}}}function o(e,r,i,n=null,l){let s=new t.Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),f=new t.Vector3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);return l||(l=3),a.extractMinAndMax(e,r,i,l,s,f),n&&(s.x-=s.x*n.x+n.y,s.y-=s.y*n.x+n.y,s.z-=s.z*n.x+n.y,f.x+=f.x*n.x+n.y,f.y+=f.y*n.x+n.y,f.z+=f.z*n.x+n.y),{minimum:s,maximum:f}}(0,r.__decorate)([i.nativeOverride.filter((...[e,r])=>!Array.isArray(e)&&!Array.isArray(r))],a,"extractMinAndMaxIndexed",null),(0,r.__decorate)([i.nativeOverride.filter((...[e])=>!Array.isArray(e))],a,"extractMinAndMax",null),e.s(["FixFlippedFaces",0,function(e,r){let i=o(e,0,e.length/3),a=i.maximum.subtract(i.minimum).scale(.5).add(i.minimum),n=new t.Vector3,l=new t.Vector3,s=new t.Vector3,f=new t.Vector3,c=new t.Vector3,d=new t.Vector3,u=new t.Vector3;for(let i=0;i<r.length;i+=3){let o=r[i],p=r[i+1],m=r[i+2];n.fromArray(e,3*o),l.fromArray(e,3*p),s.fromArray(e,3*m),l.subtractToRef(n,f),s.subtractToRef(n,c),t.Vector3.CrossToRef(f,c,d),d.normalize();let v=n.x+l.x+s.x,S=n.y+l.y+s.y,h=n.z+l.z+s.z;u.set(v/3,S/3,h/3),u.subtractInPlace(a),u.normalize(),t.Vector3.Dot(d,u)>=0&&(r[i]=m,r[i+2]=o)}},"extractMinAndMax",0,o,"extractMinAndMaxIndexed",0,function(e,r,i,o,n=null){let l=new t.Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),s=new t.Vector3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);return a.extractMinAndMaxIndexed(e,r,i,o,l,s),n&&(l.x-=l.x*n.x+n.y,l.y-=l.y*n.x+n.y,l.z-=l.z*n.x+n.y,s.x+=s.x*n.x+n.y,s.y+=s.y*n.x+n.y,s.z+=s.z*n.x+n.y),{minimum:l,maximum:s}}])},3528,36542,e=>{"use strict";var r=e.i(52898),t=e.i(45390),i=e.i(70733),a=e.i(94266);function o(e,r,t){let i=!1,a=!!(e.clipPlane??r.clipPlane),o=!!(e.clipPlane2??r.clipPlane2),n=!!(e.clipPlane3??r.clipPlane3),l=!!(e.clipPlane4??r.clipPlane4),s=!!(e.clipPlane5??r.clipPlane5),f=!!(e.clipPlane6??r.clipPlane6);return t.CLIPPLANE!==a&&(t.CLIPPLANE=a,i=!0),t.CLIPPLANE2!==o&&(t.CLIPPLANE2=o,i=!0),t.CLIPPLANE3!==n&&(t.CLIPPLANE3=n,i=!0),t.CLIPPLANE4!==l&&(t.CLIPPLANE4=l,i=!0),t.CLIPPLANE5!==s&&(t.CLIPPLANE5=s,i=!0),t.CLIPPLANE6!==f&&(t.CLIPPLANE6=f,i=!0),i}function n(e,r,t){t&&e.setFloat4(r,t.normal.x,t.normal.y,t.normal.z,t.d)}e.s(["addClipPlaneUniforms",0,function(e){-1===e.indexOf("vClipPlane")&&e.push("vClipPlane"),-1===e.indexOf("vClipPlane2")&&e.push("vClipPlane2"),-1===e.indexOf("vClipPlane3")&&e.push("vClipPlane3"),-1===e.indexOf("vClipPlane4")&&e.push("vClipPlane4"),-1===e.indexOf("vClipPlane5")&&e.push("vClipPlane5"),-1===e.indexOf("vClipPlane6")&&e.push("vClipPlane6")},"bindClipPlane",0,function(e,r,t){let i=r.clipPlane??t.clipPlane;n(e,"vClipPlane",i),n(e,"vClipPlane2",i=r.clipPlane2??t.clipPlane2),n(e,"vClipPlane3",i=r.clipPlane3??t.clipPlane3),n(e,"vClipPlane4",i=r.clipPlane4??t.clipPlane4),n(e,"vClipPlane5",i=r.clipPlane5??t.clipPlane5),n(e,"vClipPlane6",i=r.clipPlane6??t.clipPlane6)},"prepareDefinesForClipPlanes",0,o,"prepareStringDefinesForClipPlanes",0,function(e,r,t){let i=!!(e.clipPlane??r.clipPlane),a=!!(e.clipPlane2??r.clipPlane2),o=!!(e.clipPlane3??r.clipPlane3),n=!!(e.clipPlane4??r.clipPlane4),l=!!(e.clipPlane5??r.clipPlane5),s=!!(e.clipPlane6??r.clipPlane6);i&&t.push("#define CLIPPLANE"),a&&t.push("#define CLIPPLANE2"),o&&t.push("#define CLIPPLANE3"),n&&t.push("#define CLIPPLANE4"),l&&t.push("#define CLIPPLANE5"),s&&t.push("#define CLIPPLANE6")}],36542);let l=t.Color3.Black(),s={NUM_MORPH_INFLUENCERS:0,NORMAL:!1,TANGENT:!1,UV:!1,UV2:!1,COLOR:!1};function f(e,t,a,o=!0){let n=a.NUM_MORPH_INFLUENCERS;if(n>0&&i.EngineStore.LastCreatedEngine){let l=i.EngineStore.LastCreatedEngine.getCaps().maxVertexAttribs,s=t.morphTargetManager;if(s?.isUsingTextureForTargets)return;let f=s&&s.supportsPositions&&o,c=s&&s.supportsNormals&&a.NORMAL,d=s&&s.supportsTangents&&a.TANGENT,u=s&&s.supportsUVs&&a.UV1,p=s&&s.supportsUV2s&&a.UV2,m=s&&s.supportsColors&&a.COLOR;for(let i=0;i<n;i++)f&&e.push("position"+i),c&&e.push("normal"+i),d&&e.push("tangent"+i),u&&e.push("uv_"+i),p&&e.push("uv2_"+i),m&&e.push("color"+i),e.length>l&&r.Logger.Error("Cannot add more vertex attributes for mesh "+t.name)}}function c(e,r=!1){e.push("world0"),e.push("world1"),e.push("world2"),e.push("world3"),r&&(e.push("previousWorld0"),e.push("previousWorld1"),e.push("previousWorld2"),e.push("previousWorld3"))}function d(e,r,t,i,a,o=!0){e._bindLight(r,t,i,a,o)}function u(e,r){return r.fogEnabled&&e.applyFog&&0!==r.fogMode}function p(e,r,t,i,o,n,l){switch(l.needNormals=!0,void 0===o["LIGHT"+i]&&(l.needRebuild=!0),o["LIGHT"+i]=!0,o["SPOTLIGHT"+i]=!1,o["HEMILIGHT"+i]=!1,o["POINTLIGHT"+i]=!1,o["DIRLIGHT"+i]=!1,o["AREALIGHT"+i]=!1,t.prepareLightSpecificDefines(o,i),o["LIGHT_FALLOFF_PHYSICAL"+i]=!1,o["LIGHT_FALLOFF_GLTF"+i]=!1,o["LIGHT_FALLOFF_STANDARD"+i]=!1,t.falloffType){case a.LightConstants.FALLOFF_GLTF:o["LIGHT_FALLOFF_GLTF"+i]=!0;break;case a.LightConstants.FALLOFF_PHYSICAL:o["LIGHT_FALLOFF_PHYSICAL"+i]=!0;break;case a.LightConstants.FALLOFF_STANDARD:o["LIGHT_FALLOFF_STANDARD"+i]=!0}if(n&&!t.specular.equalsFloats(0,0,0)&&(l.specularEnabled=!0),o["SHADOW"+i]=!1,o["SHADOWCSM"+i]=!1,o["SHADOWCSMDEBUG"+i]=!1,o["SHADOWCSMNUM_CASCADES"+i]=!1,o["SHADOWCSMUSESHADOWMAXZ"+i]=!1,o["SHADOWCSMNOBLEND"+i]=!1,o["SHADOWCSM_RIGHTHANDED"+i]=!1,o["SHADOWPCF"+i]=!1,o["SHADOWPCSS"+i]=!1,o["SHADOWPOISSON"+i]=!1,o["SHADOWESM"+i]=!1,o["SHADOWCLOSEESM"+i]=!1,o["SHADOWCUBE"+i]=!1,o["SHADOWLOWQUALITY"+i]=!1,o["SHADOWMEDIUMQUALITY"+i]=!1,r&&r.receiveShadows&&e.shadowsEnabled&&t.shadowEnabled){let r=t.getShadowGenerator(e.activeCamera)??t.getShadowGenerator();if(r){let e=r.getShadowMap();e&&e.renderList&&e.renderList.length>0&&(l.shadowEnabled=!0,r.prepareDefines(o,i))}}t.lightmapMode!=a.LightConstants.LIGHTMAP_DEFAULT?(l.lightmapMode=!0,o["LIGHTMAPEXCLUDED"+i]=!0,o["LIGHTMAPNOSPECULAR"+i]=t.lightmapMode==a.LightConstants.LIGHTMAP_SHADOWSONLY):(o["LIGHTMAPEXCLUDED"+i]=!1,o["LIGHTMAPNOSPECULAR"+i]=!1)}function m(e,r){if(e.useBones&&e.computeBonesUsingShaders&&e.skeleton){r.NUM_BONE_INFLUENCERS=e.numBoneInfluencers;let t=void 0!==r.BONETEXTURE;if(e.skeleton.isUsingTextureForMatrices&&t)r.BONETEXTURE=!0;else{r.BonesPerMesh=e.skeleton.bones.length+1,r.BONETEXTURE=!t&&void 0;let i=e.getScene().prePassRenderer;i&&i.enabled&&(r.BONES_VELOCITY_ENABLED=-1===i.excludedSkinnedMesh.indexOf(e))}}else r.NUM_BONE_INFLUENCERS=0,r.BonesPerMesh=0,void 0!==r.BONETEXTURE&&(r.BONETEXTURE=!1)}function v(e,r){let t=e.morphTargetManager;t?(r.MORPHTARGETS_UV=t.supportsUVs&&r.UV1,r.MORPHTARGETS_UV2=t.supportsUV2s&&r.UV2,r.MORPHTARGETS_TANGENT=t.supportsTangents&&r.TANGENT,r.MORPHTARGETS_NORMAL=t.supportsNormals&&r.NORMAL,r.MORPHTARGETS_POSITION=t.supportsPositions,r.MORPHTARGETS_COLOR=t.supportsColors,r.MORPHTARGETTEXTURE_HASUVS=t.hasUVs,r.MORPHTARGETTEXTURE_HASUV2S=t.hasUV2s,r.MORPHTARGETTEXTURE_HASTANGENTS=t.hasTangents,r.MORPHTARGETTEXTURE_HASNORMALS=t.hasNormals,r.MORPHTARGETTEXTURE_HASPOSITIONS=t.hasPositions,r.MORPHTARGETTEXTURE_HASCOLORS=t.hasColors,r.NUM_MORPH_INFLUENCERS=t.numMaxInfluencers||t.numInfluencers,r.MORPHTARGETS=r.NUM_MORPH_INFLUENCERS>0,r.MORPHTARGETS_TEXTURE=t.isUsingTextureForTargets):(r.MORPHTARGETS_UV=!1,r.MORPHTARGETS_UV2=!1,r.MORPHTARGETS_TANGENT=!1,r.MORPHTARGETS_NORMAL=!1,r.MORPHTARGETS_POSITION=!1,r.MORPHTARGETS_COLOR=!1,r.MORPHTARGETTEXTURE_HASUVS=!1,r.MORPHTARGETTEXTURE_HASUV2S=!1,r.MORPHTARGETTEXTURE_HASTANGENTS=!1,r.MORPHTARGETTEXTURE_HASNORMALS=!1,r.MORPHTARGETTEXTURE_HASPOSITIONS=!1,r.MORPHTARGETTEXTURE_HAS_COLORS=!1,r.MORPHTARGETS=!1,r.NUM_MORPH_INFLUENCERS=0)}function S(e,r){let t=e.bakedVertexAnimationManager;r.BAKED_VERTEX_ANIMATION_TEXTURE=!!t&&!!t.isEnabled}function h(e,r){let t=!1;if(e.activeCamera){let i=+!!r.CAMERA_ORTHOGRAPHIC,a=+!!r.CAMERA_PERSPECTIVE,o=+(1===e.activeCamera.mode),n=+(0===e.activeCamera.mode);(i^o||a^n)&&(r.CAMERA_ORTHOGRAPHIC=1===o,r.CAMERA_PERSPECTIVE=1===n,t=!0)}return t}function x(e,r,t,i,a=null,o=!1,n=!1){a&&a.push("Light"+e),!o&&(r.push("vLightData"+e,"vLightDiffuse"+e,"vLightSpecular"+e,"vLightDirection"+e,"vLightWidth"+e,"vLightHeight"+e,"vLightFalloff"+e,"vLightGround"+e,"lightMatrix"+e,"shadowsInfo"+e,"depthValues"+e),t.push("shadowTexture"+e),t.push("depthTexture"+e),r.push("viewFrustumZ"+e,"cascadeBlendFactor"+e,"lightSizeUVCorrection"+e,"depthCorrection"+e,"penumbraDarkness"+e,"frustumLengths"+e),i&&(t.push("projectionLightTexture"+e),r.push("textureProjectionMatrix"+e)),n&&t.push("iesLightTexture"+e))}e.s(["BindBonesParameters",0,function(e,r,t){if(r&&e&&(e.computeBonesUsingShaders&&r._bonesComputationForcedToCPU&&(e.computeBonesUsingShaders=!1),e.useBones&&e.computeBonesUsingShaders&&e.skeleton)){let i=e.skeleton;if(i.isUsingTextureForMatrices&&r.getUniformIndex("boneTextureWidth")>-1){let t=i.getTransformMatrixTexture(e);r.setTexture("boneSampler",t),r.setFloat("boneTextureWidth",4*(i.bones.length+1))}else{let a=i.getTransformMatrices(e);a&&(r.setMatrices("mBones",a),t&&e.getScene().prePassRenderer&&e.getScene().prePassRenderer.getIndex(2))&&(t.previousBones[e.uniqueId]||(t.previousBones[e.uniqueId]=a.slice()),r.setMatrices("mPreviousBones",t.previousBones[e.uniqueId]),t.previousBones[e.uniqueId].set(a))}}},"BindFogParameters",0,function(e,r,t,i=!1){t&&e.fogEnabled&&(!r||r.applyFog)&&0!==e.fogMode&&(t.setFloat4("vFogInfos",e.fogMode,e.fogStart,e.fogEnd,e.fogDensity),i?(e.fogColor.toLinearSpaceToRef(l,e.getEngine().useExactSrgbConversions),t.setColor3("vFogColor",l)):t.setColor3("vFogColor",e.fogColor))},"BindLight",0,d,"BindLightProperties",0,function(e,r,t){e.transferToEffect(r,t+"")},"BindLights",0,function(e,r,t,i,a=4){let o=Math.min(r.lightSources.length,a);for(let a=0;a<o;a++)d(r.lightSources[a],a,e,t,"boolean"==typeof i?i:i.SPECULARTERM,r.receiveShadows)},"BindLogDepth",0,function(e,t,i){if(!e||e.LOGARITHMICDEPTH||e.indexOf&&e.indexOf("LOGARITHMICDEPTH")>=0){let e=i.activeCamera;1===e.mode&&r.Logger.Error("Logarithmic depth is not compatible with orthographic cameras!",20),t.setFloat("logarithmicDepthConstant",2/(Math.log(e.maxZ+1)/Math.LN2))}},"BindMorphTargetParameters",0,function(e,r){let t=e.morphTargetManager;e&&t&&r.setFloatArray("morphTargetInfluences",t.influences)},"BindSceneUniformBuffer",0,function(e,r){r.bindToEffect(e,"Scene")},"BindTextureMatrix",0,function(e,r,t){let i=e.getTextureMatrix();r.updateMatrix(t+"Matrix",i)},"GetFogState",0,u,"HandleFallbacksForShadows",0,function(e,r,t=4,i=0){let a=0;for(let o=0;o<t&&e["LIGHT"+o];o++)o>0&&(a=i+o,r.addFallback(a,"LIGHT"+o)),!e.SHADOWS&&(e["SHADOW"+o]&&r.addFallback(i,"SHADOW"+o),e["SHADOWPCF"+o]&&r.addFallback(i,"SHADOWPCF"+o),e["SHADOWPCSS"+o]&&r.addFallback(i,"SHADOWPCSS"+o),e["SHADOWPOISSON"+o]&&r.addFallback(i,"SHADOWPOISSON"+o),e["SHADOWESM"+o]&&r.addFallback(i,"SHADOWESM"+o),e["SHADOWCLOSEESM"+o]&&r.addFallback(i,"SHADOWCLOSEESM"+o));return a++},"PrepareAttributesForBakedVertexAnimation",0,function(e,r,t){t.BAKED_VERTEX_ANIMATION_TEXTURE&&t.INSTANCES&&e.push("bakedVertexAnimationSettingsInstanced")},"PrepareAttributesForBones",0,function(e,r,t,i){t.NUM_BONE_INFLUENCERS>0&&(i.addCPUSkinningFallback(0,r),e.push("matricesIndices"),e.push("matricesWeights"),t.NUM_BONE_INFLUENCERS>4&&(e.push("matricesIndicesExtra"),e.push("matricesWeightsExtra")))},"PrepareAttributesForInstances",0,function(e,r){(r.INSTANCES||r.THIN_INSTANCES)&&c(e,!!r.PREPASS_VELOCITY),r.INSTANCESCOLOR&&e.push("instanceColor")},"PrepareAttributesForMorphTargets",0,f,"PrepareAttributesForMorphTargetsInfluencers",0,function(e,r,t){s.NUM_MORPH_INFLUENCERS=t,s.NORMAL=!1,s.TANGENT=!1,s.UV=!1,s.UV2=!1,s.COLOR=!1,f(e,r,s,!0)},"PrepareDefinesAndAttributesForMorphTargets",0,function(e,r,t,i,a,o,n,l,c,d){let u=e.numMaxInfluencers||e.numInfluencers;return u<=0?0:(r.push("#define MORPHTARGETS"),e.hasPositions&&r.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"),e.hasNormals&&r.push("#define MORPHTARGETTEXTURE_HASNORMALS"),e.hasTangents&&r.push("#define MORPHTARGETTEXTURE_HASTANGENTS"),e.hasUVs&&r.push("#define MORPHTARGETTEXTURE_HASUVS"),e.hasUV2s&&r.push("#define MORPHTARGETTEXTURE_HASUV2S"),e.hasColors&&r.push("#define MORPHTARGETTEXTURE_HASCOLORS"),e.supportsPositions&&a&&r.push("#define MORPHTARGETS_POSITION"),e.supportsNormals&&o&&r.push("#define MORPHTARGETS_NORMAL"),e.supportsTangents&&n&&r.push("#define MORPHTARGETS_TANGENT"),e.supportsUVs&&l&&r.push("#define MORPHTARGETS_UV"),e.supportsUV2s&&c&&r.push("#define MORPHTARGETS_UV2"),e.supportsColors&&d&&r.push("#define MORPHTARGETS_COLOR"),r.push("#define NUM_MORPH_INFLUENCERS "+u),e.isUsingTextureForTargets&&r.push("#define MORPHTARGETS_TEXTURE"),s.NUM_MORPH_INFLUENCERS=u,s.NORMAL=o,s.TANGENT=n,s.UV=l,s.UV2=c,s.COLOR=d,f(t,i,s,a),u)},"PrepareDefinesForAttributes",0,function(e,r,t,i,a=!1,o=!0,n=!0){if(!r._areAttributesDirty&&r._needNormals===r._normals&&r._needUVs===r._uvs)return!1;r._normals=r._needNormals,r._uvs=r._needUVs,r.NORMAL=r._needNormals&&e.isVerticesDataPresent("normal"),r._needNormals&&e.isVerticesDataPresent("tangent")&&(r.TANGENT=!0);for(let t=1;t<=6;++t)r["UV"+t]=!!r._needUVs&&e.isVerticesDataPresent(`uv${1===t?"":t}`);if(t){let t=e.useVertexColors&&e.isVerticesDataPresent("color");r.VERTEXCOLOR=t,r.VERTEXALPHA=e.hasVertexAlpha&&t&&o}return e.isVerticesDataPresent("instanceColor")&&(e.hasInstances||e.hasThinInstances)&&(r.INSTANCESCOLOR=!0),i&&m(e,r),a&&v(e,r),n&&S(e,r),!0},"PrepareDefinesForBakedVertexAnimation",0,S,"PrepareDefinesForBones",0,m,"PrepareDefinesForCamera",0,h,"PrepareDefinesForFrameBoundValues",0,function(e,r,t,i,a,n=null,l=!1){let s=h(e,i);!1!==n&&(s=o(t,e,i)),!r.getColorWrite()!==i.DEPTHPREPASS&&(i.DEPTHPREPASS=!i.DEPTHPREPASS,s=!0),i.INSTANCES!==a&&(i.INSTANCES=a,s=!0),i.THIN_INSTANCES!==l&&(i.THIN_INSTANCES=l,s=!0),s&&i.markAsUnprocessed()},"PrepareDefinesForLight",0,p,"PrepareDefinesForLights",0,function(e,r,t,i,a=4,o=!1){if(!t._areLightsDirty)return t._needNormals;let n=0,l={needNormals:t._needNormals,needRebuild:!1,lightmapMode:!1,shadowEnabled:!1,specularEnabled:!1};if(e.lightsEnabled&&!o){for(let o of r.lightSources)if(p(e,r,o,n,t,i,l),++n===a)break}t.SPECULARTERM=l.specularEnabled,t.SHADOWS=l.shadowEnabled;for(let e=n;e<a;e++)void 0!==t["LIGHT"+e]&&(t["LIGHT"+e]=!1,t["HEMILIGHT"+e]=!1,t["POINTLIGHT"+e]=!1,t["DIRLIGHT"+e]=!1,t["SPOTLIGHT"+e]=!1,t["AREALIGHT"+e]=!1,t["SHADOW"+e]=!1,t["SHADOWCSM"+e]=!1,t["SHADOWCSMDEBUG"+e]=!1,t["SHADOWCSMNUM_CASCADES"+e]=!1,t["SHADOWCSMUSESHADOWMAXZ"+e]=!1,t["SHADOWCSMNOBLEND"+e]=!1,t["SHADOWCSM_RIGHTHANDED"+e]=!1,t["SHADOWPCF"+e]=!1,t["SHADOWPCSS"+e]=!1,t["SHADOWPOISSON"+e]=!1,t["SHADOWESM"+e]=!1,t["SHADOWCLOSEESM"+e]=!1,t["SHADOWCUBE"+e]=!1,t["SHADOWLOWQUALITY"+e]=!1,t["SHADOWMEDIUMQUALITY"+e]=!1);let s=e.getEngine().getCaps();return void 0===t.SHADOWFLOAT&&(l.needRebuild=!0),t.SHADOWFLOAT=l.shadowEnabled&&(s.textureFloatRender&&s.textureFloatLinearFiltering||s.textureHalfFloatRender&&s.textureHalfFloatLinearFiltering),t.LIGHTMAPEXCLUDED=l.lightmapMode,l.needRebuild&&t.rebuild(),l.needNormals},"PrepareDefinesForMergedUV",0,function(e,r,t){r._needUVs=!0,r[t]=!0,e.optimizeUVAllocation&&e.getTextureMatrix().isIdentityAs3x2()?(r[t+"DIRECTUV"]=e.coordinatesIndex+1,r["MAINUV"+(e.coordinatesIndex+1)]=!0):r[t+"DIRECTUV"]=0},"PrepareDefinesForMisc",0,function(e,r,t,i,a,o,n,l=!1){n._areMiscDirty&&(n.LOGARITHMICDEPTH=t,n.POINTSIZE=i,n.FOG=a&&u(e,r),n.NONUNIFORMSCALING=e.nonUniformScaling,n.ALPHATEST=o,n.DECAL_AFTER_DETAIL=l)},"PrepareDefinesForMorphTargets",0,v,"PrepareDefinesForMultiview",0,function(e,r){if(e.activeCamera){let t=r.MULTIVIEW;r.MULTIVIEW=null!==e.activeCamera.outputRenderTarget&&e.activeCamera.outputRenderTarget.getViewCount()>1,r.MULTIVIEW!=t&&r.markAsUnprocessed()}},"PrepareDefinesForOIT",0,function(e,r,t){let i=r.ORDER_INDEPENDENT_TRANSPARENCY,a=r.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;r.ORDER_INDEPENDENT_TRANSPARENCY=e.useOrderIndependentTransparency&&t,r.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!e.getEngine().getCaps().textureFloatLinearFiltering,(i!==r.ORDER_INDEPENDENT_TRANSPARENCY||a!==r.ORDER_INDEPENDENT_TRANSPARENCY_16BITS)&&r.markAsUnprocessed()},"PrepareDefinesForPrePass",0,function(e,r,t){let i=r.PREPASS;if(!r._arePrePassDirty)return;let a=[{type:1,define:"PREPASS_POSITION",index:"PREPASS_POSITION_INDEX"},{type:9,define:"PREPASS_LOCAL_POSITION",index:"PREPASS_LOCAL_POSITION_INDEX"},{type:2,define:"PREPASS_VELOCITY",index:"PREPASS_VELOCITY_INDEX"},{type:11,define:"PREPASS_VELOCITY_LINEAR",index:"PREPASS_VELOCITY_LINEAR_INDEX"},{type:3,define:"PREPASS_REFLECTIVITY",index:"PREPASS_REFLECTIVITY_INDEX"},{type:0,define:"PREPASS_IRRADIANCE",index:"PREPASS_IRRADIANCE_INDEX"},{type:7,define:"PREPASS_ALBEDO_SQRT",index:"PREPASS_ALBEDO_SQRT_INDEX"},{type:5,define:"PREPASS_DEPTH",index:"PREPASS_DEPTH_INDEX"},{type:10,define:"PREPASS_SCREENSPACE_DEPTH",index:"PREPASS_SCREENSPACE_DEPTH_INDEX"},{type:6,define:"PREPASS_NORMAL",index:"PREPASS_NORMAL_INDEX"},{type:8,define:"PREPASS_WORLD_NORMAL",index:"PREPASS_WORLD_NORMAL_INDEX"}];if(e.prePassRenderer&&e.prePassRenderer.enabled&&t){r.PREPASS=!0,r.SCENE_MRT_COUNT=e.prePassRenderer.mrtCount,r.PREPASS_NORMAL_WORLDSPACE=e.prePassRenderer.generateNormalsInWorldSpace,r.PREPASS_COLOR=!0,r.PREPASS_COLOR_INDEX=0;for(let t=0;t<a.length;t++){let i=e.prePassRenderer.getIndex(a[t].type);-1!==i?(r[a[t].define]=!0,r[a[t].index]=i):r[a[t].define]=!1}}else{r.PREPASS=!1;for(let e=0;e<a.length;e++)r[a[e].define]=!1}r.PREPASS!=i&&(r.markAsUnprocessed(),r.markAsImageProcessingDirty())},"PrepareUniformsAndSamplersForLight",0,x,"PrepareUniformsAndSamplersList",0,function(e,r,t,i=4){let a,o;e.uniformsNames?(a=e.uniformsNames,o=e.uniformBuffersNames,r=e.samplers,t=e.defines,i=e.maxSimultaneousLights||0):(a=e,r||(r=[]));for(let e=0;e<i&&t["LIGHT"+e];e++)x(e,a,r,t["PROJECTEDLIGHTTEXTURE"+e],o,!1,t["IESLIGHTTEXTURE"+e]);t.NUM_MORPH_INFLUENCERS&&(a.push("morphTargetInfluences"),a.push("morphTargetCount")),t.BAKED_VERTEX_ANIMATION_TEXTURE&&(a.push("bakedVertexAnimationSettings"),a.push("bakedVertexAnimationTextureSizeInverted"),a.push("bakedVertexAnimationTime"),r.push("bakedVertexAnimationTexture"))},"PushAttributesForInstances",0,c],3528)},54305,e=>{"use strict";var r=e.i(18422),t=e.i(3528),i=e.i(32578),a=e.i(52656),o=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(14397),e.i(11617),e.i(70017),e.i(44754);let n="gpuTransformVertexShader",l=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
out vec3 outPosition;const mat4 identity=mat4(
vec4(1.0,0.0,0.0,0.0),
vec4(0.0,1.0,0.0,0.0),
vec4(0.0,0.0,1.0,0.0),
vec4(0.0,0.0,0.0,1.0)
);void main(void) {vec3 positionUpdated=position;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
mat4 finalWorld=identity;
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);outPosition=worldPos.xyz;}`;o.ShaderStore.ShadersStore[n]||(o.ShaderStore.ShadersStore[n]=l);let s="gpuTransformPixelShader",f=`#version 300 es
void main() {discard;}
`;o.ShaderStore.ShadersStore[s]||(o.ShaderStore.ShadersStore[s]=f);class c{constructor(e){this._buffers={},this._effects={},this._meshListCounter=0,this._engine=e}processAsync(e){return Array.isArray(e)||(e=[e]),this._meshListCounter=0,this._processMeshList(e),Promise.resolve()}_processMeshList(e){let i=this._engine.getCaps().parallelShaderCompile;this._engine.getCaps().parallelShaderCompile=void 0;for(let i=0;i<e.length;++i){let a,o=e[i];if(0===o.getTotalVertices()||!o.getVertexBuffer||!o.getVertexBuffer(r.VertexBuffer.PositionKind))continue;let n=[],l=[r.VertexBuffer.PositionKind];o&&o.useBones&&o.computeBonesUsingShaders&&o.skeleton?(l.push(r.VertexBuffer.MatricesIndicesKind),l.push(r.VertexBuffer.MatricesWeightsKind),o.numBoneInfluencers>4&&(l.push(r.VertexBuffer.MatricesIndicesExtraKind),l.push(r.VertexBuffer.MatricesWeightsExtraKind)),n.push("#define NUM_BONE_INFLUENCERS "+o.numBoneInfluencers),n.push("#define BONETEXTURE "+o.skeleton.isUsingTextureForMatrices),n.push("#define BonesPerMesh "+(o.skeleton.bones.length+1))):n.push("#define NUM_BONE_INFLUENCERS 0");let s=o.morphTargetManager?(0,t.PrepareDefinesAndAttributesForMorphTargets)(o.morphTargetManager,n,l,o,!0,!1,!1,!1,!1,!1):0,f=o.bakedVertexAnimationManager;f&&f.isEnabled&&(n.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"),(0,t.PrepareAttributesForBakedVertexAnimation)(l,o,n));let c=n.join("\n");if(this._effects[c])a=this._effects[c];else{let e={attributes:l,uniformsNames:["boneTextureWidth","mBones","morphTargetInfluences","morphTargetCount","morphTargetTextureInfo","morphTargetTextureIndices","bakedVertexAnimationSettings","bakedVertexAnimationTextureSizeInverted","bakedVertexAnimationTime"],uniformBuffersNames:[],samplers:["boneSampler","morphTargets","bakedVertexAnimationTexture"],defines:c,fallbacks:null,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:s},maxSimultaneousLights:0,transformFeedbackVaryings:["outPosition"]};a=this._engine.createEffect("gpuTransform",e,this._engine),this._effects[c]=a}this._compute(o,a)}this._engine.getCaps().parallelShaderCompile=i}_compute(e,a){let o,n=this._engine,l=e.getTotalVertices();if(this._buffers[e.uniqueId])o=this._buffers[e.uniqueId];else{let t=new Float32Array(3*l);o=new r.Buffer(e.getEngine(),t,!0,3),this._buffers[e.uniqueId]=o}a.getEngine().enableEffect(a),e._bindDirect(a,null,!0),(0,t.BindBonesParameters)(e,a),(0,t.BindMorphTargetParameters)(e,a),e.morphTargetManager&&e.morphTargetManager.isUsingTextureForTargets&&e.morphTargetManager._bind(a);let s=e.bakedVertexAnimationManager;s&&s.isEnabled&&e.bakedVertexAnimationManager?.bind(a,!1);let f=o.getData();if(n.bindTransformFeedbackBuffer(o.getBuffer()),n.setRasterizerState(!1),n.beginTransformFeedback(!0),n.drawArraysType(2,0,l),n.endTransformFeedback(),n.setRasterizerState(!0),n.readTransformFeedbackBuffer(f),n.bindTransformFeedbackBuffer(null),0===this._meshListCounter)e._refreshBoundingInfo(f,null);else{let r=e.getBoundingInfo().boundingBox,t=(0,i.extractMinAndMax)(f,0,l);c._Min.copyFrom(r.minimum).minimizeInPlace(t.minimum),c._Max.copyFrom(r.maximum).maximizeInPlace(t.maximum),e._refreshBoundingInfoDirect({minimum:c._Min,maximum:c._Max})}}registerMeshListAsync(e){return Array.isArray(e)||(e=[e]),this._meshList=e,this._meshListCounter=0,Promise.resolve()}processMeshList(){0!==this._meshList.length&&(this._processMeshList(this._meshList),this._meshListCounter++)}fetchResultsForMeshListAsync(){return this._meshListCounter=0,Promise.resolve()}dispose(){for(let e in this._buffers)this._buffers[e].dispose();this._buffers={},this._effects={},this._engine=null}}c._Min=new a.Vector3,c._Max=new a.Vector3,e.s(["TransformFeedbackBoundingHelper",0,c],54305)},59599,e=>{"use strict";var r=e.i(33967);e.i(45315);let t="defaultVertexDeclaration",i=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(38649),e.i(36959),e.i(13851),e.i(43434),e.i(10283),e.i(18178),e.i(93298),e.i(2522),e.i(54184),e.i(58420),e.i(26230),e.i(44371),e.i(75248),e.i(62741),e.i(18577),e.i(39102),e.i(24137),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754),e.i(84549),e.i(11020),e.i(85518),e.i(98698),e.i(7025),e.i(1141),e.i(34479),e.i(74391),e.i(280),e.i(3449);let a="defaultVertexShader",o=`#define CUSTOM_VERTEX_EXTENSION
#include<__decl__defaultVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#ifdef PREPASS
#include<prePassVertex>
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2Updated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["defaultVertexShader",0,{name:a,shader:o}],59599)},70017,e=>{"use strict";var r=e.i(33967);let t="bonesVertex",i=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["bonesVertex",0,{name:t,shader:i}])},43434,e=>{"use strict";var r=e.i(33967);let t="bonesDeclaration",i=`#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform highp sampler2D boneSampler;uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#endif
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{float offset=index *4.0;float dx=1.0/boneTextureWidth;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));return mat4(m0,m1,m2,m3);}
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["bonesDeclaration",0,{name:t,shader:i}])},10283,44754,e=>{"use strict";var r=e.i(33967);let t="bakedVertexAnimationDeclaration",i=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;uniform vec2 bakedVertexAnimationTextureSizeInverted;uniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{float offset=index*4.0;float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;float dx=bakedVertexAnimationTextureSizeInverted.x;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));return mat4(m0,m1,m2,m3);}
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([],10283);let a="bakedVertexAnimation",o=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME.z;float VATSpeed=BVASNAME.w;float totalFrames=VATEndFrame-VATStartFrame+1.0;float time=bakedVertexAnimationTime*VATSpeed/totalFrames;float frameCorrection=time<1.0 ? 0.0 : 1.0;float numOfFrames=totalFrames-frameCorrection;float VATFrameNum=fract(time)*numOfFrames;VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);VATFrameNum=floor(VATFrameNum);VATFrameNum+=VATStartFrame+frameCorrection;mat4 VATInfluence;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o),e.s([],44754)},11617,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertex",i=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (i>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated+=(readVector3FromRawSampler(i,vertexID)-position)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASPOSITIONS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler(i,vertexID) -normal)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASNORMALS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler(i,vertexID).xy-uv)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUVS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler(i,vertexID) -tangent.xyz)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASTANGENTS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated+=(readVector3FromRawSampler(i,vertexID).xy-uv2)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUV2S
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated+=(readVector4FromRawSampler(i,vertexID)-color)*morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated+=(uv2_{X}-uv2)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated+=(color{X}-color)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["morphTargetsVertex",0,{name:t,shader:i}])},18577,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertexGlobalDeclaration",i=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV).xyz;}
vec4 readVector4FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV);}
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["morphTargetsVertexGlobalDeclaration",0,{name:t,shader:i}])},14397,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertexGlobal",i=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["morphTargetsVertexGlobal",0,{name:t,shader:i}])},39102,e=>{"use strict";var r=e.i(33967);let t="morphTargetsVertexDeclaration",i=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute vec3 position{X};
#endif
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#ifdef MORPHTARGETS_UV2
attribute vec2 uv2_{X};
#endif
#elif {X}==0
uniform int morphTargetCount;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["morphTargetsVertexDeclaration",0,{name:t,shader:i}])},7025,e=>{"use strict";var r=e.i(33967);let t="clipPlaneVertex",i=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["clipPlaneVertex",0,{name:t,shader:i}])},26230,e=>{"use strict";var r=e.i(33967);let t="clipPlaneVertexDeclaration",i=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;varying float fClipDistance6;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["clipPlaneVertexDeclaration",0,{name:t,shader:i}])},22752,e=>{"use strict";var r=e.i(33967);let t="instancesVertex",i=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,
previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},18178,e=>{"use strict";var r=e.i(33967);let t="instancesDeclaration",i=`#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
attribute vec4 previousWorld0;attribute vec4 previousWorld1;attribute vec4 previousWorld2;attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
uniform mat4 previousWorld;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},98698,e=>{"use strict";var r=e.i(33967);let t="bumpVertex",i=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},74391,e=>{"use strict";var r=e.i(33967);let t="vertexColorMixing",i=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=colorUpdated;
#else
vColor.rgb*=colorUpdated.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},24137,e=>{"use strict";var r=e.i(33967);let t="logDepthDeclaration",i=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},3449,e=>{"use strict";var r=e.i(33967);let t="logDepthVertex",i=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},44371,e=>{"use strict";var r=e.i(33967);let t="fogVertexDeclaration",i=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},1141,e=>{"use strict";var r=e.i(33967);let t="fogVertex",i=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},34479,e=>{"use strict";var r=e.i(33967);let t="shadowsVertex",i=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["shadowsVertex",0,{name:t,shader:i}])},75248,e=>{"use strict";var r=e.i(33967);let t="lightVxFragmentDeclaration",i=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#if defined(AREALIGHT{X})
uniform vec4 vLightWidth{X};uniform vec4 vLightHeight{X};
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["lightVxFragmentDeclaration",0,{name:t,shader:i}])},62741,e=>{"use strict";var r=e.i(33967);let t="lightVxUboDeclaration",i=`#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
#if defined(AREALIGHT{X})
vec4 vLightWidth;vec4 vLightHeight;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["lightVxUboDeclaration",0,{name:t,shader:i}])},280,e=>{"use strict";var r=e.i(33967);let t="pointCloudVertex",i=`#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},84400,e=>{"use strict";var r=e.i(33967);let t="sceneUboDeclaration",i=`layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;mat4 projection;vec4 vEyePosition;};
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},17463,e=>{"use strict";var r=e.i(33967);let t="meshUboDeclaration",i=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},2522,e=>{"use strict";var r=e.i(33967);let t="mainUVVaryingDeclaration",i=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},38649,e=>{"use strict";var r=e.i(33967);e.i(84400),e.i(17463);let t="defaultUboDeclaration",i=`layout(std140,column_major) uniform;uniform Material
{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vReflectionInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 reflectionMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},72096,59002,16880,19960,48290,e=>{"use strict";var r,t,i,a,o,n,l=e.i(52898);class s{constructor(e,r){if(this.data=e,this.isInvalid=!1,!s.IsValid(e)){this.isInvalid=!0,l.Logger.Error("texture missing KTX identifier");return}const t=Uint32Array.BYTES_PER_ELEMENT,i=new DataView(this.data.buffer,this.data.byteOffset+12,13*t),a=0x4030201===i.getUint32(0,!0);if(this.glType=i.getUint32(+t,a),this.glTypeSize=i.getUint32(2*t,a),this.glFormat=i.getUint32(3*t,a),this.glInternalFormat=i.getUint32(4*t,a),this.glBaseInternalFormat=i.getUint32(5*t,a),this.pixelWidth=i.getUint32(6*t,a),this.pixelHeight=i.getUint32(7*t,a),this.pixelDepth=i.getUint32(8*t,a),this.numberOfArrayElements=i.getUint32(9*t,a),this.numberOfFaces=i.getUint32(10*t,a),this.numberOfMipmapLevels=i.getUint32(11*t,a),this.bytesOfKeyValueData=i.getUint32(12*t,a),0!==this.glType){l.Logger.Error("only compressed formats currently supported"),this.isInvalid=!0;return}if(this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels),0===this.pixelHeight||0!==this.pixelDepth){l.Logger.Error("only 2D textures currently supported"),this.isInvalid=!0;return}if(0!==this.numberOfArrayElements){l.Logger.Error("texture arrays not currently supported"),this.isInvalid=!0;return}if(this.numberOfFaces!==r){l.Logger.Error("number of faces expected"+r+", but found "+this.numberOfFaces),this.isInvalid=!0;return}this.loadType=s.COMPRESSED_2D}uploadLevels(e,r){switch(this.loadType){case s.COMPRESSED_2D:this._upload2DCompressedLevels(e,r);case s.TEX_2D:case s.COMPRESSED_3D:case s.TEX_3D:}}_upload2DCompressedLevels(e,r){let t=s.HEADER_LEN+this.bytesOfKeyValueData,i=this.pixelWidth,a=this.pixelHeight,o=r?this.numberOfMipmapLevels:1;for(let r=0;r<o;r++){let o=new Int32Array(this.data.buffer,this.data.byteOffset+t,1)[0];t+=4;for(let n=0;n<this.numberOfFaces;n++){let l=new Uint8Array(this.data.buffer,this.data.byteOffset+t,o);e.getEngine()._uploadCompressedDataToTextureDirectly(e,e.format,i,a,l,n,r),t+=o,t+=3-(o+3)%4}i=Math.max(1,.5*i),a=Math.max(1,.5*a)}}static IsValid(e){if(e.byteLength>=12){let r=new Uint8Array(e.buffer,e.byteOffset,12);if(171===r[0]&&75===r[1]&&84===r[2]&&88===r[3]&&32===r[4]&&49===r[5]&&49===r[6]&&187===r[7]&&13===r[8]&&10===r[9]&&26===r[10]&&10===r[11])return!0}return!1}}s.HEADER_LEN=64,s.COMPRESSED_2D=0,s.COMPRESSED_3D=1,s.TEX_2D=2,s.TEX_3D=3,e.s(["KhronosTextureContainer",0,s],59002);class f{constructor(e){this._pendingActions=[],this._workerInfos=e.map(e=>({workerPromise:Promise.resolve(e),idle:!0}))}dispose(){for(let e of this._workerInfos)e.workerPromise.then(e=>{e.terminate()});this._workerInfos.length=0,this._pendingActions.length=0}push(e){this._executeOnIdleWorker(e)||this._pendingActions.push(e)}_executeOnIdleWorker(e){for(let r of this._workerInfos)if(r.idle)return this._execute(r,e),!0;return!1}_execute(e,r){e.idle=!1,e.workerPromise.then(t=>{r(t,()=>{let r=this._pendingActions.shift();r?this._execute(e,r):e.idle=!0})})}}class c extends f{constructor(e,r,t=c.DefaultOptions){super([]),this._maxWorkers=e,this._createWorkerAsync=r,this._options=t}push(e){if(!this._executeOnIdleWorker(e))if(this._workerInfos.length<this._maxWorkers){let r={workerPromise:this._createWorkerAsync(),idle:!1};this._workerInfos.push(r),this._execute(r,e)}else this._pendingActions.push(e)}_execute(e,r){e.timeoutId&&(clearTimeout(e.timeoutId),delete e.timeoutId),super._execute(e,(t,i)=>{r(t,()=>{i(),e.idle&&(e.timeoutId=setTimeout(()=>{e.workerPromise.then(e=>{e.terminate()});let r=this._workerInfos.indexOf(e);-1!==r&&this._workerInfos.splice(r,1)},this._options.idleTimeElapsedBeforeRelease))})})}}c.DefaultOptions={idleTimeElapsedBeforeRelease:1e3},e.s(["AutoReleaseWorkerPool",0,c],16880);var d=e.i(67722);function u(e,r){let t=r?.jsDecoderModule||KTX2DECODER;e&&(e.wasmUASTCToASTC&&(t.LiteTranscoder_UASTC_ASTC.WasmModuleURL=e.wasmUASTCToASTC),e.wasmUASTCToBC7&&(t.LiteTranscoder_UASTC_BC7.WasmModuleURL=e.wasmUASTCToBC7),e.wasmUASTCToRGBA_UNORM&&(t.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL=e.wasmUASTCToRGBA_UNORM),e.wasmUASTCToRGBA_SRGB&&(t.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL=e.wasmUASTCToRGBA_SRGB),e.wasmUASTCToR8_UNORM&&(t.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL=e.wasmUASTCToR8_UNORM),e.wasmUASTCToRG8_UNORM&&(t.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL=e.wasmUASTCToRG8_UNORM),e.jsMSCTranscoder&&(t.MSCTranscoder.JSModuleURL=e.jsMSCTranscoder),e.wasmMSCTranscoder&&(t.MSCTranscoder.WasmModuleURL=e.wasmMSCTranscoder),e.wasmZSTDDecoder&&(t.ZSTDDecoder.WasmModuleURL=e.wasmZSTDDecoder)),r&&(r.wasmUASTCToASTC&&(t.LiteTranscoder_UASTC_ASTC.WasmBinary=r.wasmUASTCToASTC),r.wasmUASTCToBC7&&(t.LiteTranscoder_UASTC_BC7.WasmBinary=r.wasmUASTCToBC7),r.wasmUASTCToRGBA_UNORM&&(t.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary=r.wasmUASTCToRGBA_UNORM),r.wasmUASTCToRGBA_SRGB&&(t.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary=r.wasmUASTCToRGBA_SRGB),r.wasmUASTCToR8_UNORM&&(t.LiteTranscoder_UASTC_R8_UNORM.WasmBinary=r.wasmUASTCToR8_UNORM),r.wasmUASTCToRG8_UNORM&&(t.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary=r.wasmUASTCToRG8_UNORM),r.jsMSCTranscoder&&(t.MSCTranscoder.JSModule=r.jsMSCTranscoder),r.wasmMSCTranscoder&&(t.MSCTranscoder.WasmBinary=r.wasmMSCTranscoder),r.wasmZSTDDecoder&&(t.ZSTDDecoder.WasmBinary=r.wasmZSTDDecoder))}function p(e){let r;void 0===e&&"u">typeof KTX2DECODER&&(e=KTX2DECODER),onmessage=t=>{if(t.data)switch(t.data.action){case"init":{let i=t.data.urls;i&&(i.jsDecoderModule&&void 0===e&&(importScripts(i.jsDecoderModule),e=KTX2DECODER),u(i)),t.data.wasmBinaries&&u(void 0,{...t.data.wasmBinaries,jsDecoderModule:e}),r=new e.KTX2Decoder,postMessage({action:"init"});break}case"setDefaultDecoderOptions":e.KTX2Decoder.DefaultDecoderOptions=t.data.options;break;case"decode":r.decode(t.data.data,t.data.caps,t.data.options).then(e=>{let r=[];for(let t=0;t<e.mipmaps.length;++t){let i=e.mipmaps[t];i&&i.data&&r.push(i.data.buffer)}postMessage({action:"decoded",success:!0,decodedData:e},r)}).catch(e=>{postMessage({action:"decoded",success:!1,msg:e})})}}}(r=a||(a={}))[r.ETC1S=0]="ETC1S",r[r.UASTC4x4=1]="UASTC4x4",(t=o||(o={}))[t.ASTC_4X4_RGBA=0]="ASTC_4X4_RGBA",t[t.BC7_RGBA=1]="BC7_RGBA",t[t.BC3_RGBA=2]="BC3_RGBA",t[t.BC1_RGB=3]="BC1_RGB",t[t.PVRTC1_4_RGBA=4]="PVRTC1_4_RGBA",t[t.PVRTC1_4_RGB=5]="PVRTC1_4_RGB",t[t.ETC2_RGBA=6]="ETC2_RGBA",t[t.ETC1_RGB=7]="ETC1_RGB",t[t.RGBA32=8]="RGBA32",t[t.R8=9]="R8",t[t.RG8=10]="RG8",(i=n||(n={}))[i.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",i[i.COMPRESSED_RGBA_ASTC_4X4_KHR=37808]="COMPRESSED_RGBA_ASTC_4X4_KHR",i[i.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",i[i.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",i[i.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",i[i.RGBA8Format=32856]="RGBA8Format",i[i.R8Format=33321]="R8Format",i[i.RG8Format=33323]="RG8Format",e.s(["TranscodeTarget",0,o],19960);class m{static GetDefaultNumWorkers(){return"object"==typeof navigator&&navigator.hardwareConcurrency?Math.min(Math.floor(.5*navigator.hardwareConcurrency),4):1}static _Initialize(e){if(m._WorkerPoolPromise||m._DecoderModulePromise)return;let r={jsDecoderModule:d.Tools.GetBabylonScriptURL(this.URLConfig.jsDecoderModule,!0),wasmUASTCToASTC:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC,!0),wasmUASTCToBC7:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7,!0),wasmUASTCToRGBA_UNORM:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM,!0),wasmUASTCToRGBA_SRGB:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB,!0),wasmUASTCToR8_UNORM:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM,!0),wasmUASTCToRG8_UNORM:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM,!0),jsMSCTranscoder:d.Tools.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder,!0),wasmMSCTranscoder:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder,!0),wasmZSTDDecoder:d.Tools.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder,!0)};e&&"function"==typeof Worker&&"u">typeof URL?m._WorkerPoolPromise=new Promise(t=>{let i=`${u}(${p})()`,a=URL.createObjectURL(new Blob([i],{type:"application/javascript"}));t(new c(e,()=>{var e,t;return e=new Worker(a),t=void 0,new Promise((i,a)=>{let o=r=>{e.removeEventListener("error",o),e.removeEventListener("message",n),a(r)},n=r=>{"init"===r.data.action&&(e.removeEventListener("error",o),e.removeEventListener("message",n),i(e))};e.addEventListener("error",o),e.addEventListener("message",n),e.postMessage({action:"init",urls:r,wasmBinaries:t})})}))}):void 0===m._KTX2DecoderModule?m._DecoderModulePromise=d.Tools.LoadBabylonScriptAsync(r.jsDecoderModule).then(()=>(m._KTX2DecoderModule=KTX2DECODER,m._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread=!1,m._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread=!0,u(r,m._KTX2DecoderModule),new m._KTX2DecoderModule.KTX2Decoder)):(m._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread=!1,m._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread=!0,m._DecoderModulePromise=Promise.resolve(new m._KTX2DecoderModule.KTX2Decoder))}constructor(e,r=m.DefaultNumWorkers){this._engine=e;const t="object"==typeof r&&r.workerPool||m.WorkerPool;if(t)m._WorkerPoolPromise=Promise.resolve(t);else{"object"==typeof r?m._KTX2DecoderModule=r?.binariesAndModulesContainer?.jsDecoderModule:"u">typeof KTX2DECODER&&(m._KTX2DecoderModule=KTX2DECODER);const e="number"==typeof r?r:r.numWorkers??m.DefaultNumWorkers;m._Initialize(e)}}_uploadAsync(e,r,t){let i=this._engine.getCaps(),a={astc:!!i.astc,bptc:!!i.bptc,s3tc:!!i.s3tc,pvrtc:!!i.pvrtc,etc2:!!i.etc2,etc1:!!i.etc1};if(m._WorkerPoolPromise)return m._WorkerPoolPromise.then(i=>new Promise((o,n)=>{i.push((i,l)=>{let s=e=>{i.removeEventListener("error",s),i.removeEventListener("message",f),n(e),l()},f=e=>{if("decoded"===e.data.action){if(i.removeEventListener("error",s),i.removeEventListener("message",f),e.data.success)try{this._createTexture(e.data.decodedData,r,t),o()}catch(e){n({message:e})}else n({message:e.data.msg});l()}};i.addEventListener("error",s),i.addEventListener("message",f),i.postMessage({action:"setDefaultDecoderOptions",options:m.DefaultDecoderOptions._getKTX2DecoderOptions()});let c=new Uint8Array(e.byteLength);c.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),i.postMessage({action:"decode",data:c,caps:a,options:t},[c.buffer])})}));if(m._DecoderModulePromise)return m._DecoderModulePromise.then(t=>(m.DefaultDecoderOptions.isDirty&&(m._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions=m.DefaultDecoderOptions._getKTX2DecoderOptions()),new Promise((a,o)=>{t.decode(e,i).then(e=>{this._createTexture(e,r),a()}).catch(e=>{o({message:e})})})));throw Error("KTX2 decoder module is not available")}_createTexture(e,r,t){this._engine._bindTextureDirectly(3553,r),t&&(t.transcodedFormat=e.transcodedFormat,t.isInGammaSpace=e.isInGammaSpace,t.hasAlpha=e.hasAlpha,t.transcoderName=e.transcoderName);let i=!0;switch(e.transcodedFormat){case 32856:r.type=0,r.format=5;break;case 33321:r.type=0,r.format=6;break;case 33323:r.type=0,r.format=7;break;default:r.format=e.transcodedFormat,i=!1}if(r._gammaSpace=e.isInGammaSpace,r.generateMipMaps=e.mipmaps.length>1,e.errors)throw Error("KTX2 container - could not transcode the data. "+e.errors);for(let t=0;t<e.mipmaps.length;++t){let a=e.mipmaps[t];if(!a||!a.data)throw Error("KTX2 container - could not transcode one of the image");i?(r.width=a.width,r.height=a.height,this._engine._uploadDataToTextureDirectly(r,a.data,0,t,void 0,!0)):this._engine._uploadCompressedDataToTextureDirectly(r,e.transcodedFormat,a.width,a.height,a.data,0,t)}r._extension=".ktx2",r.width=e.mipmaps[0].width,r.height=e.mipmaps[0].height,r.isReady=!0,this._engine._bindTextureDirectly(3553,null)}static IsValid(e){if(e.byteLength>=12){let r=new Uint8Array(e.buffer,e.byteOffset,12);if(171===r[0]&&75===r[1]&&84===r[2]&&88===r[3]&&32===r[4]&&50===r[5]&&48===r[6]&&187===r[7]&&13===r[8]&&10===r[9]&&26===r[10]&&10===r[11])return!0}return!1}}m.URLConfig={jsDecoderModule:"https://cdn.babylonjs.com/babylon.ktx2Decoder.js",wasmUASTCToASTC:null,wasmUASTCToBC7:null,wasmUASTCToRGBA_UNORM:null,wasmUASTCToRGBA_SRGB:null,wasmUASTCToR8_UNORM:null,wasmUASTCToRG8_UNORM:null,jsMSCTranscoder:null,wasmMSCTranscoder:null,wasmZSTDDecoder:null},m.DefaultNumWorkers=m.GetDefaultNumWorkers(),m.DefaultDecoderOptions=new class{constructor(){this._isDirty=!0,this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC=!0,this._ktx2DecoderOptions={}}get isDirty(){return this._isDirty}get useRGBAIfASTCBC7NotAvailableWhenUASTC(){return this._useRGBAIfASTCBC7NotAvailableWhenUASTC}set useRGBAIfASTCBC7NotAvailableWhenUASTC(e){this._useRGBAIfASTCBC7NotAvailableWhenUASTC!==e&&(this._useRGBAIfASTCBC7NotAvailableWhenUASTC=e,this._isDirty=!0)}get useRGBAIfOnlyBC1BC3AvailableWhenUASTC(){return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC}set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(e){this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC!==e&&(this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC=e,this._isDirty=!0)}get forceRGBA(){return this._forceRGBA}set forceRGBA(e){this._forceRGBA!==e&&(this._forceRGBA=e,this._isDirty=!0)}get forceR8(){return this._forceR8}set forceR8(e){this._forceR8!==e&&(this._forceR8=e,this._isDirty=!0)}get forceRG8(){return this._forceRG8}set forceRG8(e){this._forceRG8!==e&&(this._forceRG8=e,this._isDirty=!0)}get bypassTranscoders(){return this._bypassTranscoders}set bypassTranscoders(e){this._bypassTranscoders!==e&&(this._bypassTranscoders=e,this._isDirty=!0)}_getKTX2DecoderOptions(){if(!this._isDirty)return this._ktx2DecoderOptions;this._isDirty=!1;let e={useRGBAIfASTCBC7NotAvailableWhenUASTC:this._useRGBAIfASTCBC7NotAvailableWhenUASTC,forceRGBA:this._forceRGBA,forceR8:this._forceR8,forceRG8:this._forceRG8,bypassTranscoders:this._bypassTranscoders};return this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC&&(e.transcodeFormatDecisionTree={UASTC:{transcodeFormat:[o.BC1_RGB,o.BC3_RGBA],yes:{transcodeFormat:o.RGBA32,engineFormat:32856,roundToMultiple4:!1}}}),this._ktx2DecoderOptions=e,e}},e.s(["KhronosTextureContainer2",0,m],48290),e.s(["_KTXTextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(e,r,t,i){if(Array.isArray(e))return;r._invertVScale=!r.invertY;let a=r.getEngine(),o=new s(e,6),n=o.numberOfMipmapLevels>1&&r.generateMipMaps;a._unpackFlipY(!0),o.uploadLevels(r,r.generateMipMaps),r.width=o.pixelWidth,r.height=o.pixelHeight,a._setCubeMapTextureParams(r,n,o.numberOfMipmapLevels-1),r.isReady=!0,r.onLoadedObservable.notifyObservers(r),r.onLoadedObservable.clear(),i&&i()}loadData(e,r,t,i){if(s.IsValid(e)){r._invertVScale=!r.invertY;let i=new s(e,1),a=function(e){switch(e){case 35916:return 33776;case 35918:return 33778;case 35919:return 33779;case 37493:return 37492;case 37497:return 37496;case 37495:return 37494;case 37840:return 37808;case 36493:return 36492}return null}(i.glInternalFormat);a?(r.format=a,r._useSRGBBuffer=r.getEngine()._getUseSRGBBuffer(!0,r.generateMipMaps),r._gammaSpace=!0):r.format=i.glInternalFormat,t(i.pixelWidth,i.pixelHeight,r.generateMipMaps,!0,()=>{i.uploadLevels(r,r.generateMipMaps)},i.isInvalid)}else m.IsValid(e)?new m(r.getEngine())._uploadAsync(e,r,i).then(()=>{t(r.width,r.height,r.generateMipMaps,!0,()=>{},!1)},e=>{l.Logger.Warn(`Failed to load KTX2 texture data: ${e.message}`),t(0,0,!1,!1,()=>{},!0)}):(l.Logger.Error("texture missing KTX identifier"),t(0,0,!1,!1,()=>{},!0))}}],72096)},75853,e=>{"use strict";let r;var t=e.i(53523),i=e.i(67722),a=e.i(2089),o=e.i(70733);let n=null;async function l(){return n||(n=new Promise((i,a)=>{let n,l=null,s={preserveDrawingBuffer:!0,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!1,antialias:!1,failIfMajorPerformanceCaveat:!1};e.A(79833).then(({ThinEngine:f})=>{let c=o.EngineStore.Instances.length;try{n=new OffscreenCanvas(100,100),l=new f(n,!1,s)}catch(e){c<o.EngineStore.Instances.length&&o.EngineStore.Instances.pop()?.dispose(),l=new f(n=document.createElement("canvas"),!1,s)}o.EngineStore.Instances.pop(),o.EngineStore.OnEnginesDisposedObservable.add(e=>{l&&e!==l&&!l.isDisposed&&0===o.EngineStore.Instances.length&&d()}),l.getCaps().parallelShaderCompile=void 0;let u=new t.EffectRenderer(l);e.A(40327).then(({passPixelShader:e})=>{if(!l)return void a("Engine is not defined");let o=new t.EffectWrapper({engine:l,name:e.name,fragmentShader:e.shader,samplerNames:["textureSampler"]});i(r={canvas:n,engine:l,renderer:u,wrapper:o})})}).catch(a)})),await n}async function s(e,r,t,i,a="image/png",o,n){let l=new Uint8Array((await t.readPixels(0,0,e,r)).buffer);c(e,r,l,i,a,o,!0,void 0,n)}function f(e,r,t,i="image/png",a,o=!1,n=!1,l){return new Promise(s=>{c(e,r,t,e=>s(e),i,a,o,n,l)})}function c(e,r,t,o,n="image/png",s,f=!1,d=!1,u){l().then(l=>{if(l.engine.setSize(e,r,!0),t instanceof Float32Array){let e=new Uint8Array(t.length),r=t.length;for(;r--;){let i=t[r];e[r]=Math.round(255*(0,a.Clamp)(i))}t=e}let c=l.engine.createRawTexture(t,e,r,5,!1,!f,1);l.renderer.setViewport(),l.renderer.applyEffectWrapper(l.wrapper),l.wrapper.effect._bindTexture("textureSampler",c),l.renderer.draw(),d?i.Tools.ToBlob(l.canvas,e=>{let r=new FileReader;r.onload=e=>{let r=e.target.result;o&&o(r)},r.readAsArrayBuffer(e)},n,u):i.Tools.EncodeScreenshotCanvasData(l.canvas,o,n,s,u),c.dispose()})}function d(){r?(r.wrapper.dispose(),r.renderer.dispose(),r.engine.dispose()):n?.then(e=>{e.wrapper.dispose(),e.renderer.dispose(),e.engine.dispose()}),n=null,r=null}i.Tools.DumpData=c,i.Tools.DumpDataAsync=f,i.Tools.DumpFramebuffer=s,e.s(["Dispose",0,d,"DumpData",0,c,"DumpDataAsync",0,f,"DumpFramebuffer",0,s,"DumpTools",0,{DumpData:c,DumpDataAsync:f,DumpFramebuffer:s,Dispose:d}])},48032,41445,21337,1882,e=>{"use strict";var r=e.i(67722),t=e.i(52656),i=e.i(2089),a=e.i(43454),o=e.i(44034),n=e.i(82873),l=(e.i(31137),e.i(53184)),s=e.i(52898),f=e.i(62299);class c{static ExpandRGBDTexture(r){let t=r._texture;if(!t||!r.isRGBD)return;let i=t.getEngine(),a=i.getCaps(),o=t.isReady,n=!1;a.textureHalfFloatRender&&a.textureHalfFloatLinearFiltering?(n=!0,t.type=2):a.textureFloatRender&&a.textureFloatLinearFiltering&&(n=!0,t.type=1),n&&(t.isReady=!1,t._isRGBD=!1,t.invertY=!1);let s=async()=>{let a=i.isWebGPU;t.isReady=!1,a?await e.A(37007):await e.A(7783);let o=new l.PostProcess("rgbdDecode","rgbdDecode",null,null,1,null,3,i,!1,void 0,t.type,void 0,null,!1,void 0,+!!a);o.externalTextureSamplerBinding=!0;let n=i.createRenderTargetTexture(t.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:t.samplingMode,type:t.type,format:5});o.onEffectCreatedObservable.addOnce(e=>{e.executeWhenCompiled(()=>{o.onApply=e=>{e._bindTexture("textureSampler",t),e.setFloat2("scale",1,1)},r.getScene().postProcessManager.directRender([o],n,!0),i.restoreDefaultFramebuffer(),i._releaseTexture(t),o&&o.dispose(),n._swapAndDie(t),t.isReady=!0})})};n&&(o?s():r.onLoadObservable.addOnce(s))}static async EncodeTextureToRGBD(r,t,i=0){return t.getEngine().isWebGPU?await e.A(5359):await e.A(94173),(0,f.ApplyPostProcess)("rgbdEncode",r,t,i,1,5)}}e.s(["RGBDTextureTools",0,c],41445);var d=e.i(75853),u=e.i(15060);n.BaseTexture.prototype.forceSphericalPolynomialsRecompute=function(){this._texture&&(this._texture._sphericalPolynomial=null,this._texture._sphericalPolynomialPromise=null,this._texture._sphericalPolynomialComputed=!1)},Object.defineProperty(n.BaseTexture.prototype,"sphericalPolynomial",{get:function(){if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;this._texture.isReady&&(this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=u.CubeMapToSphericalPolynomialTools.ConvertCubeMapTextureToSphericalPolynomial(this),null===this._texture._sphericalPolynomialPromise?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(e=>{this._texture._sphericalPolynomial=e,this._texture._sphericalPolynomialComputed=!0})))}return null},set:function(e){this._texture&&(this._texture._sphericalPolynomial=e)},enumerable:!0,configurable:!0}),e.s([],21337);let p="image/png",m=[134,22,135,150,246,214,150,54];function v(e){let r=new DataView(e.buffer,e.byteOffset,e.byteLength),t=0;for(let e=0;e<m.length;e++)if(r.getUint8(t++)!==m[e])return s.Logger.Error("Not a babylon environment map"),null;let i="",a=0;for(;a=r.getUint8(t++);)i+=String.fromCharCode(a);let o=JSON.parse(i);return(o=S(o)).binaryDataPosition=t,o.specular&&(o.specular.lodGenerationScale=o.specular.lodGenerationScale||.8),o}function S(e){if(e.version>2)throw Error(`Unsupported babylon environment map version "${e.version}". Latest supported version is "2".`);return 2===e.version?e:e={...e,version:2,imageType:p}}function h(e,r){let t=(r=S(r)).specular,i=Math.log2(r.width);if(i=Math.round(i)+1,t.mipmaps.length!==6*i)throw Error(`Unsupported specular mipmaps number "${t.mipmaps.length}"`);let a=Array(i);for(let o=0;o<i;o++){a[o]=Array(6);for(let i=0;i<6;i++){let n=t.mipmaps[6*o+i];a[o][i]=new Uint8Array(e.buffer,e.byteOffset+r.binaryDataPosition+n.position,n.length)}}return a}function x(e,r,t){let i=(t=S(t)).specular;if(!i)return Promise.resolve([]);e._lodGenerationScale=i.lodGenerationScale;let a=[],o=h(r,t);a.push(E(e,o,t.imageType));let n=t.irradiance?.irradianceTexture;if(n){let i=function(e,r){r=S(r);let t=Array(6),i=r.irradiance?.irradianceTexture;if(i){if(6!==i.faces.length)throw Error(`Incorrect irradiance texture faces number "${i.faces.length}"`);for(let a=0;a<6;a++){let o=i.faces[a];t[a]=new Uint8Array(e.buffer,e.byteOffset+r.binaryDataPosition+o.position,o.length)}}return t}(r,t);a.push(_(e,i,n.size,t.imageType))}return Promise.all(a)}function g(e,r,t,i,a,o,n,l,s,f,c){return new Promise((d,u)=>{if(t){let t=r.createTexture(null,!0,!0,null,1,null,e=>{u(e)},e);i?.onEffectCreatedObservable.addOnce(l=>{l.executeWhenCompiled(()=>{i.externalTextureSamplerBinding=!0,i.onApply=i=>{i._bindTexture("textureSampler",t),i.setFloat2("scale",1,r._features.needsInvertingBitmap&&e instanceof ImageBitmap?-1:1)},r.scenes.length&&(r.scenes[0].postProcessManager.directRender([i],f,!0,o,n),r.restoreDefaultFramebuffer(),t.dispose(),URL.revokeObjectURL(a),d())})})}else{if(r._uploadImageToTexture(c,e,o,n),l){let t=s[n];t&&r._uploadImageToTexture(t._texture,e,o,0)}d()}})}async function E(e,r,t=p){let i=e.getEngine();e.format=5,e.type=0,e.generateMipMaps=!0,e._cachedAnisotropicFilteringLevel=null,i.updateTextureSamplingMode(3,e),await T(e,r,!0,t),e.isReady=!0}async function _(e,r,t,i=p){let a=e.getEngine(),l=new o.InternalTexture(a,5);e._irradianceTexture=new n.BaseTexture(a,l),l.isCube=!0,l.format=5,l.type=0,l.generateMipMaps=!0,l._cachedAnisotropicFilteringLevel=null,l.generateMipMaps=!0,l.width=t,l.height=t,a.updateTextureSamplingMode(3,l),await T(l,[r],!1,i),a.generateMipMapsForCubemap(l),l.isReady=!0}async function T(t,a,s,f=p){if(!r.Tools.IsExponentOfTwo(t.width))throw Error("Texture size must be a power of two");let c=(0,i.ILog2)(t.width)+1,d=t.getEngine(),u=!1,m=!1,v=null,S=null,h=null,x=d.getCaps();x.textureLOD?d._features.supportRenderAndCopyToLodForFloatTextures?x.textureHalfFloatRender&&x.textureHalfFloatLinearFiltering?(u=!0,t.type=2):x.textureFloatRender&&x.textureFloatLinearFiltering&&(u=!0,t.type=1):u=!1:(u=!1,m=s);let E=0;if(u)d.isWebGPU?(E=1,await e.A(37007)):await e.A(7783),v=new l.PostProcess("rgbdDecode","rgbdDecode",null,null,1,null,3,d,!1,void 0,t.type,void 0,null,!1,void 0,E),t._isRGBD=!1,t.invertY=!1,S=d.createRenderTargetCubeTexture(t.width,{generateDepthBuffer:!1,generateMipMaps:!0,generateStencilBuffer:!1,samplingMode:3,type:t.type,format:5});else if(t._isRGBD=!0,t.invertY=!0,m){h={};let e=t._lodGenerationScale,r=t._lodGenerationOffset;for(let i=0;i<3;i++){let a=(c-1)*e+r,l=Math.round(Math.min(Math.max(r+(a-r)*(1-i/2),0),a)),s=new o.InternalTexture(d,2);s.isCube=!0,s.invertY=!0,s.generateMipMaps=!1,d.updateTextureSamplingMode(2,s);let f=new n.BaseTexture(null);switch(f._isCube=!0,f._texture=s,h[l]=f,i){case 0:t._lodTextureLow=f;break;case 1:t._lodTextureMid=f;break;case 2:t._lodTextureHigh=f}}}let _=[];for(let e=0;e<a.length;e++)for(let r=0;r<6;r++){let i,o=new Blob([a[e][r]],{type:f}),n=URL.createObjectURL(o);if(d._features.forceBitmapOverHTMLImageElement)i=d.createImageBitmap(o,{premultiplyAlpha:"none"}).then(i=>g(i,d,u,v,n,r,e,m,h,S,t));else{let a=new Image;a.src=n,i=new Promise((i,o)=>{a.onload=()=>{g(a,d,u,v,n,r,e,m,h,S,t).then(()=>i()).catch(e=>{o(e)})},a.onerror=e=>{o(e)}})}_.push(i)}if(await Promise.all(_),a.length<c){let e,r=Math.pow(2,c-1-a.length),i=r*r*4;switch(t.type){case 0:e=new Uint8Array(i);break;case 2:e=new Uint16Array(i);break;case 1:e=new Float32Array(i)}for(let r=a.length;r<c;r++)for(let i=0;i<6;i++)d._uploadArrayBufferViewToTexture(S?.texture||t,e,i,r)}if(S){let e=t._irradianceTexture;t._irradianceTexture=null,d._releaseTexture(t),S._swapAndDie(t),t._irradianceTexture=e}v&&v.dispose(),m&&(t._lodTextureHigh&&t._lodTextureHigh._texture&&(t._lodTextureHigh._texture.isReady=!0),t._lodTextureMid&&t._lodTextureMid._texture&&(t._lodTextureMid._texture.isReady=!0),t._lodTextureLow&&t._lodTextureLow._texture&&(t._lodTextureLow._texture.isReady=!0))}function I(e,r){let i=(r=S(r)).irradiance;if(!i)return;let o=new a.SphericalPolynomial;t.Vector3.FromArrayToRef(i.x,0,o.x),t.Vector3.FromArrayToRef(i.y,0,o.y),t.Vector3.FromArrayToRef(i.z,0,o.z),t.Vector3.FromArrayToRef(i.xx,0,o.xx),t.Vector3.FromArrayToRef(i.yy,0,o.yy),t.Vector3.FromArrayToRef(i.zz,0,o.zz),t.Vector3.FromArrayToRef(i.yz,0,o.yz),t.Vector3.FromArrayToRef(i.zx,0,o.zx),t.Vector3.FromArrayToRef(i.xy,0,o.xy),e._sphericalPolynomial=o}e.s(["CreateRadianceImageDataArrayBufferViews",0,h,"GetEnvInfo",0,v,"UploadEnvLevelsAsync",0,x,"UploadEnvSpherical",0,I,"_UpdateRGBDAsync",0,function(e,r,t,i,a){let o=E(e.getEngine().createRawCubeTexture(null,e.width,e.format,e.type,e.generateMipMaps,e.invertY,e.samplingMode,e._compression),r).then(()=>e);return e.onRebuildCallback=e=>({proxy:o,isReady:!0,isAsync:!0}),e._source=13,e._bufferViewArrayArray=r,e._lodGenerationScale=i,e._lodGenerationOffset=a,e._sphericalPolynomial=t,E(e,r).then(()=>(e.isReady=!0,e))}],1882),e.s(["_ENVTextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(e,r,t,i,a){if(Array.isArray(e))return;let o=v(e);if(o){r.width=o.width,r.height=o.width;try{I(r,o),x(r,e,o).then(()=>{r.isReady=!0,r.onLoadedObservable.notifyObservers(r),r.onLoadedObservable.clear(),i&&i()},e=>{a?.("Can not upload environment levels",e)})}catch(e){a?.("Can not upload environment file",e)}}else a&&a("Can not parse the environment file",null)}loadData(){throw".env not supported in 2d."}}],48032)},48249,e=>{"use strict";e.s(["StorageBuffer",0,class{constructor(e,r,t=3,i){this._engine=e,this._label=i,this._engine._storageBuffers.push(this),this._create(r,t)}_create(e,r){this._bufferSize=e,this._creationFlags=r,this._buffer=this._engine.createStorageBuffer(e,r,this._label)}_rebuild(){this._create(this._bufferSize,this._creationFlags)}getBuffer(){return this._buffer}update(e,r,t){this._buffer&&this._engine.updateStorageBuffer(this._buffer,e,r,t)}read(e,r,t,i){return this._engine.readFromStorageBuffer(this._buffer,e,r,t,i)}dispose(){let e=this._engine._storageBuffers,r=e.indexOf(this);-1!==r&&(e[r]=e[e.length-1],e.pop()),this._engine._releaseBuffer(this._buffer),this._buffer=null}}])},64232,34388,e=>{"use strict";var r=e.i(39715),t=e.i(35081),i=e.i(14762),a=e.i(99839),o=e.i(58328),n=e.i(96910),l=e.i(52898),s=e.i(530),f=e.i(58383);class c{constructor(){this._gpuTimeInFrameId=-1,this.counter=new f.PerfCounter}_addDuration(e,r){e<this._gpuTimeInFrameId||(this._gpuTimeInFrameId!==e?(this.counter._fetchResult(),this.counter.fetchNewFrame(),this.counter.addCount(r,!1),this._gpuTimeInFrameId=e):this.counter.addCount(r,!1))}}e.s(["WebGPUPerfCounter",0,c],34388);var d=e.i(97674);class u{get options(){return this._options}get shaderPath(){return this._shaderPath}constructor(e,r,t,i={}){if(this._bindings={},this._samplers={},this._contextIsDirty=!1,this.fastMode=!1,this.onCompiled=null,this.onError=null,this.name=e,this._engine=r,this.uniqueId=n.UniqueIdGenerator.UniqueId,r.enableGPUTimingMeasurements&&(this.gpuTimeInFrame=new c),!this._engine.getCaps().supportComputeShaders)return void l.Logger.Error("This engine does not support compute shaders!");if(!i.bindingsMapping)return void l.Logger.Error("You must provide the binding mappings as browsers don't support reflection for wgsl shaders yet!");this._context=r.createComputeContext(),this._shaderPath=t,this._options={bindingsMapping:{},defines:[],...i}}getClassName(){return"ComputeShader"}setTexture(e,r,t=!0){let i=this._bindings[e];this._bindings[e]={type:4*!t,object:r,indexInGroupEntries:i?.indexInGroupEntries},this._contextIsDirty||(this._contextIsDirty=!i||i.object!==r||i.type!==this._bindings[e].type)}setStorageTexture(e,r){let t=this._bindings[e];this._contextIsDirty||(this._contextIsDirty=!t||t.object!==r),this._bindings[e]={type:1,object:r,indexInGroupEntries:t?.indexInGroupEntries}}setExternalTexture(e,r){let t=this._bindings[e];this._contextIsDirty||(this._contextIsDirty=!t||t.object!==r),this._bindings[e]={type:6,object:r,indexInGroupEntries:t?.indexInGroupEntries}}setVideoTexture(e,r){return!!r.externalTexture&&(this.setExternalTexture(e,r.externalTexture),!0)}setUniformBuffer(e,r){let t=this._bindings[e];this._contextIsDirty||(this._contextIsDirty=!t||t.object!==r),this._bindings[e]={type:u._BufferIsDataBuffer(r)?7:2,object:r,indexInGroupEntries:t?.indexInGroupEntries}}setStorageBuffer(e,r){let t=this._bindings[e];this._contextIsDirty||(this._contextIsDirty=!t||t.object!==r),this._bindings[e]={type:u._BufferIsDataBuffer(r)?7:3,object:r,indexInGroupEntries:t?.indexInGroupEntries}}setTextureSampler(e,r){let t=this._bindings[e];this._contextIsDirty||(this._contextIsDirty=!t||!r.compareSampler(t.object)),this._bindings[e]={type:5,object:r,indexInGroupEntries:t?.indexInGroupEntries}}isReady(){let e=this._effect;for(let e in this._bindings){let r=this._bindings[e],t=r.type,i=r.object;switch(t){case 0:case 4:case 1:case 6:if(!i.isReady())return!1}}let r=[],t=this._shaderPath;if(this._options.defines)for(let e=0;e<this._options.defines.length;e++)r.push(this._options.defines[e]);let i=r.join("\n");return this._cachedDefines!==i&&(this._cachedDefines=i,e=this._engine.createComputeEffect(t,{defines:i,entryPoint:this._options.entryPoint,onCompiled:this.onCompiled,onError:this.onError}),this._effect=e),!!e.isReady()}dispatch(e,r,t){return(!!this.fastMode||!!this._checkContext())&&(this._engine.computeDispatch(this._effect,this._context,this._bindings,e,r,t,this._options.bindingsMapping,this.gpuTimeInFrame),!0)}dispatchIndirect(e,r=0){if(!this.fastMode&&!this._checkContext())return!1;let t=u._BufferIsDataBuffer(e)?e:e.getBuffer();return this._engine.computeDispatchIndirect(this._effect,this._context,this._bindings,t,r,this._options.bindingsMapping,this.gpuTimeInFrame),!0}_checkContext(){if(!this.isReady())return!1;for(let e in this._bindings){let r=this._bindings[e];if(!this._options.bindingsMapping[e])throw Error("ComputeShader ('"+this.name+"'): No binding mapping has been provided for the property '"+e+"'");switch(r.type){case 0:{let t=this._samplers[e],i=r.object;t&&i._texture&&t.compareSampler(i._texture)||(this._samplers[e]=new s.TextureSampler().setParameters(i.wrapU,i.wrapV,i.wrapR,i.anisotropicFilteringLevel,i._texture.samplingMode,i._texture?._comparisonFunction),this._contextIsDirty=!0);break}case 6:this._contextIsDirty=!0;break;case 2:{let e=r.object;e.getBuffer()!==r.buffer&&(r.buffer=e.getBuffer(),this._contextIsDirty=!0)}}}return this._contextIsDirty&&(this._contextIsDirty=!1,this._context.clear()),!0}dispatchWhenReady(e,r,t,i=10){return new Promise(a=>{(0,d._retryWithInterval)(()=>this.dispatch(e,r,t),a,void 0,i)})}serialize(){let e=i.SerializationHelper.Serialize(this);for(let r in e.options=this._options,e.shaderPath=this._shaderPath,e.bindings={},e.textures={},this._bindings){let t=this._bindings[r],i=t.object;switch(t.type){case 0:case 4:case 1:{let a=i.serialize();a&&(e.textures[r]=a,e.bindings[r]={type:t.type})}}}return e}static Parse(e,r,t){let a=i.SerializationHelper.Parse(()=>new u(e.name,r.getEngine(),e.shaderPath,e.options),e,r,t);for(let i in e.textures){let n=e.bindings[i],l=o.Texture.Parse(e.textures[i],r,t);0===n.type?a.setTexture(i,l):4===n.type?a.setTexture(i,l,!1):a.setStorageTexture(i,l)}return a}static _BufferIsDataBuffer(e){return void 0!==e.underlyingResource}}(0,r.__decorate)([(0,t.serialize)()],u.prototype,"name",void 0),(0,r.__decorate)([(0,t.serialize)()],u.prototype,"fastMode",void 0),(0,a.RegisterClass)("BABYLON.ComputeShader",u),e.s(["ComputeShader",0,u],64232)},31466,e=>{"use strict";var r=e.i(64232),t=e.i(48249),i=e.i(18422),a=e.i(52656),o=e.i(67091),n=e.i(33967);let l="boundingInfoComputeShader",s=`struct Results {minX : atomic<i32>,
minY : atomic<i32>,
minZ : atomic<i32>,
maxX : atomic<i32>,
maxY : atomic<i32>,
maxZ : atomic<i32>,
dummy1 : i32,
dummy2 : i32,};fn floatToBits(value: f32)->i32 {return bitcast<i32>(value);}
fn bitsToFloat(value: i32)->f32 {return bitcast<f32>(value);}
fn atomicMinFloat(atomicVar: ptr<storage,atomic<i32>,read_write>,value: f32) {let intValue=floatToBits(value);loop {let oldIntValue=atomicLoad(atomicVar);let oldValue=bitsToFloat(oldIntValue);if (value>=oldValue) {break;}
if (atomicCompareExchangeWeak(atomicVar,oldIntValue,intValue).old_value==oldIntValue) {break;}}}
fn atomicMaxFloat(atomicVar: ptr<storage,atomic<i32>,read_write>,value: f32) {let intValue=floatToBits(value);loop {let oldIntValue=atomicLoad(atomicVar);let oldValue=bitsToFloat(oldIntValue);if (value<=oldValue) {break;}
if (atomicCompareExchangeWeak(atomicVar,oldIntValue,intValue).old_value==oldIntValue) {break;}}}
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4<f32>
{let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);return mat4x4<f32>(m0,m1,m2,m3);}
const identity=mat4x4f(
vec4f(1.0,0.0,0.0,0.0),
vec4f(0.0,1.0,0.0,0.0),
vec4f(0.0,0.0,1.0,0.0),
vec4f(0.0,0.0,0.0,1.0)
);struct Settings {morphTargetTextureInfo: vec3f,
morphTargetCount: i32,
indexResult : u32,};@group(0) @binding(0) var<storage,read> positionBuffer : array<f32>;@group(0) @binding(1) var<storage,read_write> resultBuffer : array<Results>;@group(0) @binding(7) var<uniform> settings : Settings;
#if NUM_BONE_INFLUENCERS>0
@group(0) @binding(2) var boneSampler : texture_2d<f32>;@group(0) @binding(3) var<storage,read> indexBuffer : array<vec4f>;@group(0) @binding(4) var<storage,read> weightBuffer : array<vec4f>;
#if NUM_BONE_INFLUENCERS>4
@group(0) @binding(5) var<storage,read> indexExtraBuffer : array<vec4f>;@group(0) @binding(6) var<storage,read> weightExtraBuffer : array<vec4f>;
#endif
#endif
#ifdef MORPHTARGETS
@group(0) @binding(8) var morphTargets : texture_2d_array<f32>;@group(0) @binding(9) var<storage,read> morphTargetInfluences : array<f32>;@group(0) @binding(10) var<storage,read> morphTargetTextureIndices : array<f32>;
#endif
#ifdef MORPHTARGETS
fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : u32)->vec3f
{ 
let vertexID=f32(vertexIndex)*settings.morphTargetTextureInfo.x;let y=floor(vertexID/settings.morphTargetTextureInfo.y);let x=vertexID-y*settings.morphTargetTextureInfo.y;let textureUV=vec2<i32>(i32(x),i32(y));return textureLoad(morphTargets,textureUV,i32(morphTargetTextureIndices[targetIndex]),0).xyz;}
fn readVector4FromRawSampler(targetIndex : i32,vertexIndex : u32)->vec4f
{ 
let vertexID=f32(vertexIndex)*settings.morphTargetTextureInfo.x;let y=floor(vertexID/settings.morphTargetTextureInfo.y);let x=vertexID-y*settings.morphTargetTextureInfo.y;let textureUV=vec2<i32>(i32(x),i32(y));return textureLoad(morphTargets,textureUV,i32(morphTargetTextureIndices[targetIndex]),0);}
#endif
@compute @workgroup_size(256,1,1)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {let index=global_id.x;if (index>=arrayLength(&positionBuffer)/3) {return;}
let position=vec3f(positionBuffer[index*3],positionBuffer[index*3+1],positionBuffer[index*3+2]);var finalWorld=identity;var positionUpdated=position;
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;let matricesIndices=indexBuffer[index];let matricesWeights=weightBuffer[index];influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
let matricesIndicesExtra=indexExtraBuffer[index];let matricesWeightsExtra=weightExtraBuffer[index];influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.x)*matricesWeightsExtra.x;
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.y)*matricesWeightsExtra.y;
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.z)*matricesWeightsExtra.z;
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.w)*matricesWeightsExtra.w;
#endif 
#endif 
finalWorld=finalWorld*influence;
#endif
#ifdef MORPHTARGETS
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (i>=settings.morphTargetCount) {break;}
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,index)-position)*morphTargetInfluences[i];}
#endif
var worldPos=finalWorld*vec4f(positionUpdated.x,positionUpdated.y,positionUpdated.z,1.0);atomicMinFloat(&resultBuffer[settings.indexResult].minX,worldPos.x);atomicMinFloat(&resultBuffer[settings.indexResult].minY,worldPos.y);atomicMinFloat(&resultBuffer[settings.indexResult].minZ,worldPos.z);atomicMaxFloat(&resultBuffer[settings.indexResult].maxX,worldPos.x);atomicMaxFloat(&resultBuffer[settings.indexResult].maxY,worldPos.y);atomicMaxFloat(&resultBuffer[settings.indexResult].maxZ,worldPos.z);}
`;n.ShaderStore.ShadersStoreWGSL[l]||(n.ShaderStore.ShadersStoreWGSL[l]=s);var f=e.i(97674);e.s(["ComputeShaderBoundingHelper",0,class{constructor(e){this._computeShadersCache={},this._positionBuffers={},this._indexBuffers={},this._weightBuffers={},this._indexExtraBuffers={},this._weightExtraBuffers={},this._morphTargetInfluenceBuffers={},this._morphTargetTextureIndexBuffers={},this._ubos=[],this._uboIndex=0,this._processedMeshes=[],this._computeShaders=[],this._uniqueComputeShaders=new Set,this._resultBuffers=[],this._engine=e}_getComputeShader(e,t,i){let a,o=e.join("\n");if(this._computeShadersCache[o])a=this._computeShadersCache[o];else{let n={positionBuffer:{group:0,binding:0},resultBuffer:{group:0,binding:1},settings:{group:0,binding:7}};t&&(n.boneSampler={group:0,binding:2},n.indexBuffer={group:0,binding:3},n.weightBuffer={group:0,binding:4},n.indexExtraBuffer={group:0,binding:5},n.weightExtraBuffer={group:0,binding:6}),i&&(n.morphTargets={group:0,binding:8},n.morphTargetInfluences={group:0,binding:9},n.morphTargetTextureIndices={group:0,binding:10}),a=new r.ComputeShader(`boundingInfoCompute${t?"_bones":""}${i?"_morphs":""}`,this._engine,"boundingInfo",{bindingsMapping:n,defines:e}),this._computeShadersCache[o]=a}return a}_getUBO(){if(this._uboIndex>=this._ubos.length){let e=new o.UniformBuffer(this._engine);e.addFloat3("morphTargetTextureInfo",0,0,0),e.addUniform("morphTargetCount",1),e.addUniform("indexResult",1),this._ubos.push(e)}return this._ubos[this._uboIndex++]}_extractDataAndLink(e,r,i,a,o,n){let l,s=r.getTotalVertices();if(n[r.uniqueId])l=n[r.uniqueId];else{let e=r.getVertexBuffer(i)?.getFloatData(s);(l=new t.StorageBuffer(this._engine,Float32Array.BYTES_PER_ELEMENT*s*a)).update(e),n[r.uniqueId]=l}e.setStorageBuffer(o,l)}_prepareStorage(e,r,i,a,o,n){let l;a[i]?l=a[i]:(l=new t.StorageBuffer(this._engine,Float32Array.BYTES_PER_ELEMENT*o),a[i]=l),l.update(n),e.setStorageBuffer(r,l)}async processAsync(e){await this.registerMeshListAsync(e),this.processMeshList(),await this.fetchResultsForMeshListAsync()}registerMeshListAsync(e){this._disposeForMeshList(),Array.isArray(e)||(e=[e]);let r=0;for(let t=0;t<e.length;t++){let a=e[t];if(0===a.getTotalVertices()||!a.getVertexBuffer||!a.getVertexBuffer(i.VertexBuffer.PositionKind))continue;this._processedMeshes.push(a);let o=a.morphTargetManager;o&&o.supportsPositions&&(r=Math.max(r,o.numTargets))}for(let e=0;e<this._processedMeshes.length;e++){let t=this._processedMeshes[e],i=[""],a=!1;t&&t.useBones&&t.computeBonesUsingShaders&&t.skeleton&&(i.push("#define NUM_BONE_INFLUENCERS "+t.numBoneInfluencers),a=!0);let o=this._getComputeShader(i,a,!1);this._uniqueComputeShaders.add(o);let n=t.morphTargetManager;if(n&&n.supportsPositions){(i=i.slice()).push("#define MORPHTARGETS"),i.push("#define NUM_MORPH_INFLUENCERS "+r);let e=this._getComputeShader(i,a,!0);this._uniqueComputeShaders.add(e),this._computeShaders.push([o,e])}else this._computeShaders.push([o,o]);let l=this._getUBO();l.updateUInt("indexResult",e),l.update()}return new Promise(e=>{(0,f._retryWithInterval)(()=>{let e=this._uniqueComputeShaders.keys();for(let r=e.next();!0!==r.done;r=e.next())if(!r.value.isReady())return!1;return!0},e)})}processMeshList(){if(0===this._processedMeshes.length)return;this._uboIndex=0;let e=8*this._processedMeshes.length,r=new Float32Array(e),a=new t.StorageBuffer(this._engine,Float32Array.BYTES_PER_ELEMENT*e);this._resultBuffers.push(a);for(let e=0;e<this._processedMeshes.length;e++)r[8*e+0]=1/0,r[8*e+1]=1/0,r[8*e+2]=1/0,r[8*e+3]=-1/0,r[8*e+4]=-1/0,r[8*e+5]=-1/0;a.update(r);for(let e=0;e<this._processedMeshes.length;e++){let r=this._processedMeshes[e],t=r.getTotalVertices(),[o,n]=this._computeShaders[e],l=r.morphTargetManager,s=l&&l.numInfluencers>0&&l.supportsPositions,f=s?n:o;if(this._extractDataAndLink(f,r,i.VertexBuffer.PositionKind,3,"positionBuffer",this._positionBuffers),r&&r.useBones&&r.computeBonesUsingShaders&&r.skeleton&&r.skeleton.useTextureToStoreBoneMatrices){this._extractDataAndLink(f,r,i.VertexBuffer.MatricesIndicesKind,4,"indexBuffer",this._indexBuffers),this._extractDataAndLink(f,r,i.VertexBuffer.MatricesWeightsKind,4,"weightBuffer",this._weightBuffers);let e=r.skeleton.getTransformMatrixTexture(r);f.setTexture("boneSampler",e,!1),r.numBoneInfluencers>4&&(this._extractDataAndLink(f,r,i.VertexBuffer.MatricesIndicesExtraKind,4,"indexExtraBuffer",this._indexExtraBuffers),this._extractDataAndLink(f,r,i.VertexBuffer.MatricesWeightsExtraKind,4,"weightExtraBuffer",this._weightExtraBuffers))}let c=this._getUBO();if(s){let e=l._targetStoreTexture;f.setTexture("morphTargets",e,!1),this._prepareStorage(f,"morphTargetInfluences",r.uniqueId,this._morphTargetInfluenceBuffers,l.numInfluencers,l.influences),this._prepareStorage(f,"morphTargetTextureIndices",r.uniqueId,this._morphTargetTextureIndexBuffers,l.numInfluencers,l._morphTargetTextureIndices),c.updateFloat3("morphTargetTextureInfo",l._textureVertexStride,l._textureWidth,l._textureHeight),c.updateInt("morphTargetCount",l.numInfluencers),c.update()}f.setStorageBuffer("resultBuffer",a),f.setUniformBuffer("settings",c),f.dispatch(Math.ceil(t/256)),this._engine.flushFramebuffer()}}fetchResultsForMeshListAsync(){return new Promise(e=>{let r=[],t=0;for(let e=0;e<this._resultBuffers.length;e++){let i=this._resultBuffers[e].getBuffer();r.push(i),t+=i.capacity}let i=new Float32Array(t/Float32Array.BYTES_PER_ELEMENT),o=a.Vector3.Zero(),n=a.Vector3.Zero(),l={minimum:o,maximum:n};this._engine.readFromMultipleStorageBuffers(r,0,void 0,i,!0).then(()=>{let r=0;for(let e=0;e<this._resultBuffers.length;e++){for(let t=0;t<this._processedMeshes.length;t++){let s=this._processedMeshes[t];a.Vector3.FromArrayToRef(i,r+8*t,o),a.Vector3.FromArrayToRef(i,r+8*t+3,n),e>0&&(o.minimizeInPlace(s.getBoundingInfo().minimum),n.maximizeInPlace(s.getBoundingInfo().maximum)),s._refreshBoundingInfoDirect(l)}r+=8*this._processedMeshes.length}for(let e of this._resultBuffers)e.dispose();this._resultBuffers=[],this._uboIndex=0,e()})})}_disposeCache(e){for(let r in e)e[r].dispose()}_disposeForMeshList(){for(let e of this._resultBuffers)e.dispose();this._resultBuffers=[],this._processedMeshes=[],this._computeShaders=[],this._uniqueComputeShaders=new Set}dispose(){for(let e of(this._disposeCache(this._positionBuffers),this._positionBuffers={},this._disposeCache(this._indexBuffers),this._indexBuffers={},this._disposeCache(this._weightBuffers),this._weightBuffers={},this._disposeCache(this._morphTargetInfluenceBuffers),this._morphTargetInfluenceBuffers={},this._disposeCache(this._morphTargetTextureIndexBuffers),this._morphTargetTextureIndexBuffers={},this._ubos))e.dispose();this._ubos=[],this._computeShadersCache={},this._engine=void 0,this._disposeForMeshList()}}],31466)},44897,92050,e=>{"use strict";var r=e.i(33967);e.i(84400),e.i(17463);let t="pbrUboDeclaration",i=`layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec2 vReflectionInfos;vec2 vReflectionFilteringInfo;vec3 vReflectionPosition;vec3 vReflectionSize;vec3 vBumpInfos;mat4 albedoMatrix;mat4 baseWeightMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 reflectivityMatrix;mat4 microSurfaceSamplerMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;mat4 reflectionMatrix;vec3 vReflectionColor;vec4 vAlbedoColor;float baseWeight;vec4 vLightingIntensity;vec3 vReflectionMicrosurfaceInfos;float pointSize;vec4 vReflectivityColor;vec3 vEmissiveColor;vec3 vAmbientColor;vec2 vDebugMode;vec4 vMetallicReflectanceFactors;vec2 vMetallicReflectanceInfos;mat4 metallicReflectanceMatrix;vec2 vReflectanceInfos;mat4 reflectanceMatrix;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([],44897);let a="harmonicsFunctions",o=`#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
vec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00
+ vSphericalL1_1*(normal.y)
+ vSphericalL10*(normal.z)
+ vSphericalL11*(normal.x)
+ vSphericalL2_2*(normal.y*normal.x)
+ vSphericalL2_1*(normal.y*normal.z)
+ vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ vSphericalL21*(normal.z*normal.x)
+ vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}
#else
vec3 computeEnvironmentIrradiance(vec3 normal) {float Nx=normal.x;float Ny=normal.y;float Nz=normal.z;vec3 C1=vSphericalZZ.rgb;vec3 Cx=vSphericalX.rgb;vec3 Cy=vSphericalY.rgb;vec3 Cz=vSphericalZ.rgb;vec3 Cxx_zz=vSphericalXX_ZZ.rgb;vec3 Cyy_zz=vSphericalYY_ZZ.rgb;vec3 Cxy=vSphericalXY.rgb;vec3 Cyz=vSphericalYZ.rgb;vec3 Czx=vSphericalZX.rgb;vec3 a1=Cyy_zz*Ny+Cy;vec3 a2=Cyz*Nz+a1;vec3 b1=Czx*Nz+Cx;vec3 b2=Cxy*Ny+b1;vec3 b3=Cxx_zz*Nx+b2;vec3 t1=Cz *Nz+C1;vec3 t2=a2 *Ny+t1;vec3 t3=b3 *Nx+t2;return t3;}
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o),e.s([],92050)},45315,36959,93298,54184,58420,84549,11020,85518,e=>{"use strict";var r=e.i(33967);let t="decalVertexDeclaration",i=`#ifdef DECAL
uniform vec4 vDecalInfos;uniform mat4 decalMatrix;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([],45315);let a="uvAttributeDeclaration",o=`#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o),e.s([],36959);let n="prePassVertexDeclaration",l=`#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform mat4 previousViewProjection;varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[n]||(r.ShaderStore.IncludesShadersStore[n]=l),e.s([],93298);let s="samplerVertexDeclaration",f=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;r.ShaderStore.IncludesShadersStore[s]||(r.ShaderStore.IncludesShadersStore[s]=f),e.s([],54184);let c="bumpVertexDeclaration",d=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[c]||(r.ShaderStore.IncludesShadersStore[c]=d),e.s([],58420);let u="prePassVertex",p=`#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#ifdef PREPASS_LOCAL_POSITION
vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[u]||(r.ShaderStore.IncludesShadersStore[u]=p),e.s([],84549);let m="uvVariableDeclaration",v=`#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;r.ShaderStore.IncludesShadersStore[m]||(r.ShaderStore.IncludesShadersStore[m]=v),e.s([],11020);let S="samplerVertexImplementation",h=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}
#ifdef UV2
else if (v_INFONAME_==1.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));}
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[S]||(r.ShaderStore.IncludesShadersStore[S]=h),e.s([],85518)},65763,e=>{"use strict";var r=e.i(33967);e.i(45315);let t="pbrVertexDeclaration",i=`uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
#ifdef ALBEDO
uniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;
#endif
#ifdef BASEWEIGHT
uniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec4 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;uniform mat4 reflectivityMatrix;
#endif
#ifdef METALLIC_REFLECTANCE
uniform vec2 vMetallicReflectanceInfos;uniform mat4 metallicReflectanceMatrix;
#endif
#ifdef REFLECTANCE
uniform vec2 vReflectanceInfos;uniform mat4 reflectanceMatrix;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;uniform mat4 microSurfaceSamplerMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#ifdef IRIDESCENCE
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(44897),e.i(36959),e.i(2522),e.i(13851),e.i(43434),e.i(10283),e.i(18178),e.i(93298),e.i(54184),e.i(92050),e.i(58420),e.i(26230),e.i(44371),e.i(75248),e.i(62741),e.i(18577),e.i(39102),e.i(24137),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754),e.i(84549),e.i(11020),e.i(85518),e.i(98698),e.i(7025),e.i(1141),e.i(34479),e.i(74391),e.i(3449);let a="pbrVertexShader",o=`#define CUSTOM_VERTEX_EXTENSION
precision highp float;
#include<__decl__pbrVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASEWEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)
#endif
varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);vPositionW=vec3(worldPos);
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
vec3 reflectionVector=vec3(reflectionMatrix*vec4(vNormalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vClipSpacePosition=gl_Position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2Updated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASEWEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["pbrVertexShader",0,{name:a,shader:o}],65763)},3240,89244,49603,e=>{"use strict";var r=e.i(2089),t=e.i(52898),i=e.i(15060),a=e.i(62299),o=e.i(44034),n=e.i(39059),l=e.i(63509),s=e.i(86223),f=e.i(35820);function c(e){let r=e.split("?")[0],t=r.lastIndexOf(".");return t>-1?r.substring(t).toLowerCase():""}function d(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}e.s(["GetExtensionFromUrl",0,c],89244),s.AbstractEngine.prototype._partialLoadFile=function(e,r,t,i,a=null){this._loadFile(e,e=>{t[r]=e,t._internalCount++,6===t._internalCount&&i(t)},void 0,void 0,!0,(e,r)=>{a&&e&&a(e.status+" "+e.statusText,r)})},s.AbstractEngine.prototype._cascadeLoadFiles=function(e,r,t,i=null){let a=[];a._internalCount=0;for(let e=0;e<6;e++)this._partialLoadFile(t[e],e,a,r,i)},s.AbstractEngine.prototype._cascadeLoadImgs=function(e,r,t,i,a=null,o){let n=[];n._internalCount=0;for(let l=0;l<6;l++)this._partialLoadImg(i[l],l,n,e,r,t,a,o)},s.AbstractEngine.prototype._partialLoadImg=function(e,r,t,i,a,o,s=null,f){let c=(0,l.RandomGUID)();(0,n.LoadImage)(e,e=>{t[r]=e,t._internalCount++,i&&i.removePendingData(c),6===t._internalCount&&o&&o(a,t)},(e,r)=>{i&&i.removePendingData(c),s&&s(e,r)},i?i.offlineProvider:null,f),i&&i.addPendingData(c)},s.AbstractEngine.prototype.createCubeTextureBase=function(e,r,i,a,n=null,l=null,s,d=null,u=!1,p=0,m=0,v=null,S=null,h=null,x=!1,g=null){let E=v||new o.InternalTexture(this,7);E.isCube=!0,E.url=e,E.generateMipMaps=!a,E._lodGenerationScale=p,E._lodGenerationOffset=m,E._useSRGBBuffer=!!x&&this._caps.supportSRGBBuffers&&(this.version>1||this.isWebGPU||!!a),E!==v&&(E.label=e.substring(0,60)),this._doNotHandleContextLost||(E._extension=d,E._files=i,E._buffer=g);let _=e;this._transformTextureUrl&&!v&&(e=this._transformTextureUrl(e));let T=d??c(e),I=(0,f._GetCompatibleTextureLoader)(T),C=(o,f)=>{e===_?l&&o&&l(o.status+" "+o.statusText,f):(t.Logger.Warn(`Failed to load ${e}, falling back to the ${_}`),this.createCubeTextureBase(_,r,i,!!a,n,l,s,d,u,p,m,E,S,h,x,g))};if(I)I.then(a=>{let o=e=>{S&&S(E,e),a.loadCubeData(e,E,u,n,l)};g?o(g):i&&6===i.length?a.supportCascades?this._cascadeLoadFiles(r,e=>o(e.map(e=>new Uint8Array(e))),i,l):l?l("Textures type does not support cascades."):t.Logger.Warn("Texture loader does not support cascades."):this._loadFile(e,e=>o(new Uint8Array(e)),void 0,void 0,!0,C)});else{if(!i||0===i.length)throw Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");this._cascadeLoadImgs(r,E,(e,r)=>{h&&h(e,r)},i,l)}return this._internalTexturesCache.push(E),E},e.s([],49603);let u=d("DXT1"),p=d("DXT3"),m=d("DXT5"),v=d("DX10");class S{static GetDDSInfo(e){let r=new Int32Array(e.buffer,e.byteOffset,31),t=new Int32Array(e.buffer,e.byteOffset,35),i=1;131072&r[2]&&(i=Math.max(1,r[7]));let a=r[21],o=a===v?t[32]:0,n=0;switch(a){case 113:n=2;break;case 116:n=1;break;case v:if(10===o){n=2;break}2===o&&(n=1)}return{width:r[4],height:r[3],mipmapCount:i,isFourCC:(4&r[20])==4,isRGB:(64&r[20])==64,isLuminance:(131072&r[20])==131072,isCube:(512&r[28])==512,isCompressed:a===u||a===p||a===m,dxgiFormat:o,textureType:n}}static _GetHalfFloatAsFloatRGBAArrayBuffer(e,r,t,i,o,n){let l=new Float32Array(i),s=new Uint16Array(o,t),f=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++){let i=(r+t*e)*4;l[f]=(0,a.FromHalfFloat)(s[i]),l[f+1]=(0,a.FromHalfFloat)(s[i+1]),l[f+2]=(0,a.FromHalfFloat)(s[i+2]),S.StoreLODInAlphaChannel?l[f+3]=n:l[f+3]=(0,a.FromHalfFloat)(s[i+3]),f+=4}return l}static _GetHalfFloatRGBAArrayBuffer(e,r,t,i,o,n){if(S.StoreLODInAlphaChannel){let l=new Uint16Array(i),s=new Uint16Array(o,t),f=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++){let i=(r+t*e)*4;l[f]=s[i],l[f+1]=s[i+1],l[f+2]=s[i+2],l[f+3]=(0,a.ToHalfFloat)(n),f+=4}return l}return new Uint16Array(o,t,i)}static _GetFloatRGBAArrayBuffer(e,r,t,i,a,o){if(S.StoreLODInAlphaChannel){let n=new Float32Array(i),l=new Float32Array(a,t),s=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++){let i=(r+t*e)*4;n[s]=l[i],n[s+1]=l[i+1],n[s+2]=l[i+2],n[s+3]=o,s+=4}return n}return new Float32Array(a,t,i)}static _GetFloatAsHalfFloatRGBAArrayBuffer(e,r,t,i,o,n){let l=new Uint16Array(i),s=new Float32Array(o,t),f=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++)l[f]=(0,a.ToHalfFloat)(s[f]),l[f+1]=(0,a.ToHalfFloat)(s[f+1]),l[f+2]=(0,a.ToHalfFloat)(s[f+2]),S.StoreLODInAlphaChannel?l[f+3]=(0,a.ToHalfFloat)(n):l[f+3]=(0,a.ToHalfFloat)(s[f+3]),f+=4;return l}static _GetFloatAsUIntRGBAArrayBuffer(e,t,i,a,o,n){let l=new Uint8Array(a),s=new Float32Array(o,i),f=0;for(let i=0;i<t;i++)for(let t=0;t<e;t++){let a=(t+i*e)*4;l[f]=255*(0,r.Clamp)(s[a]),l[f+1]=255*(0,r.Clamp)(s[a+1]),l[f+2]=255*(0,r.Clamp)(s[a+2]),S.StoreLODInAlphaChannel?l[f+3]=n:l[f+3]=255*(0,r.Clamp)(s[a+3]),f+=4}return l}static _GetHalfFloatAsUIntRGBAArrayBuffer(e,t,i,o,n,l){let s=new Uint8Array(o),f=new Uint16Array(n,i),c=0;for(let i=0;i<t;i++)for(let t=0;t<e;t++){let o=(t+i*e)*4;s[c]=255*(0,r.Clamp)((0,a.FromHalfFloat)(f[o])),s[c+1]=255*(0,r.Clamp)((0,a.FromHalfFloat)(f[o+1])),s[c+2]=255*(0,r.Clamp)((0,a.FromHalfFloat)(f[o+2])),S.StoreLODInAlphaChannel?s[c+3]=l:s[c+3]=255*(0,r.Clamp)((0,a.FromHalfFloat)(f[o+3])),c+=4}return s}static _GetRGBAArrayBuffer(e,r,t,i,a,o,n,l,s){let f=new Uint8Array(i),c=new Uint8Array(a,t),d=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++){let i=(r+t*e)*4;f[d]=c[i+o],f[d+1]=c[i+n],f[d+2]=c[i+l],f[d+3]=c[i+s],d+=4}return f}static _ExtractLongWordOrder(e){return 0===e||255===e||-0x1000000===e?0:1+S._ExtractLongWordOrder(e>>8)}static _GetRGBArrayBuffer(e,r,t,i,a,o,n,l){let s=new Uint8Array(i),f=new Uint8Array(a,t),c=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++){let i=(r+t*e)*3;s[c]=f[i+o],s[c+1]=f[i+n],s[c+2]=f[i+l],c+=3}return s}static _GetLuminanceArrayBuffer(e,r,t,i,a){let o=new Uint8Array(i),n=new Uint8Array(a,t),l=0;for(let t=0;t<r;t++)for(let r=0;r<e;r++){let i=r+t*e;o[l]=n[i],l++}return o}static UploadDDSLevels(e,r,a,o,n,l,s=-1,f,c=!0){let d,h,x,g=null;o.sphericalPolynomial&&(g=[]);let E=!!e.getCaps().s3tc;r.generateMipMaps=n;let _=new Int32Array(a.buffer,a.byteOffset,31),T,I,C,N=0,A,R=0,P=1;if(0x20534444!==_[0])return void t.Logger.Error("Invalid magic number in DDS header");if(!o.isFourCC&&!o.isRGB&&!o.isLuminance)return void t.Logger.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");if(o.isCompressed&&!E)return void t.Logger.Error("Compressed textures are not supported on this platform.");let y=_[22];A=_[1]+4;let M=!1;if(o.isFourCC)switch(T=_[21]){case u:P=8,R=33777;break;case p:P=16,R=33778;break;case m:P=16,R=33779;break;case 113:M=!0,y=64;break;case 116:M=!0,y=128;break;case v:{A+=20;let e=!1;switch(o.dxgiFormat){case 10:M=!0,y=64,e=!0;break;case 2:M=!0,y=128,e=!0;break;case 88:o.isRGB=!0,o.isFourCC=!1,y=32,e=!0}if(e)break}default:t.Logger.Error(["Unsupported FourCC code:",String.fromCharCode(255&T,T>>8&255,T>>16&255,T>>24&255)]);return}let D=S._ExtractLongWordOrder(_[23]),F=S._ExtractLongWordOrder(_[24]),O=S._ExtractLongWordOrder(_[25]),V=S._ExtractLongWordOrder(_[26]);M&&(R=e._getRGBABufferInternalSizedFormat(o.textureType)),h=1,131072&_[2]&&!1!==n&&(h=Math.max(1,_[7]));let b=f||0,L=e.getCaps();for(let t=b;t<l;t++){for(x=0,I=_[4],C=_[3];x<h;++x){if(-1===s||s===x){let i=-1===s?x:0;if(!o.isCompressed&&o.isFourCC){r.format=5,N=I*C*4;let o=null;if(e._badOS||e._badDesktopOS||!L.textureHalfFloat&&!L.textureFloat)128===y?(o=S._GetFloatAsUIntRGBAArrayBuffer(I,C,a.byteOffset+A,N,a.buffer,i),g&&0==i&&g.push(S._GetFloatRGBAArrayBuffer(I,C,a.byteOffset+A,N,a.buffer,i))):64===y&&(o=S._GetHalfFloatAsUIntRGBAArrayBuffer(I,C,a.byteOffset+A,N,a.buffer,i),g&&0==i&&g.push(S._GetHalfFloatAsFloatRGBAArrayBuffer(I,C,a.byteOffset+A,N,a.buffer,i))),r.type=0;else{let e,t=L.textureFloat&&(c&&L.textureFloatLinearFiltering||!c),n=L.textureHalfFloat&&(c&&L.textureHalfFloatLinearFiltering||!c),l=(128===y||64===y&&!n)&&t?1:(64===y||128===y&&!t)&&n?2:0,s=null;if(128===y)switch(l){case 1:e=S._GetFloatRGBAArrayBuffer,s=null;break;case 2:e=S._GetFloatAsHalfFloatRGBAArrayBuffer,s=S._GetFloatRGBAArrayBuffer;break;case 0:e=S._GetFloatAsUIntRGBAArrayBuffer,s=S._GetFloatRGBAArrayBuffer}else switch(l){case 1:e=S._GetHalfFloatAsFloatRGBAArrayBuffer,s=null;break;case 2:e=S._GetHalfFloatRGBAArrayBuffer,s=S._GetHalfFloatAsFloatRGBAArrayBuffer;break;case 0:e=S._GetHalfFloatAsUIntRGBAArrayBuffer,s=S._GetHalfFloatAsFloatRGBAArrayBuffer}r.type=l,o=e(I,C,a.byteOffset+A,N,a.buffer,i),g&&0==i&&g.push(s?s(I,C,a.byteOffset+A,N,a.buffer,i):o)}o&&e._uploadDataToTextureDirectly(r,o,t,i)}else if(o.isRGB)r.type=0,24===y?(r.format=4,N=I*C*3,d=S._GetRGBArrayBuffer(I,C,a.byteOffset+A,N,a.buffer,D,F,O)):(r.format=5,N=I*C*4,d=S._GetRGBAArrayBuffer(I,C,a.byteOffset+A,N,a.buffer,D,F,O,V)),e._uploadDataToTextureDirectly(r,d,t,i);else if(o.isLuminance){let o=e._getUnpackAlignement(),n=I;N=Math.floor((I+o-1)/o)*o*(C-1)+n,d=S._GetLuminanceArrayBuffer(I,C,a.byteOffset+A,N,a.buffer),r.format=1,r.type=0,e._uploadDataToTextureDirectly(r,d,t,i)}else N=Math.max(4,I)/4*Math.max(4,C)/4*P,d=new Uint8Array(a.buffer,a.byteOffset+A,N),r.type=0,e._uploadCompressedDataToTextureDirectly(r,R,I,C,d,t,i)}A+=y?I*C*(y/8):N,I*=.5,C*=.5,I=Math.max(1,I),C=Math.max(1,C)}if(void 0!==f)break}g&&g.length>0?o.sphericalPolynomial=i.CubeMapToSphericalPolynomialTools.ConvertCubeMapToSphericalPolynomial({size:_[4],right:g[0],left:g[1],up:g[2],down:g[3],front:g[4],back:g[5],format:5,type:1,gammaSpace:!1}):o.sphericalPolynomial=void 0}}S.StoreLODInAlphaChannel=!1,e.s(["DDSTools",0,S],3240)},6248,e=>{"use strict";var r=e.i(43454),t=e.i(3240);e.s(["_DDSTextureLoader",0,class{constructor(){this.supportCascades=!0}loadCubeData(e,i,a,o){let n,l=i.getEngine(),s=!1,f=1e3;if(Array.isArray(e))for(let r=0;r<e.length;r++){let a=e[r];i.width=(n=t.DDSTools.GetDDSInfo(a)).width,i.height=n.height,s=(n.isRGB||n.isLuminance||n.mipmapCount>1)&&i.generateMipMaps,l._unpackFlipY(n.isCompressed),t.DDSTools.UploadDDSLevels(l,i,a,n,s,6,-1,r),n.isFourCC||1!==n.mipmapCount?f=n.mipmapCount-1:l.generateMipMapsForCubemap(i)}else i.width=(n=t.DDSTools.GetDDSInfo(e)).width,i.height=n.height,a&&(n.sphericalPolynomial=new r.SphericalPolynomial),s=(n.isRGB||n.isLuminance||n.mipmapCount>1)&&i.generateMipMaps,l._unpackFlipY(n.isCompressed),t.DDSTools.UploadDDSLevels(l,i,e,n,s,6),n.isFourCC||1!==n.mipmapCount?f=n.mipmapCount-1:l.generateMipMapsForCubemap(i,!1);l._setCubeMapTextureParams(i,s,f),i.isReady=!0,i.onLoadedObservable.notifyObservers(i),i.onLoadedObservable.clear(),o&&o({isDDS:!0,width:i.width,info:n,data:e,texture:i})}loadData(e,r,i){let a=t.DDSTools.GetDDSInfo(e),o=(a.isRGB||a.isLuminance||a.mipmapCount>1)&&r.generateMipMaps&&Math.max(a.width,a.height)>>a.mipmapCount-1==1;i(a.width,a.height,o,a.isFourCC,()=>{t.DDSTools.UploadDDSLevels(r.getEngine(),r,e,a,o,1)})}}])},19246,62827,e=>{"use strict";var r,t,i=e.i(67722),a=e.i(58328),o=e.i(44034);function n(){let e=null;onmessage=r=>{if("init"===r.data.action){if(r.data.url)try{importScripts(r.data.url)}catch(e){postMessage({action:"error",error:e})}e||(e=BASIS({wasmBinary:r.data.wasmBinary})),null!==e&&e.then(e=>{BASIS=e,e.initializeBasis(),postMessage({action:"init"})})}else if("transcode"===r.data.action){var t,i;let e,a=r.data.config,o=r.data.imageData,n=new BASIS.BasisFile(o),l=function(e){let r=e.getHasAlpha(),t=e.getNumImages(),i=[];for(let r=0;r<t;r++){let t={levels:[]},a=e.getNumLevels(r);for(let i=0;i<a;i++){let a={width:e.getImageWidth(r,i),height:e.getImageHeight(r,i)};t.levels.push(a)}i.push(t)}return{hasAlpha:r,images:i}}(n),s=r.data.ignoreSupportedFormats?null:(t=r.data.config,i=l,e=null,t.supportedCompressionFormats&&(e=t.supportedCompressionFormats.astc?10:t.supportedCompressionFormats.bc7?6:t.supportedCompressionFormats.s3tc?i.hasAlpha?3:2:t.supportedCompressionFormats.pvrtc?i.hasAlpha?9:8:t.supportedCompressionFormats.etc2?1:14*!t.supportedCompressionFormats.etc1),e),f=!1;null===s&&(f=!0,s=l.hasAlpha?3:2);let c=!0;n.startTranscoding()||(c=!1);let d=[];for(let e=0;e<l.images.length&&c;e++){let r=l.images[e];if(void 0===a.loadSingleImage||a.loadSingleImage===e){let t=r.levels.length;!1===a.loadMipmapLevels&&(t=1);for(let i=0;i<t;i++){let t=r.levels[i],a=function(e,r,t,i,a){let o=new Uint8Array(e.getImageTranscodedSizeInBytes(r,t,i));return e.transcodeImage(o,r,t,i,1,0)?(a&&(o=function(e,r,t){let i=new Uint16Array(4),a=new Uint16Array(r*t),o=r/4,n=t/4;for(let t=0;t<n;t++)for(let n=0;n<o;n++){let l=0+8*(t*o+n);i[0]=e[l]|e[l+1]<<8,i[1]=e[l+2]|e[l+3]<<8,i[2]=(2*(31&i[0])+ +(31&i[1]))/3|(2*(2016&i[0])+ +(2016&i[1]))/3&2016|(2*(63488&i[0])+ +(63488&i[1]))/3&63488,i[3]=(2*(31&i[1])+ +(31&i[0]))/3|(2*(2016&i[1])+ +(2016&i[0]))/3&2016|(2*(63488&i[1])+ +(63488&i[0]))/3&63488;for(let o=0;o<4;o++){let s=e[l+4+o],f=(4*t+o)*r+4*n;a[f++]=i[3&s],a[f++]=i[s>>2&3],a[f++]=i[s>>4&3],a[f++]=i[s>>6&3]}}return a}(o,e.getImageWidth(r,t)+3&-4,e.getImageHeight(r,t)+3&-4)),o):null}(n,e,i,s,f);if(!a){c=!1;break}t.transcodedPixels=a,d.push(t.transcodedPixels.buffer)}}}n.close(),n.delete(),f&&(s=-1),c?postMessage({action:"transcode",success:c,id:r.data.id,fileInfo:l,format:s},d):postMessage({action:"transcode",success:c,id:r.data.id})}}}(r=t||(t={}))[r.cTFETC1=0]="cTFETC1",r[r.cTFETC2=1]="cTFETC2",r[r.cTFBC1=2]="cTFBC1",r[r.cTFBC3=3]="cTFBC3",r[r.cTFBC4=4]="cTFBC4",r[r.cTFBC5=5]="cTFBC5",r[r.cTFBC7=6]="cTFBC7",r[r.cTFPVRTC1_4_RGB=8]="cTFPVRTC1_4_RGB",r[r.cTFPVRTC1_4_RGBA=9]="cTFPVRTC1_4_RGBA",r[r.cTFASTC_4x4=10]="cTFASTC_4x4",r[r.cTFATC_RGB=11]="cTFATC_RGB",r[r.cTFATC_RGBA_INTERPOLATED_ALPHA=12]="cTFATC_RGBA_INTERPOLATED_ALPHA",r[r.cTFRGBA32=13]="cTFRGBA32",r[r.cTFRGB565=14]="cTFRGB565",r[r.cTFBGR565=15]="cTFBGR565",r[r.cTFRGBA4444=16]="cTFRGBA4444",r[r.cTFFXT1_RGB=17]="cTFFXT1_RGB",r[r.cTFPVRTC2_4_RGB=18]="cTFPVRTC2_4_RGB",r[r.cTFPVRTC2_4_RGBA=19]="cTFPVRTC2_4_RGBA",r[r.cTFETC2_EAC_R11=20]="cTFETC2_EAC_R11",r[r.cTFETC2_EAC_RG11=21]="cTFETC2_EAC_RG11";let l={JSModuleURL:`${i.Tools._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,WasmModuleURL:`${i.Tools._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`},s=null,f=null,c=0,d=(e,r)=>{let t=e instanceof ArrayBuffer?new Uint8Array(e):e;return new Promise((e,a)=>{(!s&&(s=new Promise((e,r)=>{f?e(f):i.Tools.LoadFileAsync(i.Tools.GetBabylonScriptURL(l.WasmModuleURL)).then(t=>{var a,o;if("function"!=typeof URL)return r("Basis transcoder requires an environment with a URL constructor");(a=f=new Worker(URL.createObjectURL(new Blob([`(${n})()`],{type:"application/javascript"}))),o=l.JSModuleURL,new Promise((e,r)=>{let n=t=>{"init"===t.data.action?(a.removeEventListener("message",n),e(a)):"error"===t.data.action&&r(t.data.error||"error initializing worker")};a.addEventListener("message",n),a.postMessage({action:"init",url:o?i.Tools.GetBabylonScriptURL(o):void 0,wasmBinary:t},[t])})).then(e,r)}).catch(r)})),s).then(()=>{let i=c++,o=r=>{"transcode"===r.data.action&&r.data.id===i&&(f.removeEventListener("message",o),r.data.success?e(r.data):a("Transcode is not supported on this device"))};f.addEventListener("message",o);let n=new Uint8Array(t.byteLength);n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f.postMessage({action:"transcode",id:i,imageData:n,config:r,ignoreSupportedFormats:!1},[n.buffer])},e=>{a(e)})})},u=(e,r)=>{let t=r._gl?.TEXTURE_2D;e.isCube&&(t=r._gl?.TEXTURE_CUBE_MAP),r._bindTextureDirectly(t,e,!0)},p=(e,r)=>{let n=e.getEngine();for(let l=0;l<r.fileInfo.images.length;l++){let s=r.fileInfo.images[l].levels[0];if(e._invertVScale=e.invertY,-1===r.format||r.format===t.cTFRGB565)if(e.type=10,e.format=4,n._features.basisNeedsPOT&&(Math.log2(s.width)%1!=0||Math.log2(s.height)%1!=0)){let r=new o.InternalTexture(n,2);e._invertVScale=e.invertY,r.type=10,r.format=4,r.width=s.width+3&-4,r.height=s.height+3&-4,u(r,n),n._uploadDataToTextureDirectly(r,new Uint16Array(s.transcodedPixels.buffer),l,0,4,!0),n._rescaleTexture(r,e,n.scenes[0],n._getInternalFormat(4),()=>{n._releaseTexture(r),u(e,n)})}else e._invertVScale=!e.invertY,e.width=s.width+3&-4,e.height=s.height+3&-4,e.samplingMode=2,u(e,n),n._uploadDataToTextureDirectly(e,new Uint16Array(s.transcodedPixels.buffer),l,0,4,!0);else{e.width=s.width,e.height=s.height,e.generateMipMaps=r.fileInfo.images[l].levels.length>1;let t=m.GetInternalFormatFromBasisFormat(r.format,n);e.format=t,u(e,n),r.fileInfo.images[l].levels.forEach((r,i)=>{n._uploadCompressedDataToTextureDirectly(e,t,r.width,r.height,r.transcodedPixels,l,i)}),n._features.basisNeedsPOT&&(Math.log2(e.width)%1!=0||Math.log2(e.height)%1!=0)&&(i.Tools.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."),e._cachedWrapU=a.Texture.CLAMP_ADDRESSMODE,e._cachedWrapV=a.Texture.CLAMP_ADDRESSMODE)}}},m={JSModuleURL:l.JSModuleURL,WasmModuleURL:l.WasmModuleURL,GetInternalFormatFromBasisFormat:(e,r)=>{let i;switch(e){case t.cTFETC1:i=36196;break;case t.cTFBC1:i=33776;break;case t.cTFBC4:i=33779;break;case t.cTFASTC_4x4:i=37808;break;case t.cTFETC2:i=37496;break;case t.cTFBC7:i=36492}if(void 0===i)throw"The chosen Basis transcoder format is not currently supported";return i},TranscodeAsync:d,LoadTextureFromTranscodeResult:p};Object.defineProperty(m,"JSModuleURL",{get:function(){return l.JSModuleURL},set:function(e){l.JSModuleURL=e}}),Object.defineProperty(m,"WasmModuleURL",{get:function(){return l.WasmModuleURL},set:function(e){l.WasmModuleURL=e}}),e.s(["LoadTextureFromTranscodeResult",0,p,"TranscodeAsync",0,d],62827),e.s(["_BasisTextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(e,r,t,a,o){if(Array.isArray(e))return;let n=r.getEngine().getCaps();d(e,{supportedCompressionFormats:{etc1:!!n.etc1,s3tc:!!n.s3tc,pvrtc:!!n.pvrtc,etc2:!!n.etc2,astc:!!n.astc,bc7:!!n.bptc}}).then(e=>{let t=e.fileInfo.images[0].levels.length>1&&r.generateMipMaps;p(r,e),r.getEngine()._setCubeMapTextureParams(r,t),r.isReady=!0,r.onLoadedObservable.notifyObservers(r),r.onLoadedObservable.clear(),a&&a()}).catch(e=>{i.Tools.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"),r.isReady=!0,o&&o(e)})}loadData(e,r,t){let a=r.getEngine().getCaps();d(e,{supportedCompressionFormats:{etc1:!!a.etc1,s3tc:!!a.s3tc,pvrtc:!!a.pvrtc,etc2:!!a.etc2,astc:!!a.astc,bc7:!!a.bptc}}).then(e=>{let i=e.fileInfo.images[0].levels[0],a=e.fileInfo.images[0].levels.length>1&&r.generateMipMaps;t(i.width,i.height,a,-1!==e.format,()=>{p(r,e)})}).catch(e=>{i.Tools.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"),i.Tools.Warn(`Failed to transcode Basis file: ${e}`),t(0,0,!1,!1,()=>{},!0)})}}],19246)},80307,13615,e=>{"use strict";var r=e.i(33967);e.i(37988),e.i(72458),e.i(44569),e.i(73043),e.i(66911),e.i(4796),e.i(65977),e.i(94905),e.i(16288);let t="fresnelFunction",i=`#ifdef FRESNEL
fn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32
{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([],13615),e.i(94234),e.i(73547),e.i(53444),e.i(24732),e.i(76066),e.i(23393),e.i(27104),e.i(13483),e.i(94932),e.i(81303),e.i(63451),e.i(29589),e.i(48835),e.i(51597),e.i(69219),e.i(29981);let a="defaultPixelShader",o=`#include<defaultUboDeclaration>
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
var refractionCubeSamplerSampler: sampler;var refractionCubeSampler: texture_cube<f32>;
#else
var refraction2DSamplerSampler: sampler;var refraction2DSampler: texture_2d<f32>;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;
#else
var reflection2DSamplerSampler: sampler;var reflection2DSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f=normalize(-cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
#ifdef DIFFUSE
baseColor=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<uniforms.alphaCutOff) {discard;}
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
#ifdef DETAIL
baseColor=vec4f(baseColor.rgb*2.0*mix(0.5,detailColor.r,uniforms.vDetailInfos.y),baseColor.a);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
var baseAmbientColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb*uniforms.vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
var specularMapColor: vec4f=textureSample(specularSampler,specularSamplerSampler,fragmentInputs.vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;
#ifdef SPECULARTERM
var specularBase: vec3f= vec3f(0.,0.,0.);
#endif
var shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;
#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*uniforms.vLightmapInfos.y,lightmapColor.a);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFRACTION
var refractionVector: vec3f=normalize(refract(-viewDirectionW,normalW,uniforms.vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(fragmentInputs.vPositionW,refractionVector,uniforms.vRefractionSize,uniforms.vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*uniforms.vRefractionInfos.w;var refractionLookup: vec4f=textureSample(refractionCubeSampler,refractionCubeSamplerSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
var vRefractionUVW: vec3f= (uniforms.refractionMatrix*(scene.view* vec4f(fragmentInputs.vPositionW+refractionVector*uniforms.vRefractionInfos.z,1.0))).xyz;var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=textureSample(refraction2DSampler,refraction2DSamplerSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor=vec4f(fromRGBD(refractionColor),refractionColor.a);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor=vec4f(toGammaSpaceVec3(refractionColor.rgb),refractionColor.a);
#endif
refractionColor=vec4f(refractionColor.rgb*uniforms.vRefractionInfos.x,refractionColor.a);
#endif
var reflectionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFLECTION
var vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
var bias: f32=uniforms.vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);
#else
reflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);
#endif
#else
var coords: vec2f=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=textureSample(reflection2DSampler,reflection2DSamplerSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#ifdef REFLECTIONFRESNEL
var reflectionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.reflectionRightColor.a,uniforms.reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor=vec4f(reflectionColor.rgb*specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
var refractionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.refractionRightColor.a,uniforms.refractionLeftColor.a);refractionColor=vec4f(refractionColor.rgb*uniforms.refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*uniforms.refractionRightColor.rgb,refractionColor.a);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;
#else
alpha*=opacityMap.a*uniforms.vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#ifdef OPACITYFRESNEL
var opacityFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.opacityParts.z,uniforms.opacityParts.w);alpha+=uniforms.opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*uniforms.opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<uniforms.alphaCutOff) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
var emissiveColor: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
var emissiveFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.emissiveRightColor.a,uniforms.emissiveLeftColor.a);emissiveColor*=uniforms.emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*uniforms.emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
var diffuseFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.diffuseRightColor.a,uniforms.diffuseLeftColor.a);diffuseBase*=uniforms.diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*uniforms.diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
var finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#else
var finalSpecular: vec3f= vec3f(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#ifdef EMISSIVEASILLUMINATION
var color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
var color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color=vec4f(color.rgb*lightmapColor.rgb,color.a);
#else
color=vec4f(color.rgb+lightmapColor.rgb,color.a);
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color=vec4f(max(color.rgb,vec3f(0.)),color.a);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);
#else
#ifdef IMAGEPROCESSING
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);color=applyImageProcessing(color);
#endif
#endif
color=vec4f(color.rgb,color.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb*color.a, color.a);
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
var writeGeometryInfo: f32=select(0.0,1.0,color.a>0.4);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]=vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX]=vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalW,writeGeometryInfo);
#else
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX]=vec4f(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
fragData[PREPASS_ALBEDO_INDEX]=vec4f(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4f(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec4(specularMapColor))*writeGeometryInfo; 
#else
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec3(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+color.rgb*color.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-color.a));} else {fragmentOutputs.backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[a]||(r.ShaderStore.ShadersStoreWGSL[a]=o),e.s(["defaultPixelShaderWGSL",0,{name:a,shader:o}],80307)},73728,e=>{"use strict";var r=e.i(33967);let t="pbrBRDFFunctions",i=`#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
#ifdef MS_BRDF_ENERGY_CONSERVATION
fn getEnergyConservationFactor(specularEnvironmentR0: vec3f,environmentBrdf: vec3f)->vec3f {return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);}
#endif
#ifdef ENVIRONMENTBRDF
fn getBRDFLookup(NdotV: f32,perceptualRoughness: f32)->vec3f {var UV: vec2f= vec2f(NdotV,perceptualRoughness);var brdfLookup: vec4f= textureSample(environmentBrdfSampler,environmentBrdfSamplerSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup=vec4f(fromRGBD(brdfLookup.rgba),brdfLookup.a);
#endif
return brdfLookup.rgb;}
fn getReflectanceFromBRDFWithEnvLookup(specularEnvironmentR0: vec3f,specularEnvironmentR90: vec3f,environmentBrdf: vec3f)->vec3f {
#ifdef BRDF_V_HEIGHT_CORRELATED
var reflectance: vec3f=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;
#else
var reflectance: vec3f=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;}
fn getReflectanceFromBRDFLookup(specularEnvironmentR0: vec3f,environmentBrdf: vec3f)->vec3f {
#ifdef BRDF_V_HEIGHT_CORRELATED
var reflectance: vec3f=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
var reflectance: vec3f=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;}
#endif
/* NOT USED
#if defined(SHEEN) && defined(SHEEN_SOFTER)
fn getBRDFLookupCharlieSheen(NdotV: f32,perceptualRoughness: f32)->f32
{var c: f32=1.0-NdotV;var c3: f32=c*c*c;return 0.65584461*c3+1.0/(4.16526551+exp(-7.97291361*perceptualRoughness+6.33516894));}
#endif
*/
#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
fn getReflectanceFromAnalyticalBRDFLookup_Jones(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
/**
* The sheen BRDF not containing F can be easily stored in the blue channel of the BRDF texture.
* The blue channel contains DCharlie*VAshikhmin*NdotL as a lokkup table
*/
fn getSheenReflectanceFromBRDFLookup(reflectance0: vec3f,environmentBrdf: vec3f)->vec3f {var sheenEnvironmentReflectance: vec3f=reflectance0*environmentBrdf.b;return sheenEnvironmentReflectance;}
#endif
fn fresnelSchlickGGXVec3(VdotH: f32,reflectance0: vec3f,reflectance90: vec3f)->vec3f
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
fn fresnelSchlickGGX(VdotH: f32,reflectance0: f32,reflectance90: f32)->f32
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
#ifdef CLEARCOAT
fn getR0RemappedForClearCoat(f0: vec3f)->vec3f {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturateVec3(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturateVec3(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
var s: vec3f=sqrt(f0);var t: vec3f=(uniforms.vClearCoatRefractionParams.z+uniforms.vClearCoatRefractionParams.w*s)/(uniforms.vClearCoatRefractionParams.w+uniforms.vClearCoatRefractionParams.z*s);return squareVec3(t);
#endif
}
#endif
#ifdef IRIDESCENCE
const XYZ_TO_REC709: mat3x3f= mat3x3f(
3.2404542,-0.9692660, 0.0556434,
-1.5371385, 1.8760108,-0.2040259,
-0.4985314, 0.0415560, 1.0572252
);fn getIORTfromAirToSurfaceR0(f0: vec3f)->vec3f {var sqrtF0: vec3f=sqrt(f0);return (1.+sqrtF0)/(1.-sqrtF0);}
fn getR0fromIORsVec3(iorT: vec3f,iorI: f32)->vec3f {return squareVec3((iorT- vec3f(iorI))/(iorT+ vec3f(iorI)));}
fn getR0fromIORs(iorT: f32,iorI: f32)->f32 {return square((iorT-iorI)/(iorT+iorI));}
fn evalSensitivity(opd: f32,shift: vec3f)->vec3f {var phase: f32=2.0*PI*opd*1.0e-9;const val: vec3f= vec3f(5.4856e-13,4.4201e-13,5.2481e-13);const pos: vec3f= vec3f(1.6810e+06,1.7953e+06,2.2084e+06);const vr: vec3f= vec3f(4.3278e+09,9.3046e+09,6.6121e+09);var xyz: vec3f=val*sqrt(2.0*PI*vr)*cos(pos*phase+shift)*exp(-square(phase)*vr);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*square(phase));xyz/=1.0685e-7;var srgb: vec3f=XYZ_TO_REC709*xyz;return srgb;}
fn evalIridescence(outsideIOR: f32,eta2: f32,cosTheta1: f32,thinFilmThickness: f32,baseF0: vec3f)->vec3f {var I: vec3f= vec3f(1.0);var iridescenceIOR: f32=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));var sinTheta2Sq: f32=square(outsideIOR/iridescenceIOR)*(1.0-square(cosTheta1));var cosTheta2Sq: f32=1.0-sinTheta2Sq;if (cosTheta2Sq<0.0) {return I;}
var cosTheta2: f32=sqrt(cosTheta2Sq);var R0: f32=getR0fromIORs(iridescenceIOR,outsideIOR);var R12: f32=fresnelSchlickGGX(cosTheta1,R0,1.);var R21: f32=R12;var T121: f32=1.0-R12;var phi12: f32=0.0;if (iridescenceIOR<outsideIOR) {phi12=PI;}
var phi21: f32=PI-phi12;var baseIOR: vec3f=getIORTfromAirToSurfaceR0(clamp(baseF0,vec3f(0.0),vec3f(0.9999))); 
var R1: vec3f=getR0fromIORsVec3(baseIOR,iridescenceIOR);var R23: vec3f=fresnelSchlickGGXVec3(cosTheta2,R1, vec3f(1.));var phi23: vec3f= vec3f(0.0);if (baseIOR[0]<iridescenceIOR) {phi23[0]=PI;}
if (baseIOR[1]<iridescenceIOR) {phi23[1]=PI;}
if (baseIOR[2]<iridescenceIOR) {phi23[2]=PI;}
var opd: f32=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;var phi: vec3f= vec3f(phi21)+phi23;var R123: vec3f=clamp(R12*R23,vec3f(1e-5),vec3f(0.9999));var r123: vec3f=sqrt(R123);var Rs: vec3f=(T121*T121)*R23/( vec3f(1.0)-R123);var C0: vec3f=R12+Rs;I=C0;var Cm: vec3f=Rs-T121;for (var m: i32=1; m<=2; m++)
{Cm*=r123;var Sm: vec3f=2.0*evalSensitivity( f32(m)*opd, f32(m)*phi);I+=Cm*Sm;}
return max(I, vec3f(0.0));}
#endif
fn normalDistributionFunction_TrowbridgeReitzGGX(NdotH: f32,alphaG: f32)->f32
{var a2: f32=alphaG*alphaG;var d: f32=NdotH*NdotH*(a2-1.0)+1.0;return a2/(PI*d*d);}
#ifdef SHEEN
fn normalDistributionFunction_CharlieSheen(NdotH: f32,alphaG: f32)->f32
{var invR: f32=1./alphaG;var cos2h: f32=NdotH*NdotH;var sin2h: f32=1.-cos2h;return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);}
#endif
#ifdef ANISOTROPIC
fn normalDistributionFunction_BurleyGGX_Anisotropic(NdotH: f32,TdotH: f32,BdotH: f32,alphaTB: vec2f)->f32 {var a2: f32=alphaTB.x*alphaTB.y;var v: vec3f= vec3f(alphaTB.y*TdotH,alphaTB.x *BdotH,a2*NdotH);var v2: f32=dot(v,v);var w2: f32=a2/v2;return a2*w2*w2*RECIPROCAL_PI;}
#endif
#ifdef BRDF_V_HEIGHT_CORRELATED
fn smithVisibility_GGXCorrelated(NdotL: f32,NdotV: f32,alphaG: f32)->f32 {
#ifdef MOBILE
var GGXV: f32=NdotL*(NdotV*(1.0-alphaG)+alphaG);var GGXL: f32=NdotV*(NdotL*(1.0-alphaG)+alphaG);return 0.5/(GGXV+GGXL);
#else
var a2: f32=alphaG*alphaG;var GGXV: f32=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);var GGXL: f32=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);return 0.5/(GGXV+GGXL);
#endif
}
#else
fn smithVisibilityG1_TrowbridgeReitzGGXFast(dot: f32,alphaG: f32)->f32
{
#ifdef MOBILE
return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
var alphaSquared: f32=alphaG*alphaG;return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
fn smithVisibility_TrowbridgeReitzGGXFast(NdotL: f32,NdotV: f32,alphaG: f32)->f32
{var visibility: f32=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);return visibility;}
#endif
#ifdef ANISOTROPIC
fn smithVisibility_GGXCorrelated_Anisotropic(NdotL: f32,NdotV: f32,TdotV: f32,BdotV: f32,TdotL: f32,BdotL: f32,alphaTB: vec2f)->f32 {var lambdaV: f32=NdotL*length( vec3f(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));var lambdaL: f32=NdotV*length( vec3f(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));var v: f32=0.5/(lambdaV+lambdaL);return v;}
#endif
#ifdef CLEARCOAT
fn visibility_Kelemen(VdotH: f32)->f32 {return 0.25/(VdotH*VdotH); }
#endif
#ifdef SHEEN
fn visibility_Ashikhmin(NdotL: f32,NdotV: f32)->f32
{return 1./(4.*(NdotL+NdotV-NdotL*NdotV));}
/* NOT USED
#ifdef SHEEN_SOFTER
fn l(x: f32,alphaG: f32)->f32
{var oneMinusAlphaSq: f32=(1.0-alphaG)*(1.0-alphaG);var a: f32=mix(21.5473,25.3245,oneMinusAlphaSq);var b: f32=mix(3.82987,3.32435,oneMinusAlphaSq);var c: f32=mix(0.19823,0.16801,oneMinusAlphaSq);var d: f32=mix(-1.97760,-1.27393,oneMinusAlphaSq);var e: f32=mix(-4.32054,-4.85967,oneMinusAlphaSq);return a/(1.0+b*pow(x,c))+d*x+e;}
fn lambdaSheen(cosTheta: f32,alphaG: f32)->f32
{return abs(cosTheta)<0.5 ? exp(l(cosTheta,alphaG)) : exp(2.0*l(0.5,alphaG)-l(1.0-cosTheta,alphaG));}
fn visibility_CharlieSheen(NdotL: f32,NdotV: f32,alphaG: f32)->f32
{var G: f32=1.0/(1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG));return G/(4.0*NdotV*NdotL);}
#endif
*/
#endif
fn diffuseBRDF_Burley(NdotL: f32,NdotV: f32,VdotH: f32,roughness: f32)->f32 {var diffuseFresnelNV: f32=pow5(saturateEps(1.0-NdotL));var diffuseFresnelNL: f32=pow5(saturateEps(1.0-NdotV));var diffuseFresnel90: f32=0.5+2.0*VdotH*VdotH*roughness;var fresnel: f32 =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);return fresnel/PI;}
#ifdef SS_TRANSLUCENCY
fn transmittanceBRDF_Burley(tintColor: vec3f,diffusionDistance: vec3f,thickness: f32)->vec3f {var S: vec3f=1./maxEpsVec3(diffusionDistance);var temp: vec3f=exp((-0.333333333*thickness)*S);return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);}
fn computeWrappedDiffuseNdotL(NdotL: f32,w: f32)->f32 {var t: f32=1.0+w;var invt2: f32=1.0/(t*t);return saturate((NdotL+w)*invt2);}
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},35620,55755,e=>{"use strict";var r=e.i(33967);let t="importanceSampling",i=`fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
fn hemisphereImportanceSampleDggx(u: vec2f,a: f32)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
fn hemisphereImportanceSampleDCharlie(u: vec2f,a: f32)->vec3f { 
var phi: f32=2.*PI*u.x;var sinTheta: f32=pow(u.y,a/(2.*a+1.));var cosTheta: f32=sqrt(1.-sinTheta*sinTheta);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([],35620);let a="hdrFilteringFunctions",o=`#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
fn radicalInverse_VdC(value: u32)->f32 
{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);return f32(bits)*2.3283064365386963e-10; }
fn hammersley(i: u32,N: u32)->vec2f
{return vec2f( f32(i)/ f32(N),radicalInverse_VdC(i));}
fn log4(x: f32)->f32 {return log2(x)/2.;}
fn uv_to_normal(uv: vec2f)->vec3f {var N: vec3f;var uvRange: vec2f=uv;var theta: f32=uvRange.x*2.0*PI;var phi: f32=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
const NUM_SAMPLES_FLOAT: f32= f32(NUM_SAMPLES);const NUM_SAMPLES_FLOAT_INVERSED: f32=1./NUM_SAMPLES_FLOAT;const K: f32=4.;fn irradiance(inputTexture: texture_cube<f32>,inputSampler: sampler,inputN: vec3f,filteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>,icdfSamplerSampler: sampler
#endif
)->vec3f
{var n: vec3f=normalize(inputN);var result: vec3f= vec3f(0.0);
#ifndef IBL_CDF_FILTERING
var tangent: vec3f=select(vec3f(1.,0.,0.),vec3f(0.,0.,1.),abs(n.z)<0.999);tangent=normalize(cross(tangent,n));var bitangent: vec3f=cross(n,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,n);
#endif
var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var omegaP: f32=(4.*PI)/(6.*dim0*dim0);for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);
#ifdef IBL_CDF_FILTERING
var T: vec2f;T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(Xi.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(T.x,Xi.y),0.0).y;var Ls: vec3f=uv_to_normal(vec2f(1.0-fract(T.x+0.25),T.y));var NoL: f32=dot(n,Ls);
#else
var Ls: vec3f=hemisphereCosSample(Xi);Ls=normalize(Ls);var Ns: vec3f= vec3f(0.,0.,1.);var NoL: f32=dot(Ns,Ls);
#endif
if (NoL>0.) {
#ifdef IBL_CDF_FILTERING
var pdf: f32=textureSampleLevel(icdfSampler,icdfSamplerSampler,T,0.0).z;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,Ls,0.0).rgb;
#else
var pdf_inversed: f32=PI/NoL;var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp(l,0.0,maxLevel);var c: vec3f=textureSampleLevel(inputTexture,inputSampler,tbn*Ls,mipLevel).rgb;
#endif
#ifdef GAMMA_INPUT
c=toLinearSpaceVec3(c);
#endif
#ifdef IBL_CDF_FILTERING
var light: vec3f=vec3f(0.0);if (pdf>1e-6) {light=vec3f(1.0)/vec3f(pdf)*c;}
result+=NoL*light;
#else
result+=c;
#endif
}}
result=result*NUM_SAMPLES_FLOAT_INVERSED;return result;}
fn radiance(alphaG: f32,inputTexture: texture_cube<f32>,inputSampler: sampler,inputN: vec3f,filteringInfo: vec2f)->vec3f
{var n: vec3f=normalize(inputN);var c: vec3f=textureSample(inputTexture,inputSampler,n).rgb; 
if (alphaG==0.) {
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;} else {var result: vec3f= vec3f(0.);var tangent: vec3f=select(vec3f(1.,0.,0.),vec3f(0.,0.,1.),abs(n.z)<0.999);tangent=normalize(cross(tangent,n));var bitangent: vec3f=cross(n,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,n);var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var omegaP: f32=(4.*PI)/(6.*dim0*dim0);var weight: f32=0.;for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);var H: vec3f=hemisphereImportanceSampleDggx(Xi,alphaG);var NoV: f32=1.;var NoH: f32=H.z;var NoH2: f32=H.z*H.z;var NoL: f32=2.*NoH2-1.;var L: vec3f= vec3f(2.*NoH*H.x,2.*NoH*H.y,NoL);L=normalize(L);if (NoL>0.) {var pdf_inversed: f32=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp( f32(l),0.0,maxLevel);weight+=NoL;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}}
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[a]||(r.ShaderStore.IncludesShadersStoreWGSL[a]=o),e.s([],55755)},32838,e=>{"use strict";var r=e.i(33967);e.i(66911),e.i(35620),e.i(73728),e.i(55755);let t="hdrFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["hdrFilteringPixelShaderWGSL",0,{name:t,shader:i}])},70760,e=>{"use strict";var r=e.i(33967);let t="fresnelFunction",i=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},91023,e=>{"use strict";var r=e.i(33967);e.i(20302);let t="defaultFragmentDeclaration",i=`uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;uniform vec4 emissiveRightColor;
#endif
#if defined(REFLECTION) || (defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED))
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},3100,e=>{"use strict";var r=e.i(33967);e.i(91023),e.i(38649),e.i(488),e.i(17046),e.i(2522),e.i(13851),e.i(54268),e.i(65581),e.i(70173),e.i(78267),e.i(56261),e.i(70760),e.i(12369),e.i(31713),e.i(41092),e.i(50862),e.i(79213),e.i(28248),e.i(24137),e.i(1414),e.i(11364),e.i(99354),e.i(90699),e.i(45e3),e.i(71871),e.i(93563),e.i(93741),e.i(88783);let t="defaultPixelShader",i=`#define CUSTOM_FRAGMENT_EXTENSION
#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;vec4 refractionLookup=textureCube(refractionCubeSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
gl_FragData[PREPASS_LOCAL_POSITION_INDEX]=vec4(vPosition,writeGeometryInfo);
#endif
#if defined(PREPASS_VELOCITY)
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w)-(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalW,writeGeometryInfo);
#else
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
gl_FragData[PREPASS_WORLD_NORMAL_INDEX]=vec4(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularMapColor))*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {frontColor.rgb+=color.rgb*color.a*alphaMultiplier;frontColor.a=1.0-alphaMultiplier*(1.0-color.a);} else {backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["defaultPixelShader",0,{name:t,shader:i}])},70173,e=>{"use strict";var r=e.i(33967);e.i(57940);let t="lightsFragmentFunctions",i=`struct lightingInfo
{vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {lightingInfo result;vec3 lightVectorW;float attenuation=1.0;if (lightData.w==0.)
{vec3 direction=lightData.xyz-vPositionW;attenuation=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
float getAttenuation(float cosAngle,float exponent) {return max(0.,pow(cosAngle,exponent));}
float getIESAttenuation(float cosAngle,sampler2D iesLightSampler) {float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
lightingInfo basicSpotLighting(vec3 viewDirectionW,vec3 lightVectorW,vec3 vNormal,float attenuation,vec3 diffuseColor,vec3 specularColor,float glossiness) {lightingInfo result; 
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
lightingInfo computeIESSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness,sampler2D iesLightSampler) { 
vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float dotProduct=dot(lightDirection.xyz,-lightVectorW);float cosAngle=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{ 
attenuation*=getIESAttenuation(dotProduct,iesLightSampler);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{ 
attenuation*=getAttenuation(cosAngle,lightData.w);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {lightingInfo result;float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return textureColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
uniform sampler2D areaLightsLTC1Sampler;uniform sampler2D areaLightsLTC2Sampler;
#define inline
lightingInfo computeAreaLighting(sampler2D ltc1,sampler2D ltc2,vec3 viewDirectionW,vec3 vNormal,vec3 vPosition,vec3 lightPosition,vec3 halfWidth,vec3 halfHeight,vec3 diffuseColor,vec3 specularColor,float roughness) 
{lightingInfo result;areaLightData data=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc2,viewDirectionW,vNormal,vPosition,lightPosition,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
vec3 fresnel=( specularColor*data.Fresnel.x+( vec3( 1.0 )-specularColor )*data.Fresnel.y );result.specular+=specularColor*fresnel*data.Specular;
#endif
result.diffuse+=diffuseColor*data.Diffuse;return result;}
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["lightsFragmentFunctions",0,{name:t,shader:i}])},78141,e=>{"use strict";var r=e.i(33967);e.i(84400);let t="backgroundUboDeclaration",i=`layout(std140,column_major) uniform;uniform Material
{uniform vec4 vPrimaryColor;uniform vec4 vPrimaryColorShadow;uniform vec2 vDiffuseInfos;uniform vec2 vReflectionInfos;uniform mat4 diffuseMatrix;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;uniform float pointSize;uniform float shadowLevel;uniform float alpha;uniform vec3 vBackgroundCenter;uniform vec4 vReflectionControl;uniform vec2 projectedGroundInfos;};
#include<sceneUboDeclaration>
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},47311,e=>{"use strict";var r=e.i(33967);let t="backgroundFragmentDeclaration",i=`uniform vec4 vEyePosition;uniform vec4 vPrimaryColor;
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
uniform vec4 vPrimaryColorShadow;
#endif
uniform float shadowLevel;uniform float alpha;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#endif
#if defined(REFLECTIONFRESNEL) || defined(OPACITYFRESNEL)
uniform vec3 vBackgroundCenter;
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 vReflectionControl;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION)
uniform mat4 view;
#endif
#ifdef PROJECTED_GROUND
uniform vec2 projectedGroundInfos;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(78141),e.i(13851),e.i(12369),e.i(31713),e.i(54268),e.i(65581),e.i(70173),e.i(78267),e.i(41092),e.i(24137),e.i(28248),e.i(1414);let a="intersectionFunctions",o=`float diskIntersectWithBackFaceCulling(vec3 ro,vec3 rd,vec3 c,float r) {float d=rd.y;if(d>0.0) { return 1e6; }
vec3 o=ro-c;float t=-o.y/d;vec3 q=o+rd*t;return (dot(q,q)<r*r) ? t : 1e6;}
vec2 sphereIntersect(vec3 ro,vec3 rd,vec3 ce,float ra) {vec3 oc=ro-ce;float b=dot(oc,rd);float c=dot(oc,oc)-ra*ra;float h=b*b-c;if(h<0.0) { return vec2(-1.0,-1.0); }
h=sqrt(h);return vec2(-b+h,-b-h);}
vec2 sphereIntersectFromOrigin(vec3 ro,vec3 rd,float ra) {float b=dot(ro,rd);float c=dot(ro,ro)-ra*ra;float h=b*b-c;if(h<0.0) { return vec2(-1.0,-1.0); }
h=sqrt(h);return vec2(-b+h,-b-h);}`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o),e.i(11364),e.i(71871),e.i(93563),e.i(93741);let n="backgroundPixelShader",l=`#ifdef TEXTURELODSUPPORT
#extension GL_EXT_shader_texture_lod : enable
#endif
precision highp float;
#include<__decl__backgroundFragment>
#include<helperFunctions>
varying vec3 vPositionW;
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif 
#ifdef MAINUV2 
varying vec2 vMainUV2; 
#endif 
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vec2 vDiffuseUV;
#endif
uniform sampler2D diffuseSampler;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef TEXTURELODSUPPORT
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef TEXTURELODSUPPORT
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE;
#endif
#ifndef SHADOWONLY
#define SHADOWONLY;
#endif
#include<imageProcessingDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
vec3 fresnelSchlickEnvironmentGGX(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
vec3 project(vec3 viewDirectionW,vec3 eyePosition) {float radius=projectedGroundInfos.x;float height=projectedGroundInfos.y;vec3 camDir=-viewDirectionW;float skySphereDistance=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;vec3 skySpherePositionW=eyePosition+camDir*skySphereDistance;vec3 p=normalize(skySpherePositionW);eyePosition.y-=height;float sIntersection=sphereIntersectFromOrigin(eyePosition,p,radius).x;vec3 h=vec3(0.0,-height,0.0);float dIntersection=diskIntersectWithBackFaceCulling(eyePosition,p,h,radius);p=(eyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(0.0,1.0,0.0);
#endif
float shadow=1.;float globalShadow=0.;float shadowLightCount=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
vec4 reflectionColor=vec4(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
vec3 reflectionVector=project(viewDirectionW,vEyePosition.xyz);reflectionVector=vec3(reflectionMatrix*vec4(reflectionVector,1.));
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=reflectionVector;
#else
vec2 reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
float reflectionLOD=vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(vReflectionMicrosurfaceInfos.x)*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;reflectionColor=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#else
float lodReflectionNormalized=saturate(reflectionLOD);float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;vec4 reflectionSpecularMid=sampleReflection(reflectionSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
vec4 reflectionSample=sampleReflection(reflectionSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef GAMMAREFLECTION
reflectionColor.rgb=toLinearSpace(reflectionColor.rgb);
#endif
#ifdef REFLECTIONBGR
reflectionColor.rgb=reflectionColor.bgr;
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#endif
vec3 diffuseColor=vec3(1.,1.,1.);float finalAlpha=alpha;
#ifdef DIFFUSE
vec4 diffuseMap=texture2D(diffuseSampler,vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap.rgb=toLinearSpace(diffuseMap.rgb);
#endif
diffuseMap.rgb*=vDiffuseInfos.y;
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
vec3 colorBase=diffuseColor;
#else
vec3 colorBase=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,0.0);
#ifdef USERGBCOLOR
vec3 finalColor=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
vec3 mainColor=mix(vPrimaryColorShadow.rgb,vPrimaryColor.rgb,colorBase);
#else
vec3 mainColor=vPrimaryColor.rgb;
#endif
vec3 finalColor=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
vec3 reflectionAmount=vReflectionControl.xxx;vec3 reflectionReflectance0=vReflectionControl.yyy;vec3 reflectionReflectance90=vReflectionControl.zzz;float VdotN=dot(normalize(vEyePosition.xyz),normalW);vec3 planarReflectionFresnel=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
float reflectionDistanceFalloff=1.0-saturate(length(vPositionW.xyz-vBackgroundCenter)*vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturate(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
float viewAngleToFloor=dot(normalW,normalize(vEyePosition.xyz-vBackgroundCenter));const float startAngle=0.1;float fadeFactor=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*shadowLevel,finalColor,globalShadow);
#endif
vec4 color=vec4(finalColor,finalAlpha);
#else
vec4 color=vec4(vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color.rgb=clamp(color.rgb,0.,30.0);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#ifdef NOISE
color.rgb+=dither(vPositionW.xy,0.5);color=max(color,0.0);
#endif
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStore[n]||(r.ShaderStore.ShadersStore[n]=l),e.s(["backgroundPixelShader",0,{name:n,shader:l}],47311)},65977,e=>{"use strict";var r=e.i(33967);e.i(25865);let t="lightsFragmentFunctions",i=`struct lightingInfo
{diffuse: vec3f,
#ifdef SPECULARTERM
specular: vec3f,
#endif
#ifdef NDOTL
ndl: f32,
#endif
};fn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;var lightVectorW: vec3f;var attenuation: f32=1.0;if (lightData.w==0.)
{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var attenuation: f32=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn getAttenuation(cosAngle: f32,exponent: f32)->f32 {return max(0.,pow(cosAngle,exponent));}
fn getIESAttenuation(cosAngle: f32,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->f32 {var angle=acos(cosAngle)/PI;return textureSampleLevel(iesLightTexture,iesLightTextureSampler,vec2f(angle,0),0.).r;}
fn computeBasicSpotLighting(viewDirectionW: vec3f,lightVectorW: vec3f,vNormal: vec3f,attenuation: f32,diffuseColor: vec3f,specularColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn computeIESSpotLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->lightingInfo {var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var dotProduct=dot(lightDirection.xyz,-lightVectorW);var cosAngle: f32=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{attenuation*=getIESAttenuation(dotProduct,iesLightTexture,iesLightTextureSampler);return computeBasicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
var result: lightingInfo;result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeSpotLighting(viewDirectionW: vec3f,vNormal: vec3f ,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var cosAngle: f32=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{attenuation*=getAttenuation(cosAngle,lightData.w);return computeBasicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
var result: lightingInfo;result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeHemisphericLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,groundColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightData.xyz);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
fn computeProjectionTextureDiffuseLighting(projectionLightTexture: texture_2d<f32>,projectionLightSampler: sampler,textureProjectionMatrix: mat4x4f,posW: vec3f)->vec3f {var strq: vec4f=textureProjectionMatrix*vec4f(posW,1.0);strq/=strq.w;var textureColor: vec3f=textureSample(projectionLightTexture,projectionLightSampler,strq.xy).rgb;return textureColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
var areaLightsLTC1SamplerSampler: sampler;var areaLightsLTC1Sampler: texture_2d<f32>;var areaLightsLTC2SamplerSampler: sampler;var areaLightsLTC2Sampler: texture_2d<f32>;fn computeAreaLighting(ltc1: texture_2d<f32>,ltc1Sampler:sampler,ltc2:texture_2d<f32>,ltc2Sampler:sampler,viewDirectionW: vec3f,vNormal:vec3f,vPosition:vec3f,lightPosition:vec3f,halfWidth:vec3f, halfHeight:vec3f,diffuseColor:vec3f,specularColor:vec3f,roughness:f32 )->lightingInfo
{var result: lightingInfo;var data: areaLightData=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc1Sampler,ltc2,ltc2Sampler,viewDirectionW,vNormal,vPosition,lightPosition,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
var fresnel:vec3f=( specularColor*data.Fresnel.x+( vec3f( 1.0 )-specularColor )*data.Fresnel.y );result.specular+=specularColor*fresnel*data.Specular;
#endif
result.diffuse+=diffuseColor*data.Diffuse;return result;}
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["lightsFragmentFunctionsWGSL",0,{name:t,shader:i}])},13420,e=>{"use strict";var r=e.i(33967);e.i(18989);let t="backgroundUboDeclaration",i=`uniform vPrimaryColor: vec4f;uniform vPrimaryColorShadow: vec4f;uniform vDiffuseInfos: vec2f;uniform vReflectionInfos: vec2f;uniform diffuseMatrix: mat4x4f;uniform reflectionMatrix: mat4x4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform fFovMultiplier: f32;uniform pointSize: f32;uniform shadowLevel: f32;uniform alpha: f32;uniform vBackgroundCenter: vec3f;uniform vReflectionControl: vec4f;uniform projectedGroundInfos: vec2f;
#include<sceneUboDeclaration>
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},23263,e=>{"use strict";var r=e.i(33967);e.i(13420),e.i(66911),e.i(94234),e.i(73547),e.i(4796),e.i(65977),e.i(94905),e.i(53444),e.i(27104),e.i(23393),e.i(13483);let t="intersectionFunctions",i=`fn diskIntersectWithBackFaceCulling(ro: vec3f,rd: vec3f,c: vec3f,r: f32)->f32 {var d: f32=rd.y;if(d>0.0) { return 1e6; }
var o: vec3f=ro-c;var t: f32=-o.y/d;var q: vec3f=o+rd*t;return select(1e6,t,(dot(q,q)<r*r));}
fn sphereIntersect(ro: vec3f,rd: vec3f,ce: vec3f,ra: f32)->vec2f {var oc: vec3f=ro-ce;var b: f32=dot(oc,rd);var c: f32=dot(oc,oc)-ra*ra;var h: f32=b*b-c;if(h<0.0) { return vec2f(-1.,-1.); }
h=sqrt(h);return vec2f(-b+h,-b-h);}
fn sphereIntersectFromOrigin(ro: vec3f,rd: vec3f,ra: f32)->vec2f {var b: f32=dot(ro,rd);var c: f32=dot(ro,ro)-ra*ra;var h: f32=b*b-c;if(h<0.0) { return vec2f(-1.,-1.); }
h=sqrt(h);return vec2f(-b+h,-b-h);}`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.i(94932),e.i(48835),e.i(51597),e.i(69219);let a="backgroundPixelShader",o=`#include<backgroundUboDeclaration>
#include<helperFunctions>
varying vPositionW: vec3f;
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif 
#ifdef MAINUV2 
varying vMainUV2: vec2f; 
#endif 
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vDiffuseUV: vec2f;
#endif
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE;
#endif
#ifndef SHADOWONLY
#define SHADOWONLY;
#endif
#include<imageProcessingDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
fn fresnelSchlickEnvironmentGGX(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
fn project(viewDirectionW: vec3f,eyePosition: vec3f)->vec3f {var radius: f32=uniforms.projectedGroundInfos.x;var height: f32=uniforms.projectedGroundInfos.y;var camDir: vec3f=-viewDirectionW;var skySphereDistance: f32=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;var skySpherePositionW: vec3f=eyePosition+camDir*skySphereDistance;var p: vec3f=normalize(skySpherePositionW);var upEyePosition=vec3f(eyePosition.x,eyePosition.y-height,eyePosition.z);var sIntersection: f32=sphereIntersectFromOrigin(upEyePosition,p,radius).x;var h: vec3f= vec3f(0.0,-height,0.0);var dIntersection: f32=diskIntersectWithBackFaceCulling(upEyePosition,p,h,radius);p=(upEyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(0.0,1.0,0.0);
#endif
var shadow: f32=1.;var globalShadow: f32=0.;var shadowLightCount: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
var reflectionColor: vec4f= vec4f(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
var reflectionVector: vec3f=project(viewDirectionW,scene.vEyePosition.xyz);reflectionVector= (uniforms.reflectionMatrix*vec4f(reflectionVector,1.)).xyz;
#else
var reflectionVector: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f=reflectionVector;
#else
var reflectionCoords: vec2f=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
var reflectionLOD: f32=uniforms.vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(vReflectionMicrosurfaceInfos.x)*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;reflectionColor=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#else
var lodReflectionNormalized: f32=saturate(reflectionLOD);var lodReflectionNormalizedDoubled: f32=lodReflectionNormalized*2.0;var reflectionSpecularMid: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
textureSample(reflectionrHighSampler,reflectionrHighSamplerSampler,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
textureSample(reflectionLowSampler,reflectionLowSamplerSampler,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
var reflectionSample: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor).rgb,reflectionColor.a);
#endif
#ifdef GAMMAREFLECTION
reflectionColor=vec4f(toLinearSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
#ifdef REFLECTIONBGR
reflectionColor=vec4f(reflectionColor.bgr,reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#endif
var diffuseColor: vec3f= vec3f(1.,1.,1.);var finalAlpha: f32=uniforms.alpha;
#ifdef DIFFUSE
var diffuseMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap=vec4f(toLinearSpaceVec3(diffuseMap.rgb),diffuseMap.a);
#endif
diffuseMap=vec4f(diffuseMap.rgb *uniforms.vDiffuseInfos.y,diffuseMap.a);
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
var colorBase: vec3f=diffuseColor;
#else
var colorBase: vec3f=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,vec3f(0.0));
#ifdef USERGBCOLOR
var finalColor: vec3f=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
var mainColor: vec3f=mix(uniforms.vPrimaryColorShadow.rgb,uniforms.vPrimaryColor.rgb,colorBase);
#else
var mainColor: vec3f=uniforms.vPrimaryColor.rgb;
#endif
var finalColor: vec3f=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
var reflectionAmount: vec3f=uniforms.vReflectionControl.xxx;var reflectionReflectance0: vec3f=uniforms.vReflectionControl.yyy;var reflectionReflectance90: vec3f=uniforms.vReflectionControl.zzz;var VdotN: f32=dot(normalize(scene.vEyePosition.xyz),normalW);var planarReflectionFresnel: vec3f=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
var reflectionDistanceFalloff: f32=1.0-saturate(length(vPositionW.xyz-uniforms.vBackgroundCenter)*uniforms.vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturateVec3(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
var viewAngleToFloor: f32=dot(normalW,normalize(scene.vEyePosition.xyz-uniforms.vBackgroundCenter));const startAngle: f32=0.1;var fadeFactor: f32=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*uniforms.shadowLevel,finalColor,globalShadow);
#endif
var color: vec4f= vec4f(finalColor,finalAlpha);
#else
var color: vec4f= vec4f(uniforms.vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*uniforms.alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color=vec4f(clamp(color.rgb,vec3f(0.),vec3f(30.0)),color.a);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb *color.a,color.a);
#endif
#ifdef NOISE
color=vec4f(color.rgb+dither(fragmentInputs.vPositionW.xy,0.5),color.a);color=max(color,vec4f(0.0));
#endif
fragmentOutputs.color=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[a]||(r.ShaderStore.ShadersStoreWGSL[a]=o),e.s(["backgroundPixelShaderWGSL",0,{name:a,shader:o}],23263)},3109,37585,84388,e=>{"use strict";var r=e.i(92835);class t extends r.AbstractSound{constructor(e,r){super(e,r)}get duration(){return this._options.duration}set duration(e){this._options.duration=e}get loopStart(){return this._options.loopStart}set loopStart(e){this._options.loopStart=e}get loopEnd(){return this._options.loopEnd}set loopEnd(e){this._options.loopEnd=e}get pitch(){return this._options.pitch}set pitch(e){this._options.pitch=e;let r=this._instances.values();for(let t=r.next();!t.done;t=r.next())t.value.pitch=e}get playbackRate(){return this._options.playbackRate}set playbackRate(e){this._options.playbackRate=e;let r=this._instances.values();for(let t=r.next();!t.done;t=r.next())t.value.playbackRate=e}play(e={}){if(5===this.state)return void this.resume();e.duration??(e.duration=this.duration),e.loop??(e.loop=this.loop),e.loopStart??(e.loopStart=this.loopStart),e.loopEnd??(e.loopEnd=this.loopEnd),e.startOffset??(e.startOffset=this.startOffset),e.volume??(e.volume=1),e.waitTime??(e.waitTime=0);let r=this._createInstance();this._beforePlay(r),r.play(e),this._afterPlay(r),this._stopExcessInstances()}stop(e={}){if(e.waitTime&&0<e.waitTime?this._setState(0):this._setState(1),this._instances)for(let r of Array.from(this._instances))r.stop(e)}}e.s(["StaticSound",0,t],37585);class i{constructor(e){this.engine=e}}e.s(["StaticSoundBuffer",0,i],84388);var a=e.i(35231);class o extends a._AbstractSoundInstance{}var n=e.i(73111),l=e.i(82985),s=e.i(73573),f=e.i(53961),c=e.i(93012);class d extends t{constructor(e,r,t){super(e,r),this._spatial=null,this._spatialAutoUpdate=!0,this._spatialMinUpdateTime=0,this._stereo=null,"boolean"==typeof t.spatialAutoUpdate&&(this._spatialAutoUpdate=t.spatialAutoUpdate),"number"==typeof t.spatialMinUpdateTime&&(this._spatialMinUpdateTime=t.spatialMinUpdateTime),this._options={autoplay:t.autoplay??!1,duration:t.duration??0,loop:t.loop??!1,loopEnd:t.loopEnd??0,loopStart:t.loopStart??0,maxInstances:t.maxInstances??1/0,pitch:t.pitch??0,playbackRate:t.playbackRate??1,startOffset:t.startOffset??0},this._subGraph=new d._SubGraph(this)}async _init(e,r){this._audioContext=this.engine._audioContext,e instanceof u?this._buffer=e:("string"==typeof e||Array.isArray(e)||e instanceof ArrayBuffer||e instanceof AudioBuffer)&&(this._buffer=await this.engine.createSoundBufferAsync(e,r)),r.outBus?this.outBus=r.outBus:(await this.engine.isReadyPromise,this.outBus=this.engine.defaultMainBus),await this._subGraph.init(r),(0,n._HasSpatialAudioOptions)(r)&&this._initSpatialProperty(),r.autoplay&&this.play(),this.engine._addNode(this)}get buffer(){return this._buffer}get _inNode(){return this._subGraph._inNode}get _outNode(){return this._subGraph._outNode}get spatial(){return this._spatial?this._spatial:this._initSpatialProperty()}get stereo(){return this._stereo??(this._stereo=new l._StereoAudio(this._subGraph))}dispose(){super.dispose(),this._spatial?.dispose(),this._spatial=null,this._stereo=null,this._subGraph.dispose(),this.engine._removeNode(this)}getClassName(){return"_WebAudioStaticSound"}_createInstance(){return new p(this,this._options)}_connect(e){return!!super._connect(e)&&(e._inNode&&this._outNode?.connect(e._inNode),!0)}_disconnect(e){return!!super._disconnect(e)&&(e._inNode&&this._outNode?.disconnect(e._inNode),!0)}_initSpatialProperty(){return this._spatial||(this._spatial=new c._SpatialWebAudio(this._subGraph,this._spatialAutoUpdate,this._spatialMinUpdateTime)),this._spatial}}d._SubGraph=class extends f._WebAudioBusAndSoundSubGraph{get _downstreamNodes(){return this._owner._downstreamNodes??null}get _upstreamNodes(){return this._owner._upstreamNodes??null}};class u extends i{constructor(e){super(e)}async _init(e,r){e instanceof AudioBuffer?this._audioBuffer=e:"string"==typeof e?await this._initFromUrl(e):Array.isArray(e)?await this._initFromUrls(e,r.skipCodecCheck??!1):e instanceof ArrayBuffer&&await this._initFromArrayBuffer(e)}get channelCount(){return this._audioBuffer.numberOfChannels}get duration(){return this._audioBuffer.duration}get length(){return this._audioBuffer.length}get sampleRate(){return this._audioBuffer.sampleRate}async _initFromArrayBuffer(e){this._audioBuffer=await this.engine._audioContext.decodeAudioData(e)}async _initFromUrl(e){e=(0,s._CleanUrl)(e),await this._initFromArrayBuffer(await (await fetch(e)).arrayBuffer())}async _initFromUrls(e,r){for(let t of e){if(r)await this._initFromUrl(t);else{let e=t.match(s._FileExtensionRegex),r=e?.at(1);if(r&&this.engine.isFormatValid(r))try{await this._initFromUrl(t)}catch(e){r&&0<r.length&&this.engine.flagInvalidFormat(r)}}if(this._audioBuffer)break}}}class p extends o{constructor(e,r){super(e),this._enginePlayTime=0,this._enginePauseTime=0,this._sourceNode=null,this._onEnded=()=>{this._enginePlayTime=0,this.onEndedObservable.notifyObservers(this),this._deinitSourceNode()},this._onEngineStateChanged=()=>{"running"===this.engine.state&&(this._options.loop&&2===this.state&&this.play(),this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged))},this._options=r,this._volumeNode=new GainNode(e._audioContext),this._initSourceNode()}get currentTime(){if(1===this._state)return 0;let e=5===this._state?0:this.engine.currentTime-this._enginePlayTime;return this._enginePauseTime+e+this._options.startOffset}set currentTime(e){let r=2===this._state||3===this._state;r&&(this.stop(),this._deinitSourceNode()),this._options.startOffset=e,r&&this.play()}get _outNode(){return this._volumeNode}set pitch(e){this._sourceNode&&this.engine._setAudioParam(this._sourceNode.detune,e)}set playbackRate(e){this._sourceNode&&this.engine._setAudioParam(this._sourceNode.playbackRate,e)}get startTime(){return 1===this._state?0:this._enginePlayTime}dispose(){super.dispose(),this._sourceNode=null,this.stop(),this._deinitSourceNode(),this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged)}getClassName(){return"_WebAudioStaticSoundInstance"}play(e={}){if(3===this._state)return;void 0!==e.duration&&(this._options.duration=e.duration),void 0!==e.loop&&(this._options.loop=e.loop),void 0!==e.loopStart&&(this._options.loopStart=e.loopStart),void 0!==e.loopEnd&&(this._options.loopEnd=e.loopEnd),void 0!==e.startOffset&&(this._options.startOffset=e.startOffset);let r=this._options.startOffset;5===this._state&&(r+=this.currentTime,r%=this._sound.buffer.duration),this._enginePlayTime=this.engine.currentTime+(e.waitTime??0),this._volumeNode.gain.value=e.volume??1,this._initSourceNode(),"running"===this.engine.state?(this._setState(3),this._sourceNode?.start(this._enginePlayTime,r,this._options.duration>0?this._options.duration:void 0)):this._options.loop&&(this._setState(2),this.engine.stateChangedObservable.add(this._onEngineStateChanged))}pause(){5!==this._state&&(this._setState(5),this._enginePauseTime+=this.engine.currentTime-this._enginePlayTime,this._sourceNode?.stop(),this._deinitSourceNode())}resume(){5===this._state&&this.play()}stop(e={}){if(1===this._state)return;this._setState(1);let r=this.engine.currentTime+(e.waitTime??0);this._sourceNode?.stop(r),this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged)}_connect(e){return!!super._connect(e)&&(e instanceof d&&e._inNode&&this._outNode?.connect(e._inNode),!0)}_disconnect(e){return!!super._disconnect(e)&&(e instanceof d&&e._inNode&&this._outNode?.disconnect(e._inNode),!0)}_deinitSourceNode(){if(this._sourceNode){if(!this._disconnect(this._sound))throw Error("Disconnect failed");this._sourceNode.disconnect(this._volumeNode),this._sourceNode.removeEventListener("ended",this._onEnded),this._sourceNode=null}}_initSourceNode(){if(!this._sourceNode&&(this._sourceNode=new AudioBufferSourceNode(this._sound._audioContext,{buffer:this._sound.buffer._audioBuffer}),this._sourceNode.addEventListener("ended",this._onEnded,{once:!0}),this._sourceNode.connect(this._volumeNode),!this._connect(this._sound)))throw Error("Connect failed");let e=this._sourceNode;e.detune.value=this._sound.pitch,e.loop=this._options.loop,e.loopEnd=this._options.loopEnd,e.loopStart=this._options.loopStart,e.playbackRate.value=this._sound.playbackRate}}e.s(["_WebAudioStaticSound",0,d,"_WebAudioStaticSoundBuffer",0,u],3109)},46763,e=>{"use strict";var r=e.i(33967);e.i(10050),e.i(42002),e.i(73043),e.i(66911),e.i(34282),e.i(52813),e.i(15906),e.i(74404),e.i(81558),e.i(33554),e.i(55685),e.i(86463),e.i(55112),e.i(7874),e.i(81352),e.i(34738),e.i(27104),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583),e.i(93875),e.i(64170),e.i(19925),e.i(51814),e.i(50328),e.i(8882),e.i(75579),e.i(75902),e.i(6474);let t="pbrVertexShader",i=`#include<pbrUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASEWEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)
#endif
varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vertexOutputs.vClipSpacePosition=vertexOutputs.position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);
#endif
#ifndef UV1
var uvUpdated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASEWEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["pbrVertexShaderWGSL",0,{name:t,shader:i}])},63072,e=>{"use strict";var r=e.i(91500),t=e.i(61724),i=e.i(56363),a=e.i(52656),o=e.i(99839),n=e.i(34960);class l extends r.FlowGraphCachedOperationBlock{constructor(e,r,i){super(r,i);for(let r=0;r<e;r++)this.registerDataInput(`input_${r}`,t.RichTypeNumber,0)}}class s extends i.FlowGraphBlock{constructor(e,r,i){super(i),this.registerDataInput("input",r);for(let r=0;r<e;r++)this.registerDataOutput(`output_${r}`,t.RichTypeNumber,0)}}class f extends l{constructor(e){super(2,t.RichTypeVector2,e)}_doOperation(e){e._hasExecutionVariable(this,"cachedVector")||e._setExecutionVariable(this,"cachedVector",new a.Vector2);let r=e._getExecutionVariable(this,"cachedVector",null);return r.set(this.getDataInput("input_0").getValue(e),this.getDataInput("input_1").getValue(e)),r}getClassName(){return"FlowGraphCombineVector2Block"}}(0,o.RegisterClass)("FlowGraphCombineVector2Block",f);class c extends l{constructor(e){super(3,t.RichTypeVector3,e)}_doOperation(e){e._hasExecutionVariable(this,"cachedVector")||e._setExecutionVariable(this,"cachedVector",new a.Vector3);let r=e._getExecutionVariable(this,"cachedVector",null);return r.set(this.getDataInput("input_0").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_2").getValue(e)),r}getClassName(){return"FlowGraphCombineVector3Block"}}(0,o.RegisterClass)("FlowGraphCombineVector3Block",c);class d extends l{constructor(e){super(4,t.RichTypeVector4,e)}_doOperation(e){e._hasExecutionVariable(this,"cachedVector")||e._setExecutionVariable(this,"cachedVector",new a.Vector4);let r=e._getExecutionVariable(this,"cachedVector",null);return r.set(this.getDataInput("input_0").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_3").getValue(e)),r}getClassName(){return"FlowGraphCombineVector4Block"}}(0,o.RegisterClass)("FlowGraphCombineVector4Block",d);class u extends l{constructor(e){super(16,t.RichTypeMatrix,e)}_doOperation(e){e._hasExecutionVariable(this,"cachedMatrix")||e._setExecutionVariable(this,"cachedMatrix",new a.Matrix);let r=e._getExecutionVariable(this,"cachedMatrix",null);return this.config?.inputIsColumnMajor?r.set(this.getDataInput("input_0").getValue(e),this.getDataInput("input_4").getValue(e),this.getDataInput("input_8").getValue(e),this.getDataInput("input_12").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_5").getValue(e),this.getDataInput("input_9").getValue(e),this.getDataInput("input_13").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_6").getValue(e),this.getDataInput("input_10").getValue(e),this.getDataInput("input_14").getValue(e),this.getDataInput("input_3").getValue(e),this.getDataInput("input_7").getValue(e),this.getDataInput("input_11").getValue(e),this.getDataInput("input_15").getValue(e)):r.set(this.getDataInput("input_0").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_3").getValue(e),this.getDataInput("input_4").getValue(e),this.getDataInput("input_5").getValue(e),this.getDataInput("input_6").getValue(e),this.getDataInput("input_7").getValue(e),this.getDataInput("input_8").getValue(e),this.getDataInput("input_9").getValue(e),this.getDataInput("input_10").getValue(e),this.getDataInput("input_11").getValue(e),this.getDataInput("input_12").getValue(e),this.getDataInput("input_13").getValue(e),this.getDataInput("input_14").getValue(e),this.getDataInput("input_15").getValue(e)),r}getClassName(){return"FlowGraphCombineMatrixBlock"}}(0,o.RegisterClass)("FlowGraphCombineMatrixBlock",u),(0,o.RegisterClass)("FlowGraphCombineMatrix2DBlock",class extends l{constructor(e){super(4,t.RichTypeMatrix2D,e)}_doOperation(e){e._hasExecutionVariable(this,"cachedMatrix")||e._setExecutionVariable(this,"cachedMatrix",new n.FlowGraphMatrix2D);let r=e._getExecutionVariable(this,"cachedMatrix",null),t=this.config?.inputIsColumnMajor?[this.getDataInput("input_0").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_3").getValue(e)]:[this.getDataInput("input_0").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_3").getValue(e)];return r.fromArray(t),r}getClassName(){return"FlowGraphCombineMatrix2DBlock"}}),(0,o.RegisterClass)("FlowGraphCombineMatrix3DBlock",class extends l{constructor(e){super(9,t.RichTypeMatrix3D,e)}_doOperation(e){e._hasExecutionVariable(this,"cachedMatrix")||e._setExecutionVariable(this,"cachedMatrix",new n.FlowGraphMatrix3D);let r=e._getExecutionVariable(this,"cachedMatrix",null),t=this.config?.inputIsColumnMajor?[this.getDataInput("input_0").getValue(e),this.getDataInput("input_3").getValue(e),this.getDataInput("input_6").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_4").getValue(e),this.getDataInput("input_7").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_5").getValue(e),this.getDataInput("input_8").getValue(e)]:[this.getDataInput("input_0").getValue(e),this.getDataInput("input_1").getValue(e),this.getDataInput("input_2").getValue(e),this.getDataInput("input_3").getValue(e),this.getDataInput("input_4").getValue(e),this.getDataInput("input_5").getValue(e),this.getDataInput("input_6").getValue(e),this.getDataInput("input_7").getValue(e),this.getDataInput("input_8").getValue(e)];return r.fromArray(t),r}getClassName(){return"FlowGraphCombineMatrix3DBlock"}});class p extends s{constructor(e){super(2,t.RichTypeVector2,e)}_updateOutputs(e){let r=this.getDataInput("input")?.getValue(e);r||(r=a.Vector2.Zero(),this.getDataInput("input").setValue(r,e)),this.getDataOutput("output_0").setValue(r.x,e),this.getDataOutput("output_1").setValue(r.y,e)}getClassName(){return"FlowGraphExtractVector2Block"}}(0,o.RegisterClass)("FlowGraphExtractVector2Block",p);class m extends s{constructor(e){super(3,t.RichTypeVector3,e)}_updateOutputs(e){let r=this.getDataInput("input")?.getValue(e);r||(r=a.Vector3.Zero(),this.getDataInput("input").setValue(r,e)),this.getDataOutput("output_0").setValue(r.x,e),this.getDataOutput("output_1").setValue(r.y,e),this.getDataOutput("output_2").setValue(r.z,e)}getClassName(){return"FlowGraphExtractVector3Block"}}(0,o.RegisterClass)("FlowGraphExtractVector3Block",m);class v extends s{constructor(e){super(4,t.RichTypeVector4,e)}_updateOutputs(e){let r=this.getDataInput("input")?.getValue(e);r||(r=a.Vector4.Zero(),this.getDataInput("input").setValue(r,e)),this.getDataOutput("output_0").setValue(r.x,e),this.getDataOutput("output_1").setValue(r.y,e),this.getDataOutput("output_2").setValue(r.z,e),this.getDataOutput("output_3").setValue(r.w,e)}getClassName(){return"FlowGraphExtractVector4Block"}}(0,o.RegisterClass)("FlowGraphExtractVector4Block",v);class S extends s{constructor(e){super(16,t.RichTypeMatrix,e)}_updateOutputs(e){let r=this.getDataInput("input")?.getValue(e);r||(r=a.Matrix.Identity(),this.getDataInput("input").setValue(r,e));for(let t=0;t<16;t++)this.getDataOutput(`output_${t}`).setValue(r.m[t],e)}getClassName(){return"FlowGraphExtractMatrixBlock"}}(0,o.RegisterClass)("FlowGraphExtractMatrixBlock",S),(0,o.RegisterClass)("FlowGraphExtractMatrix2DBlock",class extends s{constructor(e){super(4,t.RichTypeMatrix2D,e)}_updateOutputs(e){let r=this.getDataInput("input")?.getValue(e);r||(r=new n.FlowGraphMatrix2D,this.getDataInput("input").setValue(r,e));for(let t=0;t<4;t++)this.getDataOutput(`output_${t}`).setValue(r.m[t],e)}getClassName(){return"FlowGraphExtractMatrix2DBlock"}}),(0,o.RegisterClass)("FlowGraphExtractMatrix3DBlock",class extends s{constructor(e){super(9,t.RichTypeMatrix3D,e)}_updateOutputs(e){let r=this.getDataInput("input")?.getValue(e);r||(r=new n.FlowGraphMatrix3D,this.getDataInput("input").setValue(r,e));for(let t=0;t<9;t++)this.getDataOutput(`output_${t}`).setValue(r.m[t],e)}getClassName(){return"FlowGraphExtractMatrix3DBlock"}}),e.s(["FlowGraphCombineMatrixBlock",0,u,"FlowGraphCombineVector2Block",0,f,"FlowGraphCombineVector3Block",0,c,"FlowGraphCombineVector4Block",0,d,"FlowGraphExtractMatrixBlock",0,S,"FlowGraphExtractVector2Block",0,p,"FlowGraphExtractVector3Block",0,m,"FlowGraphExtractVector4Block",0,v])},49375,e=>{"use strict";var r=e.i(33967);let t="iblShadowVoxelTracingPixelShader",i=`#define PI 3.1415927
varying vUV: vec2f;
#define DISABLE_UNIFORMITY_ANALYSIS
var depthSampler: texture_2d<f32>;var worldNormalSampler : texture_2d<f32>;var blueNoiseSampler: texture_2d<f32>;var icdfSamplerSampler: sampler;var icdfSampler: texture_2d<f32>;var voxelGridSamplerSampler: sampler;var voxelGridSampler: texture_3d<f32>;
#ifdef COLOR_SHADOWS
var iblSamplerSampler: sampler;var iblSampler: texture_cube<f32>;
#endif
uniform shadowParameters: vec4f;
#define SHADOWdirs uniforms.shadowParameters.x
#define SHADOWframe uniforms.shadowParameters.y
#define SHADOWenvRot uniforms.shadowParameters.w
uniform voxelBiasParameters : vec4f;
#define highestMipLevel uniforms.voxelBiasParameters.z
uniform sssParameters: vec4f;
#define SSSsamples uniforms.sssParameters.x
#define SSSstride uniforms.sssParameters.y
#define SSSmaxDistance uniforms.sssParameters.z
#define SSSthickness uniforms.sssParameters.w
uniform shadowOpacity: vec4f;uniform projMtx: mat4x4f;uniform viewMtx: mat4x4f;uniform invProjMtx: mat4x4f;uniform invViewMtx: mat4x4f;uniform wsNormalizationMtx: mat4x4f;uniform invVPMtx: mat4x4f;
#define PI 3.1415927
#define GOLD 0.618034
struct AABB3f {m_min: vec3f,
m_max: vec3f,};struct Ray {orig: vec3f,
dir: vec3f,
dir_rcp: vec3f,
t_min: f32,
t_max: f32,};fn make_ray(origin: vec3f,direction: vec3f,tmin: f32,
tmax: f32)->Ray {var ray: Ray;ray.orig=origin;ray.dir=direction;ray.dir_rcp=1.0f/direction;ray.t_min=tmin;ray.t_max=tmax;return ray;}
fn ray_box_intersection(aabb: AABB3f,ray: Ray ,
distance_near: ptr<function,f32>,distance_far: ptr<function,f32>)->bool{var tbot: vec3f=ray.dir_rcp*(aabb.m_min-ray.orig);var ttop: vec3f=ray.dir_rcp*(aabb.m_max-ray.orig);var tmin: vec3f=min(ttop,tbot);var tmax: vec3f=max(ttop,tbot);*distance_near=max(ray.t_min,max(tmin.x,max(tmin.y,tmin.z)));*distance_far=min(ray.t_max,min(tmax.x,min(tmax.y,tmax.z)));return *distance_near<=*distance_far;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
struct VoxelMarchDiagnosticInfo {heat: f32,
voxel_intersect_coords: vec3i,};
#endif
fn hash(i: u32)->u32 {var temp=i ^ (i>>16u);temp*=0x7FEB352Du;temp ^= temp>>15u;temp*=0x846CA68Bu;temp ^= temp>>16u;return temp;}
fn uintBitsToFloat(x: u32)->f32 {return bitcast<f32>(x);}
fn uint2float(i: u32)->f32 {return uintBitsToFloat(0x3F800000u | (i>>9u))-1.0;}
fn uv_to_normal(uv: vec2f)->vec3f {var N: vec3f;var uvRange: vec2f=uv;var theta: f32=uvRange.x*2.0*PI;var phi: f32=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
fn plasticSequence(rstate: u32)->vec2f {return vec2f(uint2float(rstate*3242174889u),
uint2float(rstate*2447445414u));}
fn goldenSequence(rstate: u32)->f32 {return uint2float(rstate*2654435769u);}
fn distanceSquared(a: vec2f,b: vec2f)->f32 {var diff: vec2f=a-b;return dot(diff,diff);}
fn genTB(N: vec3f,T: ptr<function,vec3f>,B: ptr<function,vec3f>) {var s: f32=select(1.0,-1.0,N.z<0.0);var a: f32=-1.0/(s+N.z);var b: f32=N.x*N.y*a;*T= vec3f(1.0+s*N.x*N.x*a,s*b,-s*N.x);*B= vec3f(b,s+N.y*N.y*a,-N.y);}
fn lessThan(x: vec3f,y: vec3f)->vec3<bool> {return x<y;}
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fn anyHitVoxels(ray_vs: Ray,
voxel_march_diagnostic_info: ptr<function,VoxelMarchDiagnosticInfo>)->bool {
#else
fn anyHitVoxels(ray_vs: Ray)->bool {
#endif
var stack=array<i32,24>(); 
var invD: vec3f=ray_vs.dir_rcp;var D: vec3f=ray_vs.dir;var O: vec3f=ray_vs.orig;var negD=vec3i(lessThan(D, vec3f(0,0,0)));var voxel0: i32=negD.x | (negD.y<<1) | (negD.z<<2);var t0: vec3f=-O*invD;var t1=(vec3f(1.0)-O)*invD;var maxLod: i32= i32(highestMipLevel);var stackLevel: i32=0;
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
var steps: u32=0u;
#endif
stack[stackLevel]=maxLod<<24;stackLevel++;while (stackLevel>0) {stackLevel=stackLevel-1;var elem: i32=stack[stackLevel];var Coords: vec4i =
vec4i(elem & 0xFF,(elem>>8) & 0xFF,(elem>>16) & 0xFF,elem>>24);if (Coords.w==0) {
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
*voxel_march_diagnostic_info.heat= f32(steps)/24.0;
#endif
return true;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
++steps;
#endif
var invRes: f32=exp2(f32(Coords.w-maxLod));var bbmin: vec3f=invRes*vec3f(Coords.xyz+negD);var bbmax: vec3f=invRes*vec3f(Coords.xyz-negD+vec3i(1));var mint: vec3f=mix(t0,t1,bbmin);var maxt: vec3f=mix(t0,t1,bbmax);var midt: vec3f=0.5*(mint+maxt);mint.x=max(0.0,mint.x);midt.x=max(0.0,midt.x);var nodeMask: u32= u32(
round(textureLoad(voxelGridSampler,Coords.xyz,Coords.w).x*255.0));Coords.w--;var voxelBit: u32=u32(voxel0);Coords=vec4i((Coords.xyz<<vec3u(1))+negD,Coords.w);var packedCoords: i32 =
Coords.x | (Coords.y<<8) | (Coords.z<<16) | (Coords.w<<24);if (max(mint.x,max(mint.y,mint.z))<min(midt.x,min(midt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(mint.y,mint.z))<min(maxt.x,min(midt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(midt.y,mint.z))<min(maxt.x,min(maxt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(midt.y,mint.z))<min(midt.x,min(maxt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x4;packedCoords ^= 0x10000;if (max(mint.x,max(midt.y,midt.z))<min(midt.x,min(maxt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(midt.y,midt.z))<min(maxt.x,min(maxt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(mint.y,midt.z))<min(maxt.x,min(midt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(mint.y,midt.z))<min(midt.x,min(midt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
*voxel_march_diagnostic_info.heat= f32(steps)/24.0;
#endif
return false;}
fn linearizeDepth(depth: f32,near: f32,far: f32)->f32 {return (near*far)/(far-depth*(far-near));}
fn screenSpaceShadow(csOrigin: vec3f,csDirection: vec3f,csZBufferSize: vec2f,
nearPlaneZ: f32,farPlaneZ: f32,noise: f32)->f32 {
#ifdef RIGHT_HANDED
var csZDir : f32=-1.0;
#else 
var csZDir : f32=1.0;
#endif
var ssSamples: f32=SSSsamples;var ssMaxDist: f32=SSSmaxDistance;var ssStride: f32=SSSstride;var ssThickness: f32=SSSthickness;var rayLength: f32 =
select(ssMaxDist,(nearPlaneZ-csOrigin.z)/csDirection.z,
csZDir*(csOrigin.z+ssMaxDist*csDirection.z)<csZDir*nearPlaneZ);var csEndPoint: vec3f=csOrigin+rayLength*csDirection;var H0: vec4f=uniforms.projMtx*vec4f(csOrigin,1.0);var H1: vec4f=uniforms.projMtx*vec4f(csEndPoint,1.0);var Z0=vec2f(csOrigin.z ,1.0)/H0.w;var Z1=vec2f(csEndPoint.z,1.0)/H1.w;var P0=csZBufferSize*(0.5*H0.xy*Z0.y+0.5);var P1=csZBufferSize*(0.5*H1.xy*Z1.y+0.5);P1+= vec2f(select(0.0,0.01,distanceSquared(P0,P1)<0.0001));var delta: vec2f=P1-P0;var permute: bool=false;if (abs(delta.x)<abs(delta.y)) {permute=true;P0=P0.yx;P1=P1.yx;delta=delta.yx;}
var stepDirection: f32=sign(delta.x);var invdx: f32=stepDirection/delta.x;var dP: vec2f=ssStride* vec2f(stepDirection,invdx*delta.y);var dZ: vec2f=ssStride*invdx*(Z1-Z0);var opacity: f32=0.0;var P: vec2f=P0+noise*dP;var Z: vec2f=Z0+noise*dZ;var end: f32=P1.x*stepDirection;var rayZMax=csZDir*Z.x/Z.y;var sceneDepth=rayZMax;Z+=dZ;for (var stepCount: f32=0.0; 
opacity<1.0 && P.x*stepDirection<end && sceneDepth>0.0 && stepCount<ssSamples;stepCount+=1) { 
var coords=vec2i(select(P,P.yx,permute));sceneDepth=textureLoad(depthSampler,coords,0).x;sceneDepth=linearizeDepth(sceneDepth,nearPlaneZ,farPlaneZ);sceneDepth=csZDir*sceneDepth;if (sceneDepth<=0.0) {break;}
var rayZMin: f32=rayZMax;rayZMax=csZDir*Z.x/Z.y;opacity+=max(opacity,step(rayZMax,sceneDepth+ssThickness)*step(sceneDepth,rayZMin));P+=dP;Z+=dZ;}
return opacity;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fn voxelShadow(wsOrigin: vec3f,wsDirection: vec3f,wsNormal: vec3f,
DitherNoise: vec2f,
voxel_march_diagnostic_info: ptr<function,VoxelMarchDiagnosticInfo>)->f32 {
#else
fn voxelShadow(wsOrigin: vec3f,wsDirection: vec3f,wsNormal: vec3f,
DitherNoise: vec2f)->f32 {
#endif
var vxResolution: f32=f32(textureDimensions(voxelGridSampler,0).x);var T: vec3f;var B: vec3f;genTB(wsDirection,&T,&B);var DitherXY: vec2f=sqrt(DitherNoise.x)* vec2f(cos(2.0*PI*DitherNoise.y),
sin(2.0*PI*DitherNoise.y));var Dithering : vec3f=(uniforms.voxelBiasParameters.x*wsNormal +
uniforms.voxelBiasParameters.y*wsDirection +
DitherXY.x*T+DitherXY.y*B) /
vxResolution;var O: vec3f=0.5*wsOrigin+0.5+Dithering;var ray_vs=make_ray(O,wsDirection,0.0,10.0);var voxel_aabb: AABB3f;voxel_aabb.m_min=vec3f(0);voxel_aabb.m_max=vec3f(1);var near: f32=0;var far: f32=0;if (!ray_box_intersection(voxel_aabb,ray_vs,&near,&far)) {return 0.0;}
ray_vs.t_min=max(ray_vs.t_min,near);ray_vs.t_max=min(ray_vs.t_max,far);
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
return select(0.0f,1.0f,anyHitVoxels(ray_vs,voxel_march_diagnostic_info));
#else
return select(0.0f,1.0f,anyHitVoxels(ray_vs));
#endif
}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var nbDirs=u32(SHADOWdirs);var frameId=u32(SHADOWframe);var envRot: f32=SHADOWenvRot;var Resolution: vec2f= vec2f(textureDimensions(depthSampler,0));var currentPixel=vec2i(fragmentInputs.vUV*Resolution);var GlobalIndex =
(frameId*u32(Resolution.y)+u32(currentPixel.y))*u32(Resolution.x) +
u32(currentPixel.x);var N : vec3f=textureLoad(worldNormalSampler,currentPixel,0).xyz;if (length(N)<0.01) {fragmentOutputs.color=vec4f(1.0,1.0,0.0,1.0);return fragmentOutputs;}
var normalizedRotation: f32=envRot/(2.0*PI);var depth : f32=textureLoad(depthSampler,currentPixel,0).x;
#ifndef IS_NDC_HALF_ZRANGE
depth=depth*2.0-1.0;
#endif
var temp : vec2f=(vec2f(currentPixel)+vec2f(0.5))*2.0/Resolution -
vec2f(1.0);var VP : vec4f=uniforms.invProjMtx*vec4f(temp.x,-temp.y,depth,1.0);VP/=VP.w;N=normalize(N);var noise : vec3f=textureLoad(blueNoiseSampler,currentPixel & vec2i(0xFF),0).xyz;noise.z=fract(noise.z+goldenSequence(frameId*nbDirs));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
var heat: f32=0.0f;
#endif
var shadowAccum: f32=0.001;var specShadowAccum: f32=0.001;var sampleWeight : f32=0.001;
#ifdef COLOR_SHADOWS
var totalLight: vec3f=vec3f(0.001);var shadowedLight: vec3f=vec3f(0.0);
#endif
for (var i: u32=0; i<nbDirs; i++) {var dirId: u32=nbDirs*GlobalIndex+i;var L: vec4f;var T: vec2f;{var r: vec2f=plasticSequence(frameId*nbDirs+i);r=fract(r+ vec2f(2.0)*abs(noise.xy- vec2f(0.5)));T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2f(r.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2f(T.x,r.y),0.0).y;L= vec4f(uv_to_normal(vec2f(T.x-normalizedRotation,T.y)),0);
#ifndef RIGHT_HANDED
L.z*=-1.0;
#endif
}
#ifdef COLOR_SHADOWS
var lightDir: vec3f=uv_to_normal(vec2f(1.0-fract(T.x+0.25),T.y));var ibl: vec3f=textureSampleLevel(iblSampler,iblSamplerSampler,lightDir,0.0).xyz;var pdf: f32=textureSampleLevel(icdfSampler,icdfSamplerSampler,T,0.0).z;
#endif
var cosNL: f32=dot(N,L.xyz);var opacity: f32=0.0;if (cosNL>0.0) {var VP2: vec4f=VP;VP2.y*=-1.0;var unormWP : vec4f=uniforms.invViewMtx*VP2;var WP: vec3f=(uniforms.wsNormalizationMtx*unormWP).xyz;var vxNoise: vec2f=vec2f(uint2float(hash(dirId*2)),uint2float(hash(dirId*2+1)));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
VoxelMarchDiagnosticInfo voxel_march_diagnostic_info;opacity=max(opacity,
uniforms.shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise,
voxel_march_diagnostic_info));heat+=voxel_march_diagnostic_info.heat;
#else
opacity =
max(opacity,uniforms.shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise));
#endif
var VL : vec3f=(uniforms.viewMtx*L).xyz;
#ifdef RIGHT_HANDED
var nearPlaneZ: f32=-2.0*uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]-1.0); 
var farPlaneZ: f32=-uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]+1.0);
#else
var nearPlaneZ: f32=-2.0*uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]+1.0); 
var farPlaneZ: f32=-uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]-1.0);
#endif
var ssShadow: f32=uniforms.shadowOpacity.y *
screenSpaceShadow(VP2.xyz,VL,Resolution,nearPlaneZ,farPlaneZ,
abs(2.0*noise.z-1.0));opacity=max(opacity,ssShadow);
#ifdef COLOR_SHADOWS
var light: vec3f=select(vec3f(0.0),vec3f(cosNL)/vec3f(pdf)*ibl,pdf>1e-6);shadowedLight+=light*opacity;totalLight+=light;
#else
var rcos: f32=1.0-cosNL;shadowAccum+=(1.0-opacity*(1.0-pow(rcos,8.0)));sampleWeight+=1.0;var VR : vec3f=abs((uniforms.viewMtx*vec4f(reflect(-L.xyz,N),0.0)).xyz);specShadowAccum+=max(1.0-(opacity*pow(VR.z,8.0)),0.0);
#endif
}
noise.z=fract(noise.z+GOLD);}
#ifdef COLOR_SHADOWS
var shadow: vec3f=(totalLight-shadowedLight)/totalLight;var maxShadow: f32=max(max(shadow.x,max(shadow.y,shadow.z)),1.0);fragmentOutputs.color=vec4f(shadow/maxShadow,1.0);
#else
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fragmentOutputs.color =
vec4f(shadowAccum/sampleWeight,specShadowAccum/sampleWeight,heat/sampleWeight,1.0);
#else
fragmentOutputs.color=vec4f(shadowAccum/sampleWeight,specShadowAccum/sampleWeight,0.0,1.0);
#endif
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblShadowVoxelTracingPixelShaderWGSL",0,{name:t,shader:i}])},91500,e=>{"use strict";var r=e.i(56363),t=e.i(61724);let i="cachedOperationValue",a="cachedExecutionId";class o extends r.FlowGraphBlock{constructor(e,r){super(r),this.value=this.registerDataOutput("value",e),this.isValid=this.registerDataOutput("isValid",t.RichTypeBoolean)}_updateOutputs(e){let r=e._getExecutionVariable(this,a,-1),t=e._getExecutionVariable(this,i,null);if(null!=t&&r===e.executionId)this.isValid.setValue(!0,e),this.value.setValue(t,e);else try{let r=this._doOperation(e);if(null==r)return void this.isValid.setValue(!1,e);e._setExecutionVariable(this,i,r),e._setExecutionVariable(this,a,e.executionId),this.value.setValue(r,e),this.isValid.setValue(!0,e)}catch(r){this.isValid.setValue(!1,e)}}}e.s(["FlowGraphCachedOperationBlock",0,o])},98825,e=>{"use strict";var r=e.i(91500);class t extends r.FlowGraphCachedOperationBlock{constructor(e,r,t,i,a){super(r,a),this._operation=t,this._className=i,this.a=this.registerDataInput("a",e)}_doOperation(e){return this._operation(this.a.getValue(e))}getClassName(){return this._className}}e.s(["FlowGraphUnaryOperationBlock",0,t])},54798,e=>{"use strict";var r=e.i(91500);class t extends r.FlowGraphCachedOperationBlock{constructor(e,r,t,i,a,o){super(t,o),this._operation=i,this._className=a,this.a=this.registerDataInput("a",e),this.b=this.registerDataInput("b",r)}_doOperation(e){let r=this.a.getValue(e),t=this.b.getValue(e);return this._operation(r,t)}getClassName(){return this._className}}e.s(["FlowGraphBinaryOperationBlock",0,t])},36908,e=>{"use strict";var r=e.i(91500);class t extends r.FlowGraphCachedOperationBlock{constructor(e,r,t,i,a,o,n){super(i,n),this._operation=a,this._className=o,this.a=this.registerDataInput("a",e),this.b=this.registerDataInput("b",r),this.c=this.registerDataInput("c",t)}_doOperation(e){return this._operation(this.a.getValue(e),this.b.getValue(e),this.c.getValue(e))}getClassName(){return this._className}}e.s(["FlowGraphTernaryOperationBlock",0,t])},14778,e=>{"use strict";var r=e.i(61724),t=e.i(99839),i=e.i(54798),a=e.i(98825),o=e.i(52656),n=e.i(36908),l=e.i(59637);class s extends a.FlowGraphUnaryOperationBlock{constructor(e){super(r.RichTypeAny,r.RichTypeNumber,e=>this._polymorphicLength(e),"FlowGraphLengthBlock",e)}_polymorphicLength(e){switch((0,l._getClassNameOf)(e)){case"Vector2":case"Vector3":case"Vector4":case"Quaternion":return e.length();default:throw Error(`Cannot compute length of value ${e}`)}}}(0,t.RegisterClass)("FlowGraphLengthBlock",s);class f extends a.FlowGraphUnaryOperationBlock{constructor(e){super(r.RichTypeAny,r.RichTypeAny,e=>this._polymorphicNormalize(e),"FlowGraphNormalizeBlock",e)}_polymorphicNormalize(e){let r;switch((0,l._getClassNameOf)(e)){case"Vector2":case"Vector3":case"Vector4":case"Quaternion":return r=e.normalizeToNew(),this.config?.nanOnZeroLength&&0===e.length()&&r.setAll(NaN),r;default:throw Error(`Cannot normalize value ${e}`)}}}(0,t.RegisterClass)("FlowGraphNormalizeBlock",f);class c extends i.FlowGraphBinaryOperationBlock{constructor(e){super(r.RichTypeAny,r.RichTypeAny,r.RichTypeNumber,(e,r)=>this._polymorphicDot(e,r),"FlowGraphDotBlock",e)}_polymorphicDot(e,r){switch((0,l._getClassNameOf)(e)){case"Vector2":case"Vector3":case"Vector4":case"Quaternion":return e.dot(r);default:throw Error(`Cannot get dot product of ${e} and ${r}`)}}}(0,t.RegisterClass)("FlowGraphDotBlock",c);class d extends i.FlowGraphBinaryOperationBlock{constructor(e){super(r.RichTypeVector3,r.RichTypeVector3,r.RichTypeVector3,(e,r)=>o.Vector3.Cross(e,r),"FlowGraphCrossBlock",e)}}(0,t.RegisterClass)("FlowGraphCrossBlock",d);class u extends i.FlowGraphBinaryOperationBlock{constructor(e){super(r.RichTypeVector2,r.RichTypeNumber,r.RichTypeVector2,(e,r)=>o.Vector2.Transform(e,o.Matrix.RotationZ(r)),"FlowGraphRotate2DBlock",e)}}(0,t.RegisterClass)("FlowGraphRotate2DBlock",u);class p extends n.FlowGraphTernaryOperationBlock{constructor(e){super(r.RichTypeVector3,r.RichTypeVector3,r.RichTypeNumber,r.RichTypeVector3,(e,r,t)=>o.Vector3.TransformCoordinates(e,o.Matrix.RotationAxis(r,t)),"FlowGraphRotate3DBlock",e)}}function m(e,r){switch((0,l._getClassNameOf)(e)){case"Vector2":case"Vector3":return r.transformVector(e);case"Vector4":return new o.Vector4(e.x*r.m[0]+e.y*r.m[1]+e.z*r.m[2]+e.w*r.m[3],e.x*r.m[4]+e.y*r.m[5]+e.z*r.m[6]+e.w*r.m[7],e.x*r.m[8]+e.y*r.m[9]+e.z*r.m[10]+e.w*r.m[11],e.x*r.m[12]+e.y*r.m[13]+e.z*r.m[14]+e.w*r.m[15]);default:throw Error(`Cannot transform value ${e}`)}}(0,t.RegisterClass)("FlowGraphRotate3DBlock",p);class v extends i.FlowGraphBinaryOperationBlock{constructor(e){const t=e?.vectorType||"Vector3",i="Vector2"===t?"Matrix2D":"Vector3"===t?"Matrix3D":"Matrix";super((0,r.getRichTypeByFlowGraphType)(t),(0,r.getRichTypeByFlowGraphType)(i),(0,r.getRichTypeByFlowGraphType)(t),m,"FlowGraphTransformVectorBlock",e)}}(0,t.RegisterClass)("FlowGraphTransformVectorBlock",v);class S extends i.FlowGraphBinaryOperationBlock{constructor(e){super(r.RichTypeVector3,r.RichTypeMatrix,r.RichTypeVector3,(e,r)=>o.Vector3.TransformCoordinates(e,r),"FlowGraphTransformCoordinatesBlock",e)}}(0,t.RegisterClass)("FlowGraphTransformCoordinatesBlock",S),e.s(["FlowGraphCrossBlock",0,d,"FlowGraphDotBlock",0,c,"FlowGraphLengthBlock",0,s,"FlowGraphNormalizeBlock",0,f,"FlowGraphRotate2DBlock",0,u,"FlowGraphRotate3DBlock",0,p,"FlowGraphTransformBlock",0,v,"FlowGraphTransformCoordinatesBlock",0,S])},2943,4478,73192,e=>{"use strict";var r=e.i(52656);class t{static ConvertPanoramaToCubemap(e,r,t,i,a=!1){if(!e)throw"ConvertPanoramaToCubemap: input cannot be null";if(e.length!=r*t*3)throw"ConvertPanoramaToCubemap: input size is wrong";return{front:this.CreateCubemapTexture(i,this.FACE_FRONT,e,r,t,a),back:this.CreateCubemapTexture(i,this.FACE_BACK,e,r,t,a),left:this.CreateCubemapTexture(i,this.FACE_LEFT,e,r,t,a),right:this.CreateCubemapTexture(i,this.FACE_RIGHT,e,r,t,a),up:this.CreateCubemapTexture(i,this.FACE_UP,e,r,t,a),down:this.CreateCubemapTexture(i,this.FACE_DOWN,e,r,t,a),size:i,type:1,format:4,gammaSpace:!1}}static CreateCubemapTexture(e,r,t,i,a,o=!1){let n=new Float32Array(new ArrayBuffer(e*e*12)),l=o?Math.max(1,Math.round(i/4/e)):1,s=1/l,f=s*s,c=r[1].subtract(r[0]).scale(s/e),d=r[3].subtract(r[2]).scale(s/e),u=1/e,p=0;for(let o=0;o<e;o++)for(let m=0;m<l;m++){let m=r[0],v=r[2];for(let r=0;r<e;r++)for(let s=0;s<l;s++){let l=v.subtract(m).scale(p).add(m);l.normalize();let s=this.CalcProjectionSpherical(l,t,i,a);n[o*e*3+3*r+0]+=s.r*f,n[o*e*3+3*r+1]+=s.g*f,n[o*e*3+3*r+2]+=s.b*f,m=m.add(c),v=v.add(d)}p+=u*s}return n}static CalcProjectionSpherical(e,r,t,i){let a=Math.atan2(e.z,e.x),o=Math.acos(e.y);for(;a<-Math.PI;)a+=2*Math.PI;for(;a>Math.PI;)a-=2*Math.PI;let n=a/Math.PI,l=o/Math.PI,s=Math.round((n=.5*n+.5)*t);s<0?s=0:s>=t&&(s=t-1);let f=Math.round(l*i);f<0?f=0:f>=i&&(f=i-1);let c=i-f-1;return{r:r[c*t*3+3*s+0],g:r[c*t*3+3*s+1],b:r[c*t*3+3*s+2]}}}function i(e,r,t,i,a,o){if(a>0){var n;a=(n=a-136)>1023?898846567431158e293*Math.pow(2,n-1023):n<-1074?5e-324*Math.pow(2,n+1074):+Math.pow(2,n),e[o+0]=r*a,e[o+1]=t*a,e[o+2]=i*a}else e[o+0]=0,e[o+1]=0,e[o+2]=0}function a(e,r){let t="",i="";for(let a=r;a<e.length-r&&"\n"!=(i=String.fromCharCode(e[a]));a++)t+=i;return t}function o(e){let r=0,t=0,i=a(e,0);if("#"!=i[0]||"?"!=i[1])throw"Bad HDR Format.";let o=!1,n=!1,l=0;do l+=i.length+1,"FORMAT=32-bit_rle_rgbe"==(i=a(e,l))?n=!0:0==i.length&&(o=!0);while(!o)if(!n)throw"HDR Bad header format, unsupported FORMAT";l+=i.length+1,i=a(e,l);let s=/^-Y (.*) \+X (.*)$/g.exec(i);if(!s||s.length<3)throw"HDR Bad header format, no size";if(t=parseInt(s[2]),r=parseInt(s[1]),t<8||t>32767)throw"HDR Bad header format, unsupported size";return{height:r,width:t,dataPosition:l+=i.length+1}}function n(e,r){return function(e,r){let t,a,o,n,l,s=r.height,f=r.width,c=r.dataPosition,d=0,u=0,p=0,m=new Uint8Array(new ArrayBuffer(4*f)),v=new Float32Array(new ArrayBuffer(r.width*r.height*12));for(;s>0;){if(t=e[c++],a=e[c++],o=e[c++],n=e[c++],2!=t||2!=a||128&o||r.width<8||r.width>32767)return function(e,r){let t,a,o,n=r.height,l=r.width,s=r.dataPosition,f=new Float32Array(new ArrayBuffer(r.width*r.height*12));for(;n>0;){for(o=0;o<r.width;o++)t=e[s++],a=e[s++],i(f,t,a,e[s++],e[s++],(r.height-n)*l*3+3*o);n--}return f}(e,r);if((o<<8|n)!=f)throw"HDR Bad header format, wrong scan line width";for(p=0,d=0;p<4;p++)for(u=(p+1)*f;d<u;)if(t=e[c++],a=e[c++],t>128){if(0==(l=t-128)||l>u-d)throw"HDR Bad Format, bad scanline data (run)";for(;l-- >0;)m[d++]=a}else{if(0==(l=t)||l>u-d)throw"HDR Bad Format, bad scanline data (non-run)";if(m[d++]=a,--l>0)for(let r=0;r<l;r++)m[d++]=e[c++]}for(p=0;p<f;p++)t=m[p],a=m[p+f],i(v,t,a,o=m[p+2*f],n=m[p+3*f],(r.height-s)*f*3+3*p);s--}return v}(e,r)}t.FACE_LEFT=[new r.Vector3(-1,-1,-1),new r.Vector3(1,-1,-1),new r.Vector3(-1,1,-1),new r.Vector3(1,1,-1)],t.FACE_RIGHT=[new r.Vector3(1,-1,1),new r.Vector3(-1,-1,1),new r.Vector3(1,1,1),new r.Vector3(-1,1,1)],t.FACE_FRONT=[new r.Vector3(1,-1,-1),new r.Vector3(1,-1,1),new r.Vector3(1,1,-1),new r.Vector3(1,1,1)],t.FACE_BACK=[new r.Vector3(-1,-1,1),new r.Vector3(-1,-1,-1),new r.Vector3(-1,1,1),new r.Vector3(-1,1,-1)],t.FACE_DOWN=[new r.Vector3(1,1,-1),new r.Vector3(1,1,1),new r.Vector3(-1,1,-1),new r.Vector3(-1,1,1)],t.FACE_UP=[new r.Vector3(-1,-1,-1),new r.Vector3(-1,-1,1),new r.Vector3(1,-1,-1),new r.Vector3(1,-1,1)],e.s(["PanoramaToCubeMapTools",0,t],4478),e.s(["GetCubeMapTextureData",0,function(e,r,i=!1){let a=new Uint8Array(e),l=o(a),s=n(a,l);return t.ConvertPanoramaToCubemap(s,l.width,l.height,r,i)},"RGBE_ReadHeader",0,o,"RGBE_ReadPixels",0,n],73192),e.s(["_HDRTextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(){throw".hdr not supported in Cube."}loadData(e,r,t){let i=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),a=o(i),l=n(i,a),s=a.width*a.height,f=new Float32Array(4*s);for(let e=0;e<s;e+=1)f[4*e]=l[3*e],f[4*e+1]=l[3*e+1],f[4*e+2]=l[3*e+2],f[4*e+3]=1;t(a.width,a.height,r.generateMipMaps,!1,()=>{let e=r.getEngine();r.type=1,r.format=5,r._gammaSpace=!1,e._uploadDataToTextureDirectly(r,f)})}}],2943)},45167,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingRenderPixelShader",i=`#define DISABLE_UNIFORMITY_ANALYSIS
#define IOR 1.333
#define ETA 1.0/IOR
#define F0 0.02
var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#else
uniform diffuseColor: vec3f;
#endif
#ifdef FLUIDRENDERING_FIXED_THICKNESS
uniform thickness: f32;var bgDepthSamplerSampler: sampler;var bgDepthSampler: texture_2d<f32>;
#else
uniform minimumThickness: f32;var thicknessSamplerSampler: sampler;var thicknessSampler: texture_2d<f32>;
#endif
#ifdef FLUIDRENDERING_ENVIRONMENT
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
var debugSamplerSampler: sampler;var debugSampler: texture_2d<f32>;
#endif
uniform viewMatrix: mat4x4f;uniform projectionMatrix: mat4x4f;uniform invProjectionMatrix: mat4x4f;uniform texelSize: vec2f;uniform dirLight: vec3f;uniform cameraFar: f32;uniform density: f32;uniform refractionStrength: f32;uniform fresnelClamp: f32;uniform specularPower: f32;varying vUV: vec2f;fn computeViewPosFromUVDepth(texCoord: vec2f,depth: f32)->vec3f {var ndc: vec4f=vec4f(texCoord*2.0-1.0,0.0,1.0);
#ifdef FLUIDRENDERING_RHS
ndc.z=-uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;
#else
ndc.z=uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;
#endif
ndc.w=1.0;var eyePos: vec4f=uniforms.invProjectionMatrix*ndc;return eyePos.xyz/eyePos.w;}
fn getViewPosFromTexCoord(texCoord: vec2f)->vec3f {var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,texCoord,0.).x;return computeViewPosFromUVDepth(texCoord,depth);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var texCoord: vec2f=input.vUV;
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
var color: vec4f=textureSample(debugSampler,debugSamplerSampler,texCoord);
#ifdef FLUIDRENDERING_DEBUG_DEPTH
fragmentOutputs.color=vec4f(color.rgb/vec3f(2.0),1.);if (color.r>0.999 && color.g>0.999) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,texCoord);}
#else
fragmentOutputs.color=vec4f(color.rgb,1.);if (color.r<0.001 && color.g<0.001 && color.b<0.001) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,texCoord);}
#endif
return fragmentOutputs;
#endif
var depthVel: vec2f=textureSampleLevel(depthSampler,depthSamplerSampler,texCoord,0.).rg;var depth: f32=depthVel.r;
#ifndef FLUIDRENDERING_FIXED_THICKNESS
var thickness: f32=textureSample(thicknessSampler,thicknessSamplerSampler,texCoord).x;
#else
var thickness: f32=uniforms.thickness;var bgDepth: f32=textureSample(bgDepthSampler,bgDepthSamplerSampler,texCoord).x;var depthNonLinear: f32=uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;depthNonLinear=depthNonLinear*0.5+0.5;
#endif
var backColor: vec4f=textureSample(textureSampler,textureSamplerSampler,texCoord);
#ifndef FLUIDRENDERING_FIXED_THICKNESS
if (depth>=uniforms.cameraFar || depth<=0. || thickness<=uniforms.minimumThickness) {
#else
if (depth>=uniforms.cameraFar || depth<=0. || bgDepth<=depthNonLinear) {
#endif
#ifdef FLUIDRENDERING_COMPOSITE_MODE
fragmentOutputs.color=vec4f(backColor.rgb*backColor.a,backColor.a);
#else
fragmentOutputs.color=backColor;
#endif
return fragmentOutputs;}
var viewPos: vec3f=computeViewPosFromUVDepth(texCoord,depth);var ddx: vec3f=getViewPosFromTexCoord(texCoord+vec2f(uniforms.texelSize.x,0.))-viewPos;var ddy: vec3f=getViewPosFromTexCoord(texCoord+vec2f(0.,uniforms.texelSize.y))-viewPos;var ddx2: vec3f=viewPos-getViewPosFromTexCoord(texCoord+vec2f(-uniforms.texelSize.x,0.));if (abs(ddx.z)>abs(ddx2.z)) {ddx=ddx2;}
var ddy2: vec3f=viewPos-getViewPosFromTexCoord(texCoord+vec2f(0.,-uniforms.texelSize.y));if (abs(ddy.z)>abs(ddy2.z)) {ddy=ddy2;}
var normal: vec3f=normalize(cross(ddy,ddx));
#ifdef FLUIDRENDERING_RHS
normal=-normal;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_SHOWNORMAL)
fragmentOutputs.color=vec4f(normal*0.5+0.5,1.0);return fragmentOutputs;
#endif
var rayDir: vec3f=normalize(viewPos); 
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
var diffuseColor: vec3f=textureSampleLevel(diffuseSampler,diffuseSamplerSampler,texCoord,0.0).rgb;
#else
var diffuseColor: vec3f=uniforms.diffuseColor;
#endif
var lightDir: vec3f=normalize((uniforms.viewMatrix*vec4f(-uniforms.dirLight,0.)).xyz);var H: vec3f =normalize(lightDir-rayDir);var specular: f32 =pow(max(0.0,dot(H,normal)),uniforms.specularPower);
#ifdef FLUIDRENDERING_DEBUG_DIFFUSERENDERING
var diffuse: f32 =max(0.0,dot(lightDir,normal))*1.0;fragmentOutputs.color=vec4f(vec3f(0.1) /*ambient*/+vec3f(0.42,0.50,1.00)*diffuse+vec3f(0,0,0.2)+specular,1.);return fragmentOutputs;
#endif
var refractionDir: vec3f=refract(rayDir,normal,ETA);var transmitted: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,vec2f(texCoord+refractionDir.xy*thickness*uniforms.refractionStrength),0.0);
#ifdef FLUIDRENDERING_COMPOSITE_MODE
if (transmitted.a==0.) {transmitted.a=thickness;}
#endif
var transmittance: vec3f=exp(-uniforms.density*thickness*(1.0-diffuseColor)); 
var refractionColor: vec3f=transmitted.rgb*transmittance;
#ifdef FLUIDRENDERING_ENVIRONMENT
var reflectionDir: vec3f=reflect(rayDir,normal);var reflectionColor: vec3f=(textureSample(reflectionSampler,reflectionSamplerSampler,reflectionDir).rgb);var fresnel: f32=clamp(F0+(1.0-F0)*pow(1.0-dot(normal,-rayDir),5.0),0.,uniforms.fresnelClamp);var finalColor: vec3f=mix(refractionColor,reflectionColor,fresnel)+specular;
#else
var finalColor: vec3f=refractionColor+specular;
#endif
#ifdef FLUIDRENDERING_VELOCITY
var velocity: f32=depthVel.g;finalColor=mix(finalColor,vec3f(1.0),smoothstep(0.3,1.0,velocity/6.0));
#endif
fragmentOutputs.color=vec4f(finalColor,transmitted.a);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingRenderPixelShaderWGSL",0,{name:t,shader:i}])},44146,e=>{"use strict";var r=e.i(32170),t=e.i(61724),i=e.i(99839),a=e.i(29512);class o extends r.FlowGraphAsyncExecutionBlock{constructor(e){super(e,["animationLoop","animationEnd","animationGroupLoop"]),this.config=e,this.speed=this.registerDataInput("speed",t.RichTypeNumber),this.loop=this.registerDataInput("loop",t.RichTypeBoolean),this.from=this.registerDataInput("from",t.RichTypeNumber,0),this.to=this.registerDataInput("to",t.RichTypeNumber),this.currentFrame=this.registerDataOutput("currentFrame",t.RichTypeNumber),this.currentTime=this.registerDataOutput("currentTime",t.RichTypeNumber),this.currentAnimationGroup=this.registerDataOutput("currentAnimationGroup",t.RichTypeAny),this.animationGroup=this.registerDataInput("animationGroup",t.RichTypeAny,e?.animationGroup),this.animation=this.registerDataInput("animation",t.RichTypeAny),this.object=this.registerDataInput("object",t.RichTypeAny)}_preparePendingTasks(e){let r=this.animationGroup.getValue(e),t=this.animation.getValue(e);if(!r&&!t)return this._reportError(e,"No animation or animation group provided");{let i=this.currentAnimationGroup.getValue(e);i&&i!==r&&i.dispose();let o=r;if(t&&!o){let r=this.object.getValue(e);if(!r)return this._reportError(e,"No target object provided");let i=Array.isArray(t)?t:[t],n=i[0].name;o=new a.AnimationGroup("flowGraphAnimationGroup-"+n+"-"+r.name,e.configuration.scene);let l=!1,s=e._getGlobalContextVariable("interpolationAnimations",[]);for(let e of i)o.addTargetedAnimation(e,r),-1!==s.indexOf(e.uniqueId)&&(l=!0);l&&this._checkInterpolationDuplications(e,i,r)}let n=this.speed.getValue(e)||1,l=this.from.getValue(e)??0,s=this.to.getValue(e)||o.to,f=!isFinite(s)||this.loop.getValue(e);this.currentAnimationGroup.setValue(o,e);let c=e._getGlobalContextVariable("currentlyRunningAnimationGroups",[]);-1!==c.indexOf(o.uniqueId)&&o.stop();try{o.start(f,n,l,s),o.onAnimationGroupEndObservable.add(()=>this._onAnimationGroupEnd(e)),o.onAnimationEndObservable.add(()=>this._eventsSignalOutputs.animationEnd._activateSignal(e)),o.onAnimationLoopObservable.add(()=>this._eventsSignalOutputs.animationLoop._activateSignal(e)),o.onAnimationGroupLoopObservable.add(()=>this._eventsSignalOutputs.animationGroupLoop._activateSignal(e)),c.push(o.uniqueId),e._setGlobalContextVariable("currentlyRunningAnimationGroups",c)}catch(r){this._reportError(e,r)}}}_reportError(e,r){super._reportError(e,r),this.currentFrame.setValue(-1,e),this.currentTime.setValue(-1,e)}_executeOnTick(e){let r=this.currentAnimationGroup.getValue(e);r&&(this.currentFrame.setValue(r.getCurrentFrame(),e),this.currentTime.setValue(r.animatables[0]?.elapsedTime??0,e))}_execute(e){this._startPendingTasks(e)}_onAnimationGroupEnd(e){this._removeFromCurrentlyRunning(e,this.currentAnimationGroup.getValue(e)),this._resetAfterCanceled(e),this.done._activateSignal(e)}_checkInterpolationDuplications(e,r,t){for(let i of e._getGlobalContextVariable("currentlyRunningAnimationGroups",[])){let a=e.assetsContext.animationGroups.find(e=>e.uniqueId===i);if(a)for(let i of a.targetedAnimations)for(let o of r)i.animation.targetProperty===o.targetProperty&&i.target===t&&this._stopAnimationGroup(e,a)}}_stopAnimationGroup(e,r){r.stop(!0),r.dispose(),this._removeFromCurrentlyRunning(e,r)}_removeFromCurrentlyRunning(e,r){let t=e._getGlobalContextVariable("currentlyRunningAnimationGroups",[]),i=t.indexOf(r.uniqueId);-1!==i&&(t.splice(i,1),e._setGlobalContextVariable("currentlyRunningAnimationGroups",t))}_cancelPendingTasks(e){let r=this.currentAnimationGroup.getValue(e);r&&this._stopAnimationGroup(e,r)}getClassName(){return"FlowGraphPlayAnimationBlock"}}(0,i.RegisterClass)("FlowGraphPlayAnimationBlock",o),e.s(["FlowGraphPlayAnimationBlock",0,o])},80990,e=>{"use strict";var r=e.i(33967);let t="iblCdfDebugPixelShader",i=`#define PI 3.1415927
varying vUV: vec2f;var cdfySampler: sampler;var cdfy: texture_2d<f32>;var cdfxSampler: sampler;var cdfx: texture_2d<f32>;var icdfSampler: sampler;var icdf: texture_2d<f32>;
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define cdfyVSize (0.8/3.0)
#define cdfxVSize 0.1
#define cdfyHSize 0.5
uniform sizeParams: vec4f;
#ifdef IBL_USE_CUBE_MAP
fn equirectangularToCubemapDirection(uv: vec2f)->vec3f {var longitude: f32=uv.x*2.0*PI-PI;var latitude: f32=PI*0.5-uv.y*PI;var direction: vec3f;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs { 
var colour: vec3f= vec3f(0.0);var uv: vec2f =
vec2f((uniforms.sizeParams.x+input.vUV.x)*uniforms.sizeParams.z,(uniforms.sizeParams.y+input.vUV.y)*uniforms.sizeParams.w);var backgroundColour: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var cdfxWidth: u32=textureDimensions(cdfx,0).x;var cdfyHeight: u32=textureDimensions(cdfy,0).y;const iblStart: f32=1.0-cdfyVSize;const pdfStart: f32=1.0-2.0*cdfyVSize;const cdfyStart: f32=1.0-3.0*cdfyVSize;const cdfxStart: f32=1.0-3.0*cdfyVSize-cdfxVSize;const icdfxStart: f32=1.0-3.0*cdfyVSize-2.0*cdfxVSize;
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(
(uv- vec2f(0.0,iblStart))* vec2f(1.0,1.0/cdfyVSize));var iblColour: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var iblColour: vec3f=textureSample(iblSource,iblSourceSampler,(uv- vec2f(0.0,iblStart)) *
vec2f(1.0,1.0/cdfyVSize))
.rgb;
#endif
var pdfColour: vec3f =
textureSample(icdf,icdfSampler,(uv- vec2f(0.0,pdfStart))* vec2f(1.0,1.0/cdfyVSize)).zzz;var cdfyColour: f32 =
textureSample(cdfy,cdfySampler,(uv- vec2f(0.0,cdfyStart))* vec2f(2.0,1.0/cdfyVSize)).r;var icdfyColour: f32 =
textureSample(icdf,icdfSampler,(uv- vec2f(0.5,cdfyStart))* vec2f(2.0,1.0/cdfyVSize)).g;var cdfxColour: f32 =
textureSample(cdfx,cdfxSampler,(uv- vec2f(0.0,cdfxStart))* vec2f(1.0,1.0/cdfxVSize)).r;var icdfxColour: f32=textureSample(icdf,icdfSampler,(uv- vec2f(0.0,icdfxStart)) *
vec2f(1.0,1.0/cdfxVSize)).r;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {colour=backgroundColour;} else if (uv.y>iblStart) {colour+=iblColour;} else if (uv.y>pdfStart) {colour+=pdfColour;} else if (uv.y>cdfyStart && uv.x<0.5) {colour.r+=cdfyColour/f32(cdfyHeight);} else if (uv.y>cdfyStart && uv.x>0.5) {colour.r+=icdfyColour;} else if (uv.y>cdfxStart) {colour.r+=cdfxColour/f32(cdfxWidth);} else if (uv.y>icdfxStart) {colour.r+=icdfxColour;}
fragmentOutputs.color =vec4(mix(colour,backgroundColour,0.5),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblCdfDebugPixelShaderWGSL",0,{name:t,shader:i}])},32243,e=>{"use strict";var r=e.i(64102),t=e.i(3750),i=e.i(99839),a=e.i(59637),o=e.i(61724);class n extends r.FlowGraphEventBlock{constructor(e){super(e),this.config=e,this.type="MeshPick",this.asset=this.registerDataInput("asset",o.RichTypeAny,e?.targetMesh),this.pickedPoint=this.registerDataOutput("pickedPoint",o.RichTypeVector3),this.pickOrigin=this.registerDataOutput("pickOrigin",o.RichTypeVector3),this.pointerId=this.registerDataOutput("pointerId",o.RichTypeNumber),this.pickedMesh=this.registerDataOutput("pickedMesh",o.RichTypeAny),this.pointerType=this.registerDataInput("pointerType",o.RichTypeAny,t.PointerEventTypes.POINTERPICK)}_getReferencedMesh(e){return this.asset.getValue(e)}_executeEvent(e,r){if(this.pointerType.getValue(e)!==r.type)return!0;let t=this._getReferencedMesh(e);return t&&r.pickInfo?.pickedMesh&&(r.pickInfo?.pickedMesh===t||(0,a._isADescendantOf)(r.pickInfo?.pickedMesh,t))?(this.pointerId.setValue(r.event.pointerId,e),this.pickOrigin.setValue(r.pickInfo.ray?.origin,e),this.pickedPoint.setValue(r.pickInfo.pickedPoint,e),this.pickedMesh.setValue(r.pickInfo.pickedMesh,e),this._execute(e),!this.config?.stopPropagation):(this.pointerId.resetToDefaultValue(e),this.pickOrigin.resetToDefaultValue(e),this.pickedPoint.resetToDefaultValue(e),this.pickedMesh.resetToDefaultValue(e),!0)}_preparePendingTasks(e){}_cancelPendingTasks(e){}getClassName(){return"FlowGraphMeshPickEventBlock"}}(0,i.RegisterClass)("FlowGraphMeshPickEventBlock",n),e.s(["FlowGraphMeshPickEventBlock",0,n])},21607,e=>{"use strict";var r=e.i(33967);let t="rsmGlobalIlluminationPixelShader",i=`/**
* The implementation is an application of the formula found in http:
* For better results,it also adds a random (noise) rotation to the RSM samples (the noise artifacts are easier to remove than the banding artifacts).
*/
varying vUV: vec2f;uniform rsmLightMatrix: mat4x4f;uniform rsmInfo: vec4f;uniform rsmInfo2: vec4f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var rsmPositionWSampler: sampler;var rsmPositionW: texture_2d<f32>;var rsmNormalWSampler: sampler;var rsmNormalW: texture_2d<f32>;var rsmFluxSampler: sampler;var rsmFlux: texture_2d<f32>;var rsmSamples: texture_2d<f32>;
#ifdef TRANSFORM_NORMAL
uniform invView: mat4x4f;
#endif
fn mod289(x: f32)->f32{return x-floor(x*(1.0/289.0))*289.0;}
fn mod289Vec4(x: vec4f)->vec4f {return x-floor(x*(1.0/289.0))* 289.0;}
fn perm(x: vec4f)->vec4f {return mod289Vec4(((x*34.0)+1.0)*x) ;}
fn noise(p: vec3f)->f32{var a: vec3f=floor(p);var d: vec3f=p-a;d=d*d*(3.0-2.0*d);var b: vec4f=a.xxyy+ vec4f(0.0,1.0,0.0,1.0);var k1: vec4f=perm(b.xyxy);var k2: vec4f=perm(k1.xyxy+b.zzww);var c: vec4f=k2+a.zzzz;var k3: vec4f=perm(c);var k4: vec4f=perm(c+1.0);var o1: vec4f=fract(k3*(1.0/41.0));var o2: vec4f=fract(k4*(1.0/41.0));var o3: vec4f=o2*d.z+o1*(1.0-d.z);var o4: vec2f=o3.yw*d.x+o3.xz*(1.0-d.x);return o4.y*d.y+o4.x*(1.0-d.y);}
fn computeIndirect(p: vec3f,n: vec3f)->vec3f {var indirectDiffuse: vec3f= vec3f(0.);var numSamples: i32= i32(uniforms.rsmInfo.x);var radius: f32=uniforms.rsmInfo.y;var intensity: f32=uniforms.rsmInfo.z;var edgeArtifactCorrection: f32=uniforms.rsmInfo.w;var texRSM: vec4f=uniforms.rsmLightMatrix* vec4f(p,1.);texRSM=vec4f(texRSM.xy/texRSM.w,texRSM.z,texRSM.w);texRSM=vec4f(texRSM.xy*0.5+0.5,texRSM.z,texRSM.w);var angle: f32=noise(p*uniforms.rsmInfo2.x);var c: f32=cos(angle);var s: f32=sin(angle);for (var i: i32=0; i<numSamples; i++) {var rsmSample: vec3f=textureLoad(rsmSamples,vec2<i32>(i,0),0).xyz;var weightSquare: f32=rsmSample.z;if (uniforms.rsmInfo2.y==1.0){rsmSample=vec3f(rsmSample.x*c+rsmSample.y*s,-rsmSample.x*s+rsmSample.y*c,rsmSample.z);}
var uv: vec2f=texRSM.xy+rsmSample.xy*radius;if (uv.x<0. || uv.x>1. || uv.y<0. || uv.y>1.) {continue;}
var vplPositionW: vec3f=textureSampleLevel(rsmPositionW,rsmPositionWSampler,uv,0.).xyz;var vplNormalW: vec3f=textureSampleLevel(rsmNormalW,rsmNormalWSampler,uv,0.).xyz*2.0-1.0;var vplFlux: vec3f=textureSampleLevel(rsmFlux,rsmFluxSampler,uv,0.).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
var dist2: f32=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*weightSquare*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}
return clamp(indirectDiffuse*intensity,vec3f(0.0),vec3f(1.0));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var positionW: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).xyz;var normalW: vec3f=textureSample(normalSampler,normalSamplerSampler,input.vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(uniforms.invView* vec4f(normalW,0.)).xyz;
#endif
fragmentOutputs.color=vec4f(computeIndirect(positionW,normalW),1.0);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["rsmGlobalIlluminationPixelShaderWGSL",0,{name:t,shader:i}])},42059,e=>{"use strict";var r=e.i(33967);e.i(55098),e.i(71133);let t="kernelBlurFragment",i=`#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i);let a="kernelBlurFragment2",o=`#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o);let n="kernelBlurPixelShader",l=`uniform sampler2D textureSampler;uniform vec2 delta;varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;float sampleCoC(in vec2 offset) {float coc=texture2D(circleOfConfusionSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT; 
float factor=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;r.ShaderStore.ShadersStore[n]||(r.ShaderStore.ShadersStore[n]=l),e.s(["kernelBlurPixelShader",0,{name:n,shader:l}],42059)},72173,e=>{"use strict";var r=e.i(33967);let t="fxaaPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const fxaaQualitySubpix: f32=1.0;const fxaaQualityEdgeThreshold: f32=0.166;const fxaaQualityEdgeThresholdMin: f32=0.0833;const kLumaCoefficients: vec3f= vec3f(0.2126,0.7152,0.0722);fn FxaaLuma(rgba: vec4f)->f32 {return dot(rgba.rgb,kLumaCoefficients);} 
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var posM: vec2f;posM.x=input.vUV.x;posM.y=input.vUV.y;var rgbyM: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var lumaM: f32=FxaaLuma(rgbyM);var lumaS: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordS,0.0));var lumaE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordE,0.0));var lumaN: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordN,0.0));var lumaW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordW,0.0));var maxSM: f32=max(lumaS,lumaM);var minSM: f32=min(lumaS,lumaM);var maxESM: f32=max(lumaE,maxSM);var minESM: f32=min(lumaE,minSM);var maxWN: f32=max(lumaN,lumaW);var minWN: f32=min(lumaN,lumaW);var rangeMax: f32=max(maxWN,maxESM);var rangeMin: f32=min(minWN,minESM);var rangeMaxScaled: f32=rangeMax*fxaaQualityEdgeThreshold;var range: f32=rangeMax-rangeMin;var rangeMaxClamped: f32=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);
#ifndef MALI
if(range<rangeMaxClamped) 
{fragmentOutputs.color=rgbyM;return fragmentOutputs;}
#endif
var lumaNW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordNW,0.0));var lumaSE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordSE,0.0));var lumaNE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordNE,0.0));var lumaSW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordSW,0.0));var lumaNS: f32=lumaN+lumaS;var lumaWE: f32=lumaW+lumaE;var subpixRcpRange: f32=1.0/range;var subpixNSWE: f32=lumaNS+lumaWE;var edgeHorz1: f32=(-2.0*lumaM)+lumaNS;var edgeVert1: f32=(-2.0*lumaM)+lumaWE;var lumaNESE: f32=lumaNE+lumaSE;var lumaNWNE: f32=lumaNW+lumaNE;var edgeHorz2: f32=(-2.0*lumaE)+lumaNESE;var edgeVert2: f32=(-2.0*lumaN)+lumaNWNE;var lumaNWSW: f32=lumaNW+lumaSW;var lumaSWSE: f32=lumaSW+lumaSE;var edgeHorz4: f32=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);var edgeVert4: f32=(abs(edgeVert1)*2.0)+abs(edgeVert2);var edgeHorz3: f32=(-2.0*lumaW)+lumaNWSW;var edgeVert3: f32=(-2.0*lumaS)+lumaSWSE;var edgeHorz: f32=abs(edgeHorz3)+edgeHorz4;var edgeVert: f32=abs(edgeVert3)+edgeVert4;var subpixNWSWNESE: f32=lumaNWSW+lumaNESE;var lengthSign: f32=uniforms.texelSize.x;var horzSpan: bool=edgeHorz>=edgeVert;var subpixA: f32=subpixNSWE*2.0+subpixNWSWNESE;if (!horzSpan)
{lumaN=lumaW;}
if (!horzSpan) 
{lumaS=lumaE;}
if (horzSpan) 
{lengthSign=uniforms.texelSize.y;}
var subpixB: f32=(subpixA*(1.0/12.0))-lumaM;var gradientN: f32=lumaN-lumaM;var gradientS: f32=lumaS-lumaM;var lumaNN: f32=lumaN+lumaM;var lumaSS: f32=lumaS+lumaM;var pairN: bool=abs(gradientN)>=abs(gradientS);var gradient: f32=max(abs(gradientN),abs(gradientS));if (pairN)
{lengthSign=-lengthSign;}
var subpixC: f32=clamp(abs(subpixB)*subpixRcpRange,0.0,1.0);var posB: vec2f;posB.x=posM.x;posB.y=posM.y;var offNP: vec2f;offNP.x=select(uniforms.texelSize.x,0.0,(!horzSpan));offNP.y=select(uniforms.texelSize.y,0.0,(horzSpan));if (!horzSpan) 
{posB.x+=lengthSign*0.5;}
if (horzSpan)
{posB.y+=lengthSign*0.5;}
var posN: vec2f;posN.x=posB.x-offNP.x*1.5;posN.y=posB.y-offNP.y*1.5;var posP: vec2f;posP.x=posB.x+offNP.x*1.5;posP.y=posB.y+offNP.y*1.5;var subpixD: f32=((-2.0)*subpixC)+3.0;var lumaEndN: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posN,0.0));var subpixE: f32=subpixC*subpixC;var lumaEndP: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posP,0.0));if (!pairN) 
{lumaNN=lumaSS;}
var gradientScaled: f32=gradient*1.0/4.0;var lumaMM: f32=lumaM-lumaNN*0.5;var subpixF: f32=subpixD*subpixE;var lumaMLTZero: bool=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;var doneN: bool=abs(lumaEndN)>=gradientScaled;var doneP: bool=abs(lumaEndP)>=gradientScaled;if (!doneN) 
{posN.x-=offNP.x*3.0;}
if (!doneN) 
{posN.y-=offNP.y*3.0;}
var doneNP: bool=(!doneN) || (!doneP);if (!doneP) 
{posP.x+=offNP.x*3.0;}
if (!doneP)
{posP.y+=offNP.y*3.0;}
if (doneNP)
{if (!doneN) {lumaEndN=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posN.xy,0.0));}
if (!doneP) {lumaEndP=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posP.xy,0.0));}
if (!doneN) {lumaEndN=lumaEndN-lumaNN*0.5;}
if (!doneP) {lumaEndP=lumaEndP-lumaNN*0.5;}
doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) {posN.x-=offNP.x*12.0;}
if (!doneN) {posN.y-=offNP.y*12.0;}
doneNP=(!doneN) || (!doneP);if (!doneP) {posP.x+=offNP.x*12.0;}
if (!doneP) {posP.y+=offNP.y*12.0;}}
var dstN: f32=posM.x-posN.x;var dstP: f32=posP.x-posM.x;if (!horzSpan)
{dstN=posM.y-posN.y;}
if (!horzSpan) 
{dstP=posP.y-posM.y;}
var goodSpanN: bool=(lumaEndN<0.0) != lumaMLTZero;var spanLength: f32=(dstP+dstN);var goodSpanP: bool=(lumaEndP<0.0) != lumaMLTZero;var spanLengthRcp: f32=1.0/spanLength;var directionN: bool=dstN<dstP;var dst: f32=min(dstN,dstP);var goodSpan: bool=select(goodSpanP,goodSpanN,directionN);var subpixG: f32=subpixF*subpixF;var pixelOffset: f32=(dst*(-spanLengthRcp))+0.5;var subpixH: f32=subpixG*fxaaQualitySubpix;var pixelOffsetGood: f32=select(0.0,pixelOffset,goodSpan);var pixelOffsetSubpix: f32=max(pixelOffsetGood,subpixH);if (!horzSpan)
{posM.x+=pixelOffsetSubpix*lengthSign;}
if (horzSpan)
{posM.y+=pixelOffsetSubpix*lengthSign;}
#ifdef MALI
if(range<rangeMaxClamped) 
{fragmentOutputs.color=rgbyM;}
else
{fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,posM,0.0);}
#else
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,posM,0.0);
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fxaaPixelShaderWGSL",0,{name:t,shader:i}])},24065,e=>{"use strict";var r=e.i(33967);e.i(18989),e.i(54318),e.i(86463),e.i(55112),e.i(27104);let t="gaussianSplatting",i=`fn getDataUV(index: f32,dataTextureSize: vec2f)->vec2<f32> {let y: f32=floor(index/dataTextureSize.x);let x: f32=index-y*dataTextureSize.x;return vec2f((x+0.5),(y+0.5));}
struct Splat {center: vec4f,
color: vec4f,
covA: vec4f,
covB: vec4f,
#if SH_DEGREE>0
sh0: vec4<u32>,
#endif
#if SH_DEGREE>1
sh1: vec4<u32>,
#endif
#if SH_DEGREE>2
sh2: vec4<u32>,
#endif
};fn readSplat(splatIndex: f32,dataTextureSize: vec2f)->Splat {var splat: Splat;let splatUV=getDataUV(splatIndex,dataTextureSize);let splatUVi32=vec2<i32>(i32(splatUV.x),i32(splatUV.y));splat.center=textureLoad(centersTexture,splatUVi32,0);splat.color=textureLoad(colorsTexture,splatUVi32,0);splat.covA=textureLoad(covariancesATexture,splatUVi32,0)*splat.center.w;splat.covB=textureLoad(covariancesBTexture,splatUVi32,0)*splat.center.w;
#if SH_DEGREE>0
splat.sh0=textureLoad(shTexture0,splatUVi32,0);
#endif
#if SH_DEGREE>1
splat.sh1=textureLoad(shTexture1,splatUVi32,0);
#endif
#if SH_DEGREE>2
splat.sh2=textureLoad(shTexture2,splatUVi32,0);
#endif
return splat;}
fn computeColorFromSHDegree(dir: vec3f,sh: array<vec3<f32>,16>)->vec3f
{let SH_C0: f32=0.28209479;let SH_C1: f32=0.48860251;var SH_C2: array<f32,5>=array<f32,5>(
1.092548430,
-1.09254843,
0.315391565,
-1.09254843,
0.546274215
);var SH_C3: array<f32,7>=array<f32,7>(
-0.59004358,
2.890611442,
-0.45704579,
0.373176332,
-0.45704579,
1.445305721,
-0.59004358
);var result: vec3f=/*SH_C0**/sh[0];
#if SH_DEGREE>0
let x: f32=dir.x;let y: f32=dir.y;let z: f32=dir.z;result+=-SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
let xx: f32=x*x;let yy: f32=y*y;let zz: f32=z*z;let xy: f32=x*y;let yz: f32=y*z;let xz: f32=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0f*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0f*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0f*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0f*zz-3.0f*xx-3.0f*yy)*sh[12] +
SH_C3[4]*x*(4.0f*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0f*yy)*sh[15];
#endif
#endif
#endif
return result;}
fn decompose(value: u32)->vec4f
{let components : vec4f=vec4f(
f32((value ) & 255u),
f32((value>>u32( 8)) & 255u),
f32((value>>u32(16)) & 255u),
f32((value>>u32(24)) & 255u));return components*vec4f(2./255.)-vec4f(1.);}
fn computeSH(splat: Splat,color: vec3f,dir: vec3f)->vec3f
{var sh: array<vec3<f32>,16>;sh[0]=color;
#if SH_DEGREE>0
let sh00: vec4f=decompose(splat.sh0.x);let sh01: vec4f=decompose(splat.sh0.y);let sh02: vec4f=decompose(splat.sh0.z);sh[1]=vec3f(sh00.x,sh00.y,sh00.z);sh[2]=vec3f(sh00.w,sh01.x,sh01.y);sh[3]=vec3f(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
let sh03: vec4f=decompose(splat.sh0.w);let sh04: vec4f=decompose(splat.sh1.x);let sh05: vec4f=decompose(splat.sh1.y);sh[4]=vec3f(sh02.y,sh02.z,sh02.w);sh[5]=vec3f(sh03.x,sh03.y,sh03.z);sh[6]=vec3f(sh03.w,sh04.x,sh04.y);sh[7]=vec3f(sh04.z,sh04.w,sh05.x);sh[8]=vec3f(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
let sh06: vec4f=decompose(splat.sh1.z);let sh07: vec4f=decompose(splat.sh1.w);let sh08: vec4f=decompose(splat.sh2.x);let sh09: vec4f=decompose(splat.sh2.y);let sh10: vec4f=decompose(splat.sh2.z);let sh11: vec4f=decompose(splat.sh2.w);sh[9]=vec3f(sh06.x,sh06.y,sh06.z);sh[10]=vec3f(sh06.w,sh07.x,sh07.y);sh[11]=vec3f(sh07.z,sh07.w,sh08.x);sh[12]=vec3f(sh08.y,sh08.z,sh08.w);sh[13]=vec3f(sh09.x,sh09.y,sh09.z);sh[14]=vec3f(sh09.w,sh10.x,sh10.y);sh[15]=vec3f(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
fn gaussianSplatting(
meshPos: vec2<f32>,
worldPos: vec3<f32>,
scale: vec2<f32>,
covA: vec3<f32>,
covB: vec3<f32>,
worldMatrix: mat4x4<f32>,
viewMatrix: mat4x4<f32>,
projectionMatrix: mat4x4<f32>,
focal: vec2f,
invViewport: vec2f
)->vec4f {let modelView=viewMatrix*worldMatrix;let camspace=viewMatrix*vec4f(worldPos,1.0);let pos2d=projectionMatrix*camspace;let bounds=1.2*pos2d.w;if (pos2d.z<0. || pos2d.x<-bounds || pos2d.x>bounds || pos2d.y<-bounds || pos2d.y>bounds) {return vec4f(0.0,0.0,2.0,1.0);}
let Vrk=mat3x3<f32>(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);let J=mat3x3<f32>(
focal.x/camspace.z,0.0,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.0,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.0,0.0,0.0
);let invy=mat3x3<f32>(
1.0,0.0,0.0,
0.0,-1.0,0.0,
0.0,0.0,1.0
);let T=invy*transpose(mat3x3<f32>(
modelView[0].xyz,
modelView[1].xyz,
modelView[2].xyz))*J;let cov2d=transpose(T)*Vrk*T;let mid=(cov2d[0][0]+cov2d[1][1])/2.0;let radius=length(vec2<f32>((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));let lambda1=mid+radius;let lambda2=mid-radius;if (lambda2<0.0) {return vec4f(0.0,0.0,2.0,1.0);}
let diagonalVector=normalize(vec2<f32>(cov2d[0][1],lambda1-cov2d[0][0]));let majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;let minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2<f32>(diagonalVector.y,-diagonalVector.x);let vCenter=vec2<f32>(pos2d.x,pos2d.y);return vec4f(
vCenter+((meshPos.x*majorAxis+meshPos.y*minorAxis)*invViewport*pos2d.w)*scale,
pos2d.z,
pos2d.w
);}
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.i(50328),e.i(8882),e.i(6474);let a="gaussianSplattingVertexShader",o=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
attribute splatIndex: f32;attribute position: vec2f;uniform invViewport: vec2f;uniform dataTextureSize: vec2f;uniform focal: vec2f;var covariancesATexture: texture_2d<f32>;var covariancesBTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;
#if SH_DEGREE>0
var shTexture0: texture_2d<u32>;
#endif
#if SH_DEGREE>1
var shTexture1: texture_2d<u32>;
#endif
#if SH_DEGREE>2
var shTexture2: texture_2d<u32>;
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplatting>
@vertex
fn main(input : VertexInputs)->FragmentInputs {var splat: Splat=readSplat(input.splatIndex,uniforms.dataTextureSize);var covA: vec3f=splat.covA.xyz;var covB: vec3f=vec3f(splat.covA.w,splat.covB.xy);let worldPos: vec4f=mesh.world*vec4f(splat.center.xyz,1.0);vertexOutputs.vPosition=input.position;
#if SH_DEGREE>0
let dir: vec3f=normalize(worldPos.xyz-scene.vEyePosition.xyz);vertexOutputs.vColor=vec4f(computeSH(splat,splat.color.xyz,dir),1.0);
#else
vertexOutputs.vColor=splat.color;
#endif
vertexOutputs.position=gaussianSplatting(input.position,worldPos.xyz,vec2f(1.0,1.0),covA,covB,mesh.world,scene.view,scene.projection,uniforms.focal,uniforms.invViewport);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}
`;r.ShaderStore.ShadersStoreWGSL[a]||(r.ShaderStore.ShadersStoreWGSL[a]=o),e.s(["gaussianSplattingVertexShaderWGSL",0,{name:a,shader:o}],24065)},55957,e=>{"use strict";var r=e.i(33967);let t="chromaticAberrationPixelShader",i=`uniform sampler2D textureSampler; 
uniform float chromatic_aberration;uniform float radialIntensity;uniform vec2 direction;uniform vec2 centerPosition;uniform float screen_width;uniform float screen_height;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 centered_screen_pos=vec2(vUV.x-centerPosition.x,vUV.y-centerPosition.y);vec2 directionOfEffect=direction;if(directionOfEffect.x==0. && directionOfEffect.y==0.){directionOfEffect=normalize(centered_screen_pos);}
float radius2=centered_screen_pos.x*centered_screen_pos.x
+ centered_screen_pos.y*centered_screen_pos.y;float radius=sqrt(radius2);vec3 ref_indices=vec3(-0.3,0.0,0.3);float ref_shiftX=chromatic_aberration*pow(radius,radialIntensity)*directionOfEffect.x/screen_width;float ref_shiftY=chromatic_aberration*pow(radius,radialIntensity)*directionOfEffect.y/screen_height;vec2 ref_coords_r=vec2(vUV.x+ref_indices.r*ref_shiftX,vUV.y+ref_indices.r*ref_shiftY*0.5);vec2 ref_coords_g=vec2(vUV.x+ref_indices.g*ref_shiftX,vUV.y+ref_indices.g*ref_shiftY*0.5);vec2 ref_coords_b=vec2(vUV.x+ref_indices.b*ref_shiftX,vUV.y+ref_indices.b*ref_shiftY*0.5);vec4 r=texture2D(textureSampler,ref_coords_r);vec4 g=texture2D(textureSampler,ref_coords_g);vec4 b=texture2D(textureSampler,ref_coords_b);float a=clamp(r.a+g.a+b.a,0.,1.);gl_FragColor=vec4(r.r,g.g,b.b,a);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["chromaticAberrationPixelShader",0,{name:t,shader:i}])},55666,e=>{"use strict";var r=e.i(33967);let t="rsmFullGlobalIlluminationPixelShader",i=`/**
* The implementation is a direct application of the formula found in http:
*/
precision highp float;varying vec2 vUV;uniform mat4 rsmLightMatrix;uniform vec4 rsmInfo;uniform sampler2D textureSampler;uniform sampler2D normalSampler;uniform sampler2D rsmPositionW;uniform sampler2D rsmNormalW;uniform sampler2D rsmFlux;
#ifdef TRANSFORM_NORMAL
uniform mat4 invView;
#endif
vec3 computeIndirect(vec3 p,vec3 n) {vec3 indirectDiffuse=vec3(0.);float intensity=rsmInfo.z;float edgeArtifactCorrection=rsmInfo.w;vec4 texRSM=rsmLightMatrix*vec4(p,1.);texRSM.xy/=texRSM.w;texRSM.xy=texRSM.xy*0.5+0.5;int width=int(rsmInfo.x);int height=int(rsmInfo.y);for (int j=0; j<height; j++) {for (int i=0; i<width; i++) {ivec2 uv=ivec2(i,j);vec3 vplPositionW=texelFetch(rsmPositionW,uv,0).xyz;vec3 vplNormalW=texelFetch(rsmNormalW,uv,0).xyz*2.0-1.0;vec3 vplFlux=texelFetch(rsmFlux,uv,0).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
float dist2=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}}
return clamp(indirectDiffuse*intensity,0.0,1.0);}
void main(void) 
{vec3 positionW=texture2D(textureSampler,vUV).xyz;vec3 normalW=texture2D(normalSampler,vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(invView*vec4(normalW,0.)).xyz;
#endif
gl_FragColor.rgb=computeIndirect(positionW,normalW);gl_FragColor.a=1.0;}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["rsmFullGlobalIlluminationPixelShader",0,{name:t,shader:i}])},70876,e=>{"use strict";var r=e.i(33967);let t="bilateralBlurQualityPixelShader",i=`uniform sampler2D textureSampler;uniform sampler2D depthSampler;uniform sampler2D normalSampler;uniform int filterSize;uniform vec2 blurDir;uniform float depthThreshold;uniform float normalThreshold;varying vec2 vUV;void main(void) {vec3 color=textureLod(textureSampler,vUV,0.).rgb;float depth=textureLod(depthSampler,vUV,0.).x;if (depth>=1e6 || depth<=0.) {glFragColor=vec4(color,1.);return;}
vec3 normal=textureLod(normalSampler,vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
float sigma=float(filterSize);float two_sigma2=2.0*sigma*sigma;float sigmaDepth=depthThreshold;float two_sigmaDepth2=2.0*sigmaDepth*sigmaDepth;float sigmaNormal=normalThreshold;float two_sigmaNormal2=2.0*sigmaNormal*sigmaNormal;vec3 sum=vec3(0.);float wsum=0.;for (int x=-filterSize; x<=filterSize; ++x) {for (int y=-filterSize; y<=filterSize; ++y) {vec2 coords=vec2(x,y)*blurDir;vec3 sampleColor=textureLod(textureSampler,vUV+coords,0.).rgb;float sampleDepth=textureLod(depthSampler,vUV+coords,0.).r;vec3 sampleNormal=textureLod(normalSampler,vUV+coords,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
float r=dot(coords,coords);float w=exp(-r/two_sigma2);float rDepth=sampleDepth-depth;float wd=exp(-rDepth*rDepth/two_sigmaDepth2);float rNormal=abs(sampleNormal.x-normal.x)+abs(sampleNormal.y-normal.y)+abs(sampleNormal.z-normal.z);float wn=exp(-rNormal*rNormal/two_sigmaNormal2);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}}
glFragColor=vec4(sum/wsum,1.);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["bilateralBlurQualityPixelShader",0,{name:t,shader:i}])},81855,e=>{"use strict";var r=e.i(33967);e.i(8100);let t="kernelBlurVertex";r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]="vertexOutputs.sampleCoord{X}=vertexOutputs.sampleCenter+uniforms.delta*KERNEL_OFFSET{X};");let i="kernelBlurVertexShader",a=`attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[i]||(r.ShaderStore.ShadersStoreWGSL[i]=a),e.s(["kernelBlurVertexShaderWGSL",0,{name:i,shader:a}],81855)},98925,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="iblIcdfPixelShader",i=`#include<helperFunctions>
varying vUV: vec2f;
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
var scaledLuminanceSamplerSampler : sampler;var scaledLuminanceSampler : texture_2d<f32>;var cdfx: texture_2d<f32>;var cdfy: texture_2d<f32>;fn fetchLuminance(coords: vec2f)->f32 {
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(coords);var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
fn fetchCDFx(x: u32)->f32 {return textureLoad(cdfx, vec2u(x,0),0).x;}
fn bisectx(size: u32,targetValue: f32)->f32
{var a: u32=0;var b=size-1;while (b-a>1) {var c: u32=(a+b)>>1;if (fetchCDFx(c)<targetValue) {a=c;}
else {b=c;}}
return mix( f32(a), f32(b),(targetValue-fetchCDFx(a))/(fetchCDFx(b)-fetchCDFx(a)))/ f32(size-1);}
fn fetchCDFy(y: u32,invocationId: u32)->f32 {return textureLoad(cdfy, vec2u(invocationId,y),0).x;}
fn bisecty(size: u32,targetValue: f32,invocationId: u32)->f32
{var a: u32=0;var b=size-1;while (b-a>1) {var c=(a+b)>>1;if (fetchCDFy(c,invocationId)<targetValue) {a=c;}
else {b=c;}}
return mix( f32(a), f32(b),(targetValue-fetchCDFy(a,invocationId))/(fetchCDFy(b,invocationId)-fetchCDFy(a,invocationId)))/ f32(size-1);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var cdfxSize: vec2u=textureDimensions(cdfx,0);var cdfWidth: u32=cdfxSize.x;var icdfWidth: u32=cdfWidth-1;var currentPixel: vec2u= vec2u(fragmentInputs.position.xy);var outputColor: vec3f=vec3f(1.0);if (currentPixel.x==0)
{outputColor.x= 0.0;}
else if (currentPixel.x==icdfWidth-1) {outputColor.x= 1.0;} else {var targetValue: f32=fetchCDFx(cdfWidth-1)*input.vUV.x;outputColor.x= bisectx(cdfWidth,targetValue);}
var cdfySize: vec2u=textureDimensions(cdfy,0);var cdfHeight: u32=cdfySize.y;if (currentPixel.y==0) {outputColor.y= 0.0;}
else if (currentPixel.y==cdfHeight-2) {outputColor.y= 1.0;} else {var targetValue: f32=fetchCDFy(cdfHeight-1,currentPixel.x)*input.vUV.y;outputColor.y= max(bisecty(cdfHeight,targetValue,currentPixel.x),0.0);}
var size : vec2f=vec2f(textureDimensions(scaledLuminanceSampler,0));var highestMip: f32=floor(log2(size.x));var normalization : f32=textureSampleLevel(scaledLuminanceSampler,
scaledLuminanceSamplerSampler,
input.vUV,highestMip)
.r;var pixelLuminance: f32=fetchLuminance(input.vUV);outputColor.z=pixelLuminance/(2.0*PI*normalization);fragmentOutputs.color=vec4( outputColor,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblIcdfPixelShaderWGSL",0,{name:t,shader:i}])},64848,e=>{"use strict";var r=e.i(33967);let t="motionBlurPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform motionStrength: f32;uniform motionScale: f32;uniform screenSize: vec2f;
#ifdef OBJECT_BASED
var velocitySamplerSampler: sampler;var velocitySampler: texture_2d<f32>;
#else
var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform inverseViewProjection: mat4x4f;uniform prevViewProjection: mat4x4f;uniform projection: mat4x4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
var texelSize: vec2f=1.0/uniforms.screenSize;var velocityColor: vec4f=textureSample(velocitySampler,velocitySamplerSampler,input.vUV);velocityColor=vec4f(velocityColor.rg*2.0- vec2f(1.0),velocityColor.b,velocityColor.a);let signs=sign(velocityColor.rg);var velocity=pow(abs(velocityColor.rg),vec2f(3.0))*signs*velocityColor.a;velocity*=uniforms.motionScale*uniforms.motionStrength;var speed: f32=length(velocity/texelSize);var samplesCount: i32= i32(clamp(speed,1.0,SAMPLES));velocity=normalize(velocity)*texelSize;var hlim: f32= f32(-samplesCount)*0.5+0.5;var result: vec4f=textureSample(textureSampler,textureSamplerSampler, input.vUV);for (var i: i32=1; i< i32(SAMPLES); i++)
{if (i>=samplesCount) {break;}
var offset: vec2f=input.vUV+velocity*(hlim+ f32(i));
#if defined(WEBGPU)
result+=textureSampleLevel(textureSampler,textureSamplerSampler, offset,0.0);
#else
result+=textureSample(textureSampler,textureSamplerSampler, offset);
#endif
}
fragmentOutputs.color=vec4f(result.rgb/ f32(samplesCount),1.0);
#else
var texelSize: vec2f=1.0/uniforms.screenSize;var depth: f32=textureSample(depthSampler,depthSamplerSampler,input.vUV).r;depth=uniforms.projection[2].z+uniforms.projection[3].z/depth; 
var cpos: vec4f= vec4f(input.vUV*2.0-1.0,depth,1.0);cpos=uniforms.inverseViewProjection*cpos;cpos/=cpos.w;var ppos: vec4f=uniforms.prevViewProjection*cpos;ppos/=ppos.w;ppos.xy=ppos.xy*0.5+0.5;var velocity: vec2f=(ppos.xy-input.vUV)*uniforms.motionScale*uniforms.motionStrength;var speed: f32=length(velocity/texelSize);var nSamples: i32= i32(clamp(speed,1.0,SAMPLES));var result: vec4f=textureSample(textureSampler,textureSamplerSampler, input.vUV);for (var i: i32=1; i< i32(SAMPLES); i++) {if (i>=nSamples) {break;}
var offset1: vec2f=input.vUV+velocity*( f32(i)/ f32(nSamples-1)-0.5);
#if defined(WEBGPU)
result+=textureSampleLevel(textureSampler,textureSamplerSampler, offset1,0.0);
#else
result+=textureSample(textureSampler,textureSamplerSampler, offset1);
#endif
}
fragmentOutputs.color=result/ f32(nSamples);
#endif
#else
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler, input.vUV);
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["motionBlurPixelShaderWGSL",0,{name:t,shader:i}])},67930,e=>{"use strict";var r=e.i(33967);let t="screenSpaceRayTrace",i=`fn distanceSquared(a: vec2f,b: vec2f)->f32 { 
var temp=a-b; 
return dot(temp,temp); }
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
fn linearizeDepth(depth: f32,near: f32,far: f32)->f32 {
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
return -(near*far)/(far-depth*(far-near));
#else
return (near*far)/(far-depth*(far-near));
#endif
}
#endif
/**
param csOrigin Camera-space ray origin,which must be 
within the view volume and must have z>0.01 and project within the valid screen rectangle
param csDirection Unit length camera-space ray direction
param projectToPixelMatrix A projection matrix that maps to **pixel** coordinates 
(**not** [-1,+1] normalized device coordinates).
param csZBuffer The camera-space Z buffer
param csZBufferSize Dimensions of csZBuffer
param csZThickness Camera space csZThickness to ascribe to each pixel in the depth buffer
param nearPlaneZ Positive number. Doesn't have to be THE actual near plane,just a reasonable value
for clipping rays headed towards the camera. Should be the actual near plane if screen-space depth is enabled.
param farPlaneZ The far plane for the camera. Used when screen-space depth is enabled.
param stride Step in horizontal or vertical pixels between samples. This is a var because: f32 integer math is slow on GPUs,but should be set to an integer>=1
param jitterFraction Number between 0 and 1 for how far to bump the ray in stride units
to conceal banding artifacts,plus the stride ray offset.
param maxSteps Maximum number of iterations. Higher gives better images but may be slow
param maxRayTraceDistance Maximum camera-space distance to trace before returning a miss
param selfCollisionNumSkip Number of steps to skip at start when raytracing to avar self: voidnull collisions.
1 is a reasonable value,depending on the scene you may need to set this value to 2
param hitPixel Pixel coordinates of the first intersection with the scene
param numIterations number of iterations performed
param csHitPovar Camera: i32 space location of the ray hit
*/
fn traceScreenSpaceRay1(
csOrigin: vec3f,
csDirection: vec3f,
projectToPixelMatrix: mat4x4f,
csZBuffer: texture_2d<f32>,
csZBufferSize: vec2f,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
csZBackBuffer: texture_2d<f32>,
csZBackSizeFactor: f32,
#endif
csZThickness: f32,
nearPlaneZ: f32,
farPlaneZ: f32,
stride: f32,
jitterFraction: f32,
maxSteps: f32,
maxRayTraceDistance: f32,
selfCollisionNumSkip: f32,
startPixel: ptr<function,vec2f>,
hitPixel: ptr<function,vec2f>,
csHitPoint: ptr<function,vec3f>,
numIterations: ptr<function,f32>
#ifdef SSRAYTRACE_DEBUG
,debugColor: ptr<function,vec3f>
#endif
)->bool
{
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
var rayLength: f32=select(maxRayTraceDistance,(-nearPlaneZ-csOrigin.z)/csDirection.z,(csOrigin.z+csDirection.z*maxRayTraceDistance)>-nearPlaneZ);
#else
var rayLength: f32=select(maxRayTraceDistance,(nearPlaneZ-csOrigin.z)/csDirection.z,(csOrigin.z+csDirection.z*maxRayTraceDistance)<nearPlaneZ);
#endif
var csEndPoint: vec3f=csOrigin+csDirection*rayLength;*hitPixel= vec2f(-1.0,-1.0);var H0: vec4f=projectToPixelMatrix* vec4f(csOrigin,1.0);var H1: vec4f=projectToPixelMatrix* vec4f(csEndPoint,1.0);var k0: f32=1.0/H0.w;var k1: f32=1.0/H1.w;var Q0: vec3f=csOrigin*k0;var Q1: vec3f=csEndPoint*k1;var P0: vec2f=H0.xy*k0;var P1: vec2f=H1.xy*k1;
#ifdef SSRAYTRACE_CLIP_TO_FRUSTUM
var xMax: f32=csZBufferSize.x-0.5;var xMin=0.5;var yMax=csZBufferSize.y-0.5;var yMin=0.5;var alpha: f32=0.0;if ((P1.y>yMax) || (P1.y<yMin)) {alpha=(P1.y-select(yMin,yMax,(P1.y>yMax)))/(P1.y-P0.y);}
if ((P1.x>xMax) || (P1.x<xMin)) {alpha=max(alpha,(P1.x-select(xMin,xMax,(P1.x>xMax)))/(P1.x-P0.x));}
P1=mix(P1,P0,alpha); k1=mix(k1,k0,alpha); Q1=mix(Q1,Q0,alpha);
#endif
P1+= vec2f(select(0.0,0.01,distanceSquared(P0,P1)<0.0001));var delta: vec2f=P1-P0;var permute: bool=false;if (abs(delta.x)<abs(delta.y)) { 
permute=true;delta=delta.yx;P0=P0.yx;P1=P1.yx; }
var stepDirection: f32=sign(delta.x);var invdx: f32=stepDirection/delta.x;var dP: vec2f= vec2f(stepDirection,delta.y*invdx);var dQ: vec3f=(Q1-Q0)*invdx;var dk: f32=(k1-k0)*invdx;var zMin: f32=min(csEndPoint.z,csOrigin.z);var zMax: f32=max(csEndPoint.z,csOrigin.z);dP*=stride; dQ*=stride; dk*=stride;P0+=dP*jitterFraction; Q0+=dQ*jitterFraction; k0+=dk*jitterFraction;var pqk: vec4f= vec4f(P0,Q0.z,k0);var dPQK: vec4f= vec4f(dP,dQ.z,dk);*startPixel=select(P0.xy,P0.yx,permute);var prevZMaxEstimate: f32=csOrigin.z;var rayZMin: f32=prevZMaxEstimate;var rayZMax=prevZMaxEstimate;var sceneZMax: f32=rayZMax+1e4;var end: f32=P1.x*stepDirection;var hit: bool=false;var stepCount: f32;for (stepCount=0.0;(stepCount<=selfCollisionNumSkip) ||
((pqk.x*stepDirection)<=end &&
stepCount<maxSteps &&
!hit &&
sceneZMax != 0.0);pqk+=dPQK 
)
{*hitPixel=select(pqk.xy,pqk.yx,permute);rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;if (rayZMin>rayZMax) { 
var t: f32=rayZMin; rayZMin=rayZMax; rayZMax=t;}
sceneZMax=textureLoad(csZBuffer,vec2<i32>(*hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var sceneBackZ: f32=textureLoad(csZBackBuffer,vec2<i32>(*hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMax>=sceneBackZ-csZThickness) && (rayZMin<=sceneZMax);
#else
hit=(rayZMax>=sceneZMax-csZThickness) && (rayZMin<=sceneZMax);
#endif
#else
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var sceneBackZ: f32=textureLoad(csZBackBuffer,vec2<i32>(*hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMin<=sceneBackZ+csZThickness) && (rayZMax>=sceneZMax) && (sceneZMax != 0.0);
#else
hit=(rayZMin<=sceneZMax+csZThickness) && (rayZMax>=sceneZMax);
#endif
#endif
stepCount+=1.0;}
pqk-=dPQK;stepCount-=1.0;if (((pqk.x+dPQK.x)*stepDirection)>end || (stepCount+1.0)>=maxSteps || sceneZMax==0.0) {hit=false;}
#ifdef SSRAYTRACE_ENABLE_REFINEMENT
if (stride>1.0 && hit) {pqk-=dPQK;stepCount-=1.0;var invStride: f32=1.0/stride;dPQK*=invStride;var refinementStepCount: f32=0.0;prevZMaxEstimate=pqk.z/pqk.w;rayZMax=prevZMaxEstimate;sceneZMax=rayZMax+1e7;for (;refinementStepCount<=1.0 ||
((refinementStepCount<=stride*1.4) &&
(rayZMax<sceneZMax) && (sceneZMax != 0.0));pqk+=dPQK)
{rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;rayZMax=max(rayZMax,rayZMin);*hitPixel=select(pqk.xy,pqk.yx,permute);sceneZMax=textureLoad(csZBuffer,vec2<i32>(*hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
refinementStepCount+=1.0;}
pqk-=dPQK;refinementStepCount-=1.0;stepCount+=refinementStepCount/stride;}
#endif
Q0=vec3f(Q0.xy+dQ.xy*stepCount,pqk.z);*csHitPoint=Q0/pqk.w;*numIterations=stepCount+1.0;
#ifdef SSRAYTRACE_DEBUG
if (((pqk.x+dPQK.x)*stepDirection)>end) {*debugColor= vec3f(0,0,1);} else if ((stepCount+1.0)>=maxSteps) {*debugColor= vec3f(1,0,0);} else if (sceneZMax==0.0) {*debugColor= vec3f(1,1,0);} else {*debugColor= vec3f(0,stepCount/maxSteps,0);}
#endif
return hit;}
/**
texCoord: in the [0,1] range
depth: depth in view space (range [znear,zfar]])
*/
fn computeViewPosFromUVDepth(texCoord: vec2f,depth: f32,projection: mat4x4f,invProjectionMatrix: mat4x4f)->vec3f {var xy=texCoord*2.0-1.0;var z: f32;
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef ORTHOGRAPHIC_CAMERA
z=-projection[2].z*depth+projection[3].z;
#else
z=-projection[2].z-projection[3].z/depth;
#endif
#else
#ifdef ORTHOGRAPHIC_CAMERA
z=projection[2].z*depth+projection[3].z;
#else
z=projection[2].z+projection[3].z/depth;
#endif
#endif
var w=1.0;var ndc=vec4f(xy,z,w);var eyePos: vec4f=invProjectionMatrix*ndc;var result=eyePos.xyz/eyePos.w;return result;}
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s([])},89744,e=>{"use strict";var r=e.i(33967);e.i(66911),e.i(73728),e.i(67930);let t="screenSpaceReflection2BlurCombinerPixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>; 
var mainSamplerSampler: sampler;var mainSampler: texture_2d<f32>;var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;uniform strength: f32;uniform reflectionSpecularFalloffExponent: f32;uniform reflectivityThreshold: f32;varying vUV: vec2f;
#include<helperFunctions>
#ifdef SSR_BLEND_WITH_FRESNEL
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
uniform projection: mat4x4f;uniform invProjectionMatrix: mat4x4f;
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
uniform view: mat4x4f;
#endif
var normalSampler: texture_2d<f32>;var depthSampler: texture_2d<f32>;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
uniform nearPlaneZ: f32;uniform farPlaneZ: f32;
#endif
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef SSRAYTRACE_DEBUG
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#else
var SSR: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var color: vec4f=textureSample(mainSampler,textureSamplerSampler,input.vUV);var reflectivity: vec4f=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vUV);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=uniforms.reflectivityThreshold) {fragmentOutputs.color=color;return fragmentOutputs;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpaceVec4(color);
#endif
#ifdef SSR_BLEND_WITH_FRESNEL
var texSize: vec2f= vec2f(textureDimensions(depthSampler,0));var csNormal: vec3f=textureLoad(normalSampler,vec2<i32>(input.vUV*texSize),0).xyz;
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(uniforms.view*vec4f(csNormal,0.0)).xyz;
#endif
var depth: f32=textureLoad(depthSampler,vec2<i32>(input.vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,uniforms.nearPlaneZ,uniforms.farPlaneZ);
#endif
var csPosition: vec3f=computeViewPosFromUVDepth(input.vUV,depth,uniforms.projection,uniforms.invProjectionMatrix);var csViewDirection: vec3f=normalize(csPosition);var F0: vec3f=reflectivity.rgb;var fresnel: vec3f=fresnelSchlickGGXVec3(max(dot(csNormal,-csViewDirection),0.0),F0, vec3f(1.));var reflectionMultiplier: vec3f=clamp(pow(fresnel*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#else
var reflectionMultiplier: vec3f=clamp(pow(reflectivity.rgb*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#endif
var colorMultiplier: vec3f=1.0-reflectionMultiplier;var finalColor: vec3f=(color.rgb*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpaceVec3(finalColor);
#endif
fragmentOutputs.color= vec4f(finalColor,color.a);
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["screenSpaceReflection2BlurCombinerPixelShaderWGSL",0,{name:t,shader:i}])},70870,e=>{"use strict";var r=e.i(33967);let t="bloomMergePixelShader",i=`uniform sampler2D textureSampler;uniform sampler2D bloomBlur;varying vec2 vUV;uniform float bloomWeight;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec3 blurred=texture2D(bloomBlur,vUV).rgb;gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight); }
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["bloomMergePixelShader",0,{name:t,shader:i}])},55423,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererFinaliserVertexShader",i=`precision highp float;attribute vec3 position;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec2 vUV;void main() {gl_Position=worldViewProjection*vec4(position,1.0);vUV=uv;}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["meshUVSpaceRendererFinaliserVertexShader",0,{name:t,shader:i}])},59339,65323,e=>{"use strict";var r=e.i(2089);function t(e){return e.split(" ").filter(e=>""!==e).map(e=>parseFloat(e))}function i(e,r,i){for(;i.length!==r;){let r=t(e.lines[e.index++]);i.push(...r)}}function a(e){let a={lines:new TextDecoder("utf-8").decode(e).split("\n"),index:0},o={version:a.lines[0],candelaValues:[],horizontalAngles:[],verticalAngles:[],numberOfHorizontalAngles:0,numberOfVerticalAngles:0};for(a.index=1;a.lines.length>0&&!a.lines[a.index].includes("TILT=");)a.index++;a.lines[a.index].includes("INCLUDE"),a.index++;let n=t(a.lines[a.index++]);o.numberOfLights=n[0],o.lumensPerLamp=n[1],o.candelaMultiplier=n[2],o.numberOfVerticalAngles=n[3],o.numberOfHorizontalAngles=n[4],o.photometricType=n[5],o.unitsType=n[6],o.width=n[7],o.length=n[8],o.height=n[9];let l=t(a.lines[a.index++]);o.ballastFactor=l[0],o.fileGenerationType=l[1],o.inputWatts=l[2];for(let e=0;e<o.numberOfHorizontalAngles;e++)o.candelaValues[e]=[];i(a,o.numberOfVerticalAngles,o.verticalAngles),i(a,o.numberOfHorizontalAngles,o.horizontalAngles);for(let e=0;e<o.numberOfHorizontalAngles;e++)i(a,o.numberOfVerticalAngles,o.candelaValues[e]);let s=-1;for(let e=0;e<o.numberOfHorizontalAngles;e++)for(let r=0;r<o.numberOfVerticalAngles;r++)o.candelaValues[e][r]*=o.candelaValues[e][r]*o.candelaMultiplier*o.ballastFactor*o.fileGenerationType,s=Math.max(s,o.candelaValues[e][r]);if(s>0)for(let e=0;e<o.numberOfHorizontalAngles;e++)for(let r=0;r<o.numberOfVerticalAngles;r++)o.candelaValues[e][r]/=s;let f=new Float32Array(64800),c=o.horizontalAngles[0],d=o.horizontalAngles[o.numberOfHorizontalAngles-1];for(let e=0;e<64800;e++){let t=e%360,i=Math.floor(e/360);d-c!=0&&(t<c||t>=d)&&(t%=2*d)>d&&(t=2*d-t),f[i+180*t]=function(e,t,i){let a=0,o=0,n=0,l=0,s=0,f=0;for(let r=0;r<e.numberOfHorizontalAngles-1;r++)if(i<e.horizontalAngles[r+1]||r===e.numberOfHorizontalAngles-2){o=r,n=e.horizontalAngles[r],l=e.horizontalAngles[r+1];break}for(let r=0;r<e.numberOfVerticalAngles-1;r++)if(t<e.verticalAngles[r+1]||r===e.numberOfVerticalAngles-2){a=r,s=e.verticalAngles[r],f=e.verticalAngles[r+1];break}let c=l-n,d=f-s;if(0===d)return 0;let u=0===c?0:(i-n)/c,p=(t-s)/d,m=0===c?o:o+1,v=(0,r.Lerp)(e.candelaValues[o][a],e.candelaValues[m][a],u),S=(0,r.Lerp)(e.candelaValues[o][a+1],e.candelaValues[m][a+1],u);return(0,r.Lerp)(v,S,p)}(o,i,t)}return{width:180,height:1,data:f}}e.s(["LoadIESData",0,a],65323),e.s(["_IESTextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(){throw".ies not supported in Cube."}loadData(e,r,t){let i=a(new Uint8Array(e.buffer,e.byteOffset,e.byteLength));t(i.width,i.height,!1,!1,()=>{let e=r.getEngine();r.type=1,r.format=6,r._gammaSpace=!1,e._uploadDataToTextureDirectly(r,i.data)})}}],59339)},82650,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(15906),e.i(18989),e.i(86463),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583),e.i(50328),e.i(51814);let t="geometryVertexShader",i=`#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<clipPlaneVertexDeclaration>
attribute position: vec3f;attribute normal: vec3f;
#ifdef NEED_UV
varying vUV: vec2f;
#ifdef ALPHATEST
uniform diffuseMatrix: mat4x4f;
#endif
#ifdef BUMP
uniform bumpMatrix: mat4x4f;varying vBumpUV: vec2f;
#endif
#ifdef REFLECTIVITY
uniform reflectivityMatrix: mat4x4f;uniform albedoMatrix: mat4x4f;varying vReflectivityUV: vec2f;varying vAlbedoUV: vec2f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#ifdef BUMP
varying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;
#endif
#ifdef BUMP
varying vNormalW: vec3f;
#else
varying vNormalV: vec3f;
#endif
varying vViewPos: vec4f;
#if defined(POSITION) || defined(BUMP)
varying vPositionW: vec3f;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;var normalUpdated: vec3f=input.normal;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f= vec4f(finalWorld* vec4f(positionUpdated,1.0));
#ifdef BUMP
let vWorldView=scene.view*finalWorld;vertexOutputs.vWorldView0=vWorldView[0];vertexOutputs.vWorldView1=vWorldView[1];vertexOutputs.vWorldView2=vWorldView[2];vertexOutputs.vWorldView3=vWorldView[3];let normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#else
#ifdef NORMAL_WORLDSPACE
vertexOutputs.vNormalV=normalize((finalWorld* vec4f(normalUpdated,0.0)).xyz);
#else
vertexOutputs.vNormalV=normalize(((scene.view*finalWorld)* vec4f(normalUpdated,0.0)).xyz);
#endif
#endif
vertexOutputs.vViewPos=scene.view*worldPos;
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=mPreviousBones[ i32(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[ i32(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[ i32(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[ i32(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vertexOutputs.vPositionW=worldPos.xyz/worldPos.w;
#endif
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);
#include<clipPlaneVertex>
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#else
vertexOutputs.vUV=uvUpdated;
#endif
#ifdef BUMP_UV1
vertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef REFLECTIVITY_UV1
vertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef ALBEDO_UV1
vertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#else
vertexOutputs.vUV=uv2Updated;
#endif
#ifdef BUMP_UV2
vertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#ifdef REFLECTIVITY_UV2
vertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#ifdef ALBEDO_UV2
vertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#endif
#include<bumpVertex>
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["geometryVertexShaderWGSL",0,{name:t,shader:i}])},42697,e=>{"use strict";var r=e.i(33967);let t="postprocessVertexShader",i=`attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["postprocessVertexShaderWGSL",0,{name:t,shader:i}])},56239,e=>{"use strict";var r=e.i(33967);let t="hdrFilteringVertexShader",i=`attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["hdrFilteringVertexShaderWGSL",0,{name:t,shader:i}])},1622,e=>{"use strict";var r=e.i(33967);let t="hdrFilteringVertexShader",i=`attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["hdrFilteringVertexShader",0,{name:t,shader:i}])},54425,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleThicknessPixelShader",i=`uniform particleAlpha: f32;varying uv: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
var thickness: f32=sqrt(1.0-r2);fragmentOutputs.color=vec4f(vec3f(uniforms.particleAlpha*thickness),1.0);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingParticleThicknessPixelShaderWGSL",0,{name:t,shader:i}])},88664,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleThicknessVertexShader",i=`attribute vec3 position;attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 size;varying vec2 uv;void main(void) {vec3 cornerPos;cornerPos.xy=vec2(offset.x-0.5,offset.y-0.5)*size;cornerPos.z=0.0;vec3 viewPos=(view*vec4(position,1.0)).xyz+cornerPos;gl_Position=projection*vec4(viewPos,1.0);uv=offset;}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingParticleThicknessVertexShader",0,{name:t,shader:i}])},60637,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleThicknessVertexShader",i=`attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);var viewPos: vec3f=(uniforms.view*vec4f(input.position,1.0)).xyz+cornerPos;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0);vertexOutputs.uv=input.offset;}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingParticleThicknessVertexShaderWGSL",0,{name:t,shader:i}])},94221,e=>{"use strict";var r=e.i(33967);let t="blackAndWhitePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform degree: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var luminance: f32=dot(color, vec3f(0.3,0.59,0.11)); 
var blackAndWhite: vec3f= vec3f(luminance,luminance,luminance);fragmentOutputs.color= vec4f(color-((color-blackAndWhite)*uniforms.degree),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["blackAndWhitePixelShaderWGSL",0,{name:t,shader:i}])},22391,e=>{"use strict";var r=e.i(33967);let t="oitFinalPixelShader",i=`var uFrontColor: texture_2d<f32>;var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var frontColor: vec4f=textureLoad(uFrontColor,fragCoord,0);var backColor: vec4f=textureLoad(uBackColor,fragCoord,0);var alphaMultiplier: f32=1.0-frontColor.a;fragmentOutputs.color=vec4f(
frontColor.rgb+alphaMultiplier*backColor.rgb,
frontColor.a+backColor.a
);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["oitFinalPixelShaderWGSL",0,{name:t,shader:i}])},35116,e=>{"use strict";var r=e.i(64102),t=e.i(61724),i=e.i(99839),a=e.i(59637);class o extends r.FlowGraphEventBlock{constructor(e){super(e),this.type="PointerOut",this.pointerId=this.registerDataOutput("pointerId",t.RichTypeNumber),this.targetMesh=this.registerDataInput("targetMesh",t.RichTypeAny,e?.targetMesh),this.meshOutOfPointer=this.registerDataOutput("meshOutOfPointer",t.RichTypeAny)}_executeEvent(e,r){let t=this.targetMesh.getValue(e);return this.meshOutOfPointer.setValue(r.mesh,e),this.pointerId.setValue(r.pointerId,e),!(!(r.over&&(0,a._isADescendantOf)(r.mesh,t))&&(r.mesh===t||(0,a._isADescendantOf)(r.mesh,t)))||(this._execute(e),!this.config?.stopPropagation)}_preparePendingTasks(e){}_cancelPendingTasks(e){}getClassName(){return"FlowGraphPointerOutEventBlock"}}(0,i.RegisterClass)("FlowGraphPointerOutEventBlock",o),e.s(["FlowGraphPointerOutEventBlock",0,o])},13815,e=>{"use strict";var r=e.i(99839),t=e.i(33316);class i extends t.FlowGraphExecutionBlock{constructor(e){super(e),this.config=e,this.executionSignals=[],this.setNumberOfOutputSignals(this.config.outputSignalCount)}_execute(e){for(let r=0;r<this.executionSignals.length;r++)this.executionSignals[r]._activateSignal(e)}setNumberOfOutputSignals(e=1){for(;this.executionSignals.length>e;){let e=this.executionSignals.pop();e&&(e.disconnectFromAll(),this._unregisterSignalOutput(e.name))}for(;this.executionSignals.length<e;)this.executionSignals.push(this._registerSignalOutput(`out_${this.executionSignals.length}`))}getClassName(){return"FlowGraphSequenceBlock"}}(0,r.RegisterClass)("FlowGraphSequenceBlock",i),e.s(["FlowGraphSequenceBlock",0,i])},52102,e=>{"use strict";var r=e.i(33967);let t="boundingBoxRendererUboDeclaration",i=`#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},47782,e=>{"use strict";var r=e.i(33967);let t="boundingBoxRendererFragmentDeclaration",i=`uniform vec4 color;
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(52102);let a="boundingBoxRendererPixelShader",o=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["boundingBoxRendererPixelShader",0,{name:a,shader:o}],47782)},88295,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGrid3dDebugPixelShader",i=`precision highp sampler3D;varying vec2 vUV;uniform sampler3D voxelTexture;uniform sampler2D voxelSlabTexture;uniform sampler2D textureSampler;uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
uniform float mipNumber;void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 background=texture2D(textureSampler,vUV);vec4 voxelSlab=texture2D(voxelSlabTexture,vUV);ivec3 size=textureSize(voxelTexture,int(mipNumber));float dimension=ceil(sqrt(float(size.z)));vec2 samplePos=fract(uv.xy*vec2(dimension));int sampleIndex=int(floor(uv.x*float(dimension)) +
floor(uv.y*float(dimension))*dimension);float mip_separator=0.0;if (samplePos.x<0.01 || samplePos.y<0.01) {mip_separator=1.0;}
bool outBounds=sampleIndex>size.z-1 ? true : false;sampleIndex=clamp(sampleIndex,0,size.z-1);ivec2 samplePosInt=ivec2(samplePos.xy*vec2(size.xy));vec3 voxel=texelFetch(voxelTexture,
ivec3(samplePosInt.x,samplePosInt.y,sampleIndex),
int(mipNumber))
.rgb;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=background;} else {if (outBounds) {voxel=vec3(0.15,0.0,0.0);} else {if (voxel.r>0.001) {voxel.g=1.0;}
voxel.r+=mip_separator;}
glFragColor.rgb=mix(background.rgb,voxelSlab.rgb,voxelSlab.a)+voxel;glFragColor.a=1.0;}}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblVoxelGrid3dDebugPixelShader",0,{name:t,shader:i}])},64784,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(86463),e.i(15906),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583),e.i(50328);let t="glowMapGenerationVertexShader",i=`attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;varying vPosition: vec4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;uniform diffuseMatrix: mat4x4f;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;uniform opacityMatrix: mat4x4f;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;uniform emissiveMatrix: mat4x4f;
#endif
#ifdef VERTEXALPHA
attribute color: vec4f;varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef CUBEMAP
vertexOutputs.vPosition=worldPos;vertexOutputs.position=uniforms.viewProjection*finalWorld* vec4f(input.position,1.0);
#else
vertexOutputs.vPosition=uniforms.viewProjection*worldPos;vertexOutputs.position=vertexOutputs.vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef DIFFUSEUV2
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef OPACITYUV2
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef EMISSIVEUV2
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef VERTEXALPHA
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<clipPlaneVertex>
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["glowMapGenerationVertexShaderWGSL",0,{name:t,shader:i}])},88242,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(86463),e.i(15906),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583),e.i(50328);let t="depthVertexShader",i=`attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;uniform depthValues: vec2f;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform view: mat4x4f;varying vViewPos: vec4f;
#endif
varying vDepthMetric: f32;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#include<clipPlaneVertex>
vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vertexOutputs.vViewPos=uniforms.view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric=((-vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#else
vertexOutputs.vDepthMetric=((vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["depthVertexShaderWGSL",0,{name:t,shader:i}])},96563,e=>{"use strict";var r=e.i(33967);let t="copyTexture3DLayerToTexturePixelShader",i=`precision highp sampler3D;uniform sampler3D textureSampler;uniform int layerNum;varying vec2 vUV;void main(void) {vec3 coord=vec3(0.0,0.0,float(layerNum));coord.xy=vec2(vUV.x,vUV.y)*vec2(textureSize(textureSampler,0).xy);vec3 color=texelFetch(textureSampler,ivec3(coord),0).rgb;gl_FragColor=vec4(color,1);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["copyTexture3DLayerToTexturePixelShader",0,{name:t,shader:i}])},87877,e=>{"use strict";var r=e.i(33967);let t="iblCdfxPixelShader",i=`#define PI 3.1415927
varying vUV: vec2f;var cdfy: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var cdfyRes=textureDimensions(cdfy,0);var currentPixel=vec2u(fragmentInputs.position.xy);var cdfx: f32=0.0;for (var x: u32=1; x<=currentPixel.x; x++) {cdfx+=textureLoad(cdfy, vec2u(x-1,cdfyRes.y-1),0).x;}
fragmentOutputs.color= vec4f( vec3f(cdfx),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblCdfxPixelShaderWGSL",0,{name:t,shader:i}])},77901,e=>{"use strict";var r=e.i(33967);let t="oitFinalPixelShader",i=`precision highp float;uniform sampler2D uFrontColor;uniform sampler2D uBackColor;void main() {ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec4 frontColor=texelFetch(uFrontColor,fragCoord,0);vec4 backColor=texelFetch(uBackColor,fragCoord,0);float alphaMultiplier=1.0-frontColor.a;glFragColor=vec4(
frontColor.rgb+alphaMultiplier*backColor.rgb,
frontColor.a+backColor.a
);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["oitFinalPixelShader",0,{name:t,shader:i}])},21678,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="layerPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor=toGammaSpace(baseColor);
#elif defined(CONVERT_TO_LINEAR)
baseColor=toLinearSpaceVec4(baseColor);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4) {discard;}
#endif
fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["layerPixelShaderWGSL",0,{name:t,shader:i}])},70053,e=>{"use strict";var r=e.i(22969),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.config=e,this.object=this.registerDataInput("object",t.RichTypeAny,e.target),this.value=this.registerDataInput("value",t.RichTypeAny),this.propertyName=this.registerDataInput("propertyName",t.RichTypeAny,e.propertyName),this.customSetFunction=this.registerDataInput("customSetFunction",t.RichTypeAny)}_execute(e,r){try{let r=this.object.getValue(e),t=this.value.getValue(e),i=this.customSetFunction.getValue(e);i?i(r,this.propertyName.getValue(e),t,e):this._setPropertyValue(r,this.propertyName.getValue(e),t)}catch(r){this._reportError(e,r)}this.out._activateSignal(e)}_setPropertyValue(e,r,t){let i=r.split("."),a=e;for(let e=0;e<i.length-1;e++){let r=i[e];void 0===a[r]&&(a[r]={}),a=a[r]}a[i[i.length-1]]=t}getClassName(){return"FlowGraphSetPropertyBlock"}}(0,i.RegisterClass)("FlowGraphSetPropertyBlock",a),e.s(["FlowGraphSetPropertyBlock",0,a])},64082,e=>{"use strict";var r=e.i(33967);let t="rsmFullGlobalIlluminationPixelShader",i=`/**
* The implementation is a direct application of the formula found in http:
*/
varying vUV: vec2f;uniform rsmLightMatrix: mat4x4f;uniform rsmInfo: vec4f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var rsmPositionW: texture_2d<f32>;var rsmNormalW: texture_2d<f32>;var rsmFlux: texture_2d<f32>;
#ifdef TRANSFORM_NORMAL
uniform invView: mat4x4f;
#endif
fn computeIndirect(p: vec3f,n: vec3f)->vec3f {var indirectDiffuse: vec3f= vec3f(0.);var intensity: f32=uniforms.rsmInfo.z;var edgeArtifactCorrection: f32=uniforms.rsmInfo.w;var texRSM: vec4f=uniforms.rsmLightMatrix* vec4f(p,1.);texRSM=vec4f(texRSM.xy/texRSM.w,texRSM.z,texRSM.w);texRSM=vec4f(texRSM.xy*0.5+0.5,texRSM.z,texRSM.w);var width: i32= i32(uniforms.rsmInfo.x);var height: i32= i32(uniforms.rsmInfo.y);for (var j: i32=0; j<height; j++) {for (var i: i32=0; i<width; i++) {var uv=vec2<i32>(i,j);var vplPositionW: vec3f=textureLoad(rsmPositionW,uv,0).xyz;var vplNormalW: vec3f=textureLoad(rsmNormalW,uv,0).xyz*2.0-1.0;var vplFlux: vec3f=textureLoad(rsmFlux,uv,0).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
var dist2: f32=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}}
return clamp(indirectDiffuse*intensity,vec3f(0.0),vec3f(1.0));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var positionW: vec3f=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV).xyz;var normalW: vec3f=textureSample(normalSampler,normalSamplerSampler,fragmentInputs.vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(uniforms.invView* vec4f(normalW,0.)).xyz;
#endif
fragmentOutputs.color=vec4f(computeIndirect(positionW,normalW),1.0);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["rsmFullGlobalIlluminationPixelShaderWGSL",0,{name:t,shader:i}])},26634,e=>{"use strict";var r=e.i(33967);e.i(8100),e.i(47267);let t="kernelBlurFragment",i=`#ifdef DOF
factor=sampleCoC(fragmentInputs.sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCoord{X}))*computedWeight;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCoord{X})*computedWeight;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i);let a="kernelBlurFragment2",o=`#ifdef DOF
factor=sampleCoC(fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[a]||(r.ShaderStore.IncludesShadersStoreWGSL[a]=o);let n="kernelBlurPixelShader",l=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform delta: vec2f;varying sampleCenter: vec2f;
#ifdef DOF
var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;fn sampleCoC(offset: vec2f)->f32 {var coc: f32=textureSample(circleOfConfusionSampler,circleOfConfusionSamplerSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var computedWeight: f32=0.0;
#ifdef PACKEDFLOAT
var blend: f32=0.;
#else
var blend: vec4f= vec4f(0.);
#endif
#ifdef DOF
var sumOfWeights: f32=CENTER_WEIGHT; 
var factor: f32=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,input.sampleCenter))*CENTER_WEIGHT;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,input.sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
fragmentOutputs.color=pack(blend);
#else
fragmentOutputs.color=blend;
#endif
#ifdef DOF
fragmentOutputs.color/=sumOfWeights;
#endif
}`;r.ShaderStore.ShadersStoreWGSL[n]||(r.ShaderStore.ShadersStoreWGSL[n]=l),e.s(["kernelBlurPixelShaderWGSL",0,{name:n,shader:l}],26634)},39831,e=>{"use strict";var r=e.i(33967);e.i(86463),e.i(55112),e.i(27104),e.i(50328),e.i(8882),e.i(6474);let t="particlesVertexShader",i=`attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;
#ifdef ANIMATESHEET
attribute cellIndex: f32;
#endif
#ifndef BILLBOARD
attribute direction: vec3f;
#endif
#ifdef BILLBOARDSTRETCHED
attribute direction: vec3f;
#endif
#ifdef RAMPGRADIENT
attribute remapData: vec4f;
#endif
attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform translationPivot: vec2f;
#ifdef ANIMATESHEET
uniform particlesInfos: vec3f; 
#endif
varying vUV: vec2f;varying vColor: vec4f;varying vPositionW: vec3f;
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform invView: mat4x4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform eyePosition: vec3f;
#endif
fn rotate(yaxis: vec3f,rotatedCorner: vec3f)->vec3f {var xaxis: vec3f=normalize(cross( vec3f(0.,1.0,0.),yaxis));var zaxis: vec3f=normalize(cross(yaxis,xaxis));var row0: vec3f= vec3f(xaxis.x,xaxis.y,xaxis.z);var row1: vec3f= vec3f(yaxis.x,yaxis.y,yaxis.z);var row2: vec3f= vec3f(zaxis.x,zaxis.y,zaxis.z);var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
fn rotateAlign(toCamera: vec3f,rotatedCorner: vec3f)->vec3f {var normalizedToCamera: vec3f=normalize(toCamera);var normalizedCrossDirToCamera: vec3f=normalize(cross(normalize(vertexInputs.direction),normalizedToCamera));var row0: vec3f= vec3f(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);var row2: vec3f= vec3f(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
var row1: vec3f=vertexInputs.direction;
#else
var crossProduct: vec3f=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));var row1: vec3f= vec3f(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var cornerPos: vec2f;cornerPos=( vec2f(input.offset.x-0.5,input.offset.y -0.5)-uniforms.translationPivot)*input.size;
#ifdef BILLBOARD
var rotatedCorner: vec3f;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=input.position-uniforms.eyePosition;yaxis.y=0.;vertexOutputs.vPositionW=rotate(normalize(yaxis),rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vertexOutputs.vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var toCamera: vec3f=input.position-uniforms.eyePosition;vertexOutputs.vPositionW=rotateAlign(toCamera,rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vertexOutputs.vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var viewPos: vec3f=(uniforms.view* vec4f(input.position,1.0)).xyz+rotatedCorner;vertexOutputs.vPositionW=(uniforms.invView* vec4f(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
vertexOutputs.remapRanges=input.remapData;
#endif
vertexOutputs.position=uniforms.projection* vec4f(viewPos,1.0);
#else
var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=normalize(vertexInputs.direction);vertexOutputs.vPositionW=rotate(yaxis,rotatedCorner);vertexOutputs.position=uniforms.projection*uniforms.view* vec4f(vertexOutputs.vPositionW,1.0);
#endif
vertexOutputs.vColor=input.color;
#ifdef ANIMATESHEET
var rowOffset: f32=floor(input.cellIndex*uniforms.particlesInfos.z);var columnOffset: f32=input.cellIndex-rowOffset/uniforms.particlesInfos.z;var uvScale: vec2f=uniforms.particlesInfos.xy;var uvOffset: vec2f= vec2f(input.offset.x ,1.0-input.offset.y);vertexOutputs.vUV=(uvOffset+ vec2f(columnOffset,rowOffset))*uvScale;
#else
vertexOutputs.vUV=input.offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
var worldPos: vec4f= vec4f(vertexOutputs.vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["particlesVertexShaderWGSL",0,{name:t,shader:i}])},70972,e=>{"use strict";var r=e.i(33967);let t="shadowMapFragment",i=`float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
depthSM=clamp(depthSM,0.0,1.0);
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["shadowMapFragment",0,{name:t,shader:i}])},45277,e=>{"use strict";var r=e.i(33967);e.i(71133);let t="bayerDitherFunctions",i=`float bayerDither2(vec2 _P) {return mod(2.0*_P.y+_P.x+1.0,4.0);}
float bayerDither4(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
float bayerDither8(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i);let a="shadowMapFragmentExtraDeclaration",o=`#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform vec2 softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o),e.i(28248),e.i(11364),e.i(70972);let n="shadowMapPixelShader",l=`#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
vec4 opacityMap=texture2D(diffuseSampler,vUV);float alphaFromAlphaTexture=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (softTransparentShadowSM.y==1.0) {opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE)
discard;
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x) discard;
#endif
#endif
#include<shadowMapFragment>
}`;r.ShaderStore.ShadersStore[n]||(r.ShaderStore.ShadersStore[n]=l),e.s(["shadowMapPixelShader",0,{name:n,shader:l}],45277)},20489,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingRenderPixelShader",i=`#define DISABLE_UNIFORMITY_ANALYSIS
#define IOR 1.333
#define ETA 1.0/IOR
#define F0 0.02
uniform sampler2D textureSampler;uniform sampler2D depthSampler;
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
uniform sampler2D diffuseSampler;
#else
uniform vec3 diffuseColor;
#endif
#ifdef FLUIDRENDERING_FIXED_THICKNESS
uniform float thickness;uniform sampler2D bgDepthSampler;
#else
uniform float minimumThickness;uniform sampler2D thicknessSampler;
#endif
#ifdef FLUIDRENDERING_ENVIRONMENT
uniform samplerCube reflectionSampler;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
uniform sampler2D debugSampler;
#endif
uniform mat4 viewMatrix;uniform mat4 projectionMatrix;uniform mat4 invProjectionMatrix;uniform vec2 texelSize;uniform vec3 dirLight;uniform float cameraFar;uniform float density;uniform float refractionStrength;uniform float fresnelClamp;uniform float specularPower;varying vec2 vUV;vec3 computeViewPosFromUVDepth(vec2 texCoord,float depth) {vec4 ndc;ndc.xy=texCoord*2.0-1.0;
#ifdef FLUIDRENDERING_RHS
ndc.z=-projectionMatrix[2].z+projectionMatrix[3].z/depth;
#else
ndc.z=projectionMatrix[2].z+projectionMatrix[3].z/depth;
#endif
ndc.w=1.0;vec4 eyePos=invProjectionMatrix*ndc;eyePos.xyz/=eyePos.w;return eyePos.xyz;}
vec3 getViewPosFromTexCoord(vec2 texCoord) {float depth=textureLod(depthSampler,texCoord,0.).x;return computeViewPosFromUVDepth(texCoord,depth);}
void main(void) {vec2 texCoord=vUV;
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
vec4 color=texture2D(debugSampler,texCoord);
#ifdef FLUIDRENDERING_DEBUG_DEPTH
glFragColor=vec4(color.rgb/vec3(2.0),1.);if (color.r>0.999 && color.g>0.999) {glFragColor=texture2D(textureSampler,texCoord);}
#else
glFragColor=vec4(color.rgb,1.);if (color.r<0.001 && color.g<0.001 && color.b<0.001) {glFragColor=texture2D(textureSampler,texCoord);}
#endif
return;
#endif
vec2 depthVel=textureLod(depthSampler,texCoord,0.).rg;float depth=depthVel.r;
#ifndef FLUIDRENDERING_FIXED_THICKNESS
float thickness=texture2D(thicknessSampler,texCoord).x;
#else
float bgDepth=texture2D(bgDepthSampler,texCoord).x;float depthNonLinear=projectionMatrix[2].z+projectionMatrix[3].z/depth;depthNonLinear=depthNonLinear*0.5+0.5;
#endif
vec4 backColor=texture2D(textureSampler,texCoord);
#ifndef FLUIDRENDERING_FIXED_THICKNESS
if (depth>=cameraFar || depth<=0. || thickness<=minimumThickness) {
#else
if (depth>=cameraFar || depth<=0. || bgDepth<=depthNonLinear) {
#endif
#ifdef FLUIDRENDERING_COMPOSITE_MODE
glFragColor.rgb=backColor.rgb*backColor.a;glFragColor.a=backColor.a;
#else
glFragColor=backColor;
#endif
return;}
vec3 viewPos=computeViewPosFromUVDepth(texCoord,depth);vec3 ddx=getViewPosFromTexCoord(texCoord+vec2(texelSize.x,0.))-viewPos;vec3 ddy=getViewPosFromTexCoord(texCoord+vec2(0.,texelSize.y))-viewPos;vec3 ddx2=viewPos-getViewPosFromTexCoord(texCoord+vec2(-texelSize.x,0.));if (abs(ddx.z)>abs(ddx2.z)) {ddx=ddx2;}
vec3 ddy2=viewPos-getViewPosFromTexCoord(texCoord+vec2(0.,-texelSize.y));if (abs(ddy.z)>abs(ddy2.z)) {ddy=ddy2;}
vec3 normal=normalize(cross(ddy,ddx));
#ifdef FLUIDRENDERING_RHS
normal=-normal;
#endif
#ifndef WEBGPU
if(isnan(normal.x) || isnan(normal.y) || isnan(normal.z) || isinf(normal.x) || isinf(normal.y) || isinf(normal.z)) {normal=vec3(0.,0.,-1.);}
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_SHOWNORMAL)
glFragColor=vec4(normal*0.5+0.5,1.0);return;
#endif
vec3 rayDir=normalize(viewPos); 
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
vec3 diffuseColor=textureLod(diffuseSampler,texCoord,0.0).rgb;
#endif
vec3 lightDir=normalize(vec3(viewMatrix*vec4(-dirLight,0.)));vec3 H =normalize(lightDir-rayDir);float specular=pow(max(0.0,dot(H,normal)),specularPower);
#ifdef FLUIDRENDERING_DEBUG_DIFFUSERENDERING
float diffuse =max(0.0,dot(lightDir,normal))*1.0;glFragColor=vec4(vec3(0.1) /*ambient*/+vec3(0.42,0.50,1.00)*diffuse+vec3(0,0,0.2)+specular,1.);return;
#endif
vec3 refractionDir=refract(rayDir,normal,ETA);vec4 transmitted=textureLod(textureSampler,vec2(texCoord+refractionDir.xy*thickness*refractionStrength),0.0);
#ifdef FLUIDRENDERING_COMPOSITE_MODE
if (transmitted.a==0.) transmitted.a=thickness;
#endif
vec3 transmittance=exp(-density*thickness*(1.0-diffuseColor)); 
vec3 refractionColor=transmitted.rgb*transmittance;
#ifdef FLUIDRENDERING_ENVIRONMENT
vec3 reflectionDir=reflect(rayDir,normal);vec3 reflectionColor=(textureCube(reflectionSampler,reflectionDir).rgb);float fresnel=clamp(F0+(1.0-F0)*pow(1.0-dot(normal,-rayDir),5.0),0.,fresnelClamp);vec3 finalColor=mix(refractionColor,reflectionColor,fresnel)+specular;
#else
vec3 finalColor=refractionColor+specular;
#endif
#ifdef FLUIDRENDERING_VELOCITY
float velocity=depthVel.g;finalColor=mix(finalColor,vec3(1.0),smoothstep(0.3,1.0,velocity/6.0));
#endif
glFragColor=vec4(finalColor,transmitted.a);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingRenderPixelShader",0,{name:t,shader:i}])},19365,e=>{"use strict";var r=e.i(33967);let t="shadowMapVertexMetric",i=`#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["shadowMapVertexMetric",0,{name:t,shader:i}])},68169,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(13851);let t="sceneVertexDeclaration",i=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i);let a="meshVertexDeclaration",o=`uniform mat4 world;uniform float visibility;
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o);let n="shadowMapVertexDeclaration",l=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;r.ShaderStore.IncludesShadersStore[n]||(r.ShaderStore.IncludesShadersStore[n]=l),e.i(84400),e.i(17463);let s="shadowMapUboDeclaration",f=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;r.ShaderStore.IncludesShadersStore[s]||(r.ShaderStore.IncludesShadersStore[s]=f);let c="shadowMapVertexExtraDeclaration",d=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;r.ShaderStore.IncludesShadersStore[c]||(r.ShaderStore.IncludesShadersStore[c]=d),e.i(26230),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754);let u="shadowMapVertexNormalBias",p=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;r.ShaderStore.IncludesShadersStore[u]||(r.ShaderStore.IncludesShadersStore[u]=p),e.i(19365),e.i(7025);let m="shadowMapVertexShader",v=`attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;r.ShaderStore.ShadersStore[m]||(r.ShaderStore.ShadersStore[m]=v),e.s(["shadowMapVertexShader",0,{name:m,shader:v}],68169)},15208,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(52656),a=e.i(99839),o=e.i(98825),n=e.i(54798);class l extends o.FlowGraphUnaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),(0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),e=>e.transpose?e.transpose():i.Matrix.Transpose(e),"FlowGraphTransposeBlock",e)}}(0,a.RegisterClass)("FlowGraphTransposeBlock",l);class s extends o.FlowGraphUnaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),t.RichTypeNumber,e=>e.determinant(),"FlowGraphDeterminantBlock",e)}}(0,a.RegisterClass)("FlowGraphDeterminantBlock",s);class f extends o.FlowGraphUnaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),(0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),e=>e.inverse?e.inverse():i.Matrix.Invert(e),"FlowGraphInvertMatrixBlock",e)}}(0,a.RegisterClass)("FlowGraphInvertMatrixBlock",f);class c extends n.FlowGraphBinaryOperationBlock{constructor(e){super((0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),(0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),(0,t.getRichTypeByFlowGraphType)(e?.matrixType||"Matrix"),(e,r)=>r.multiply(e),"FlowGraphMatrixMultiplicationBlock",e)}}(0,a.RegisterClass)("FlowGraphMatrixMultiplicationBlock",c);class d extends r.FlowGraphBlock{constructor(e){super(e),this.input=this.registerDataInput("input",t.RichTypeMatrix),this.position=this.registerDataOutput("position",t.RichTypeVector3),this.rotationQuaternion=this.registerDataOutput("rotationQuaternion",t.RichTypeQuaternion),this.scaling=this.registerDataOutput("scaling",t.RichTypeVector3),this.isValid=this.registerDataOutput("isValid",t.RichTypeBoolean,!1)}_updateOutputs(e){let r=e._getExecutionVariable(this,"executionId",-1),t=e._getExecutionVariable(this,"cachedPosition",null),a=e._getExecutionVariable(this,"cachedRotation",null),o=e._getExecutionVariable(this,"cachedScaling",null);if(r===e.executionId&&t&&a&&o)this.position.setValue(t,e),this.rotationQuaternion.setValue(a,e),this.scaling.setValue(o,e);else{let r=this.input.getValue(e),n=t||new i.Vector3,l=a||new i.Quaternion,s=o||new i.Vector3,f=Math.round(1e4*r.m[3])/1e4,c=Math.round(1e4*r.m[7])/1e4,d=Math.round(1e4*r.m[11])/1e4,u=Math.round(1e4*r.m[15])/1e4;if(0!==f||0!==c||0!==d||1!==u){this.isValid.setValue(!1,e),this.position.setValue(i.Vector3.Zero(),e),this.rotationQuaternion.setValue(i.Quaternion.Identity(),e),this.scaling.setValue(i.Vector3.One(),e);return}let p=r.decompose(s,l,n);this.isValid.setValue(p,e),this.position.setValue(n,e),this.rotationQuaternion.setValue(l,e),this.scaling.setValue(s,e),e._setExecutionVariable(this,"cachedPosition",n),e._setExecutionVariable(this,"cachedRotation",l),e._setExecutionVariable(this,"cachedScaling",s),e._setExecutionVariable(this,"executionId",e.executionId)}}getClassName(){return"FlowGraphMatrixDecompose"}}(0,a.RegisterClass)("FlowGraphMatrixDecompose",d);class u extends r.FlowGraphBlock{constructor(e){super(e),this.position=this.registerDataInput("position",t.RichTypeVector3),this.rotationQuaternion=this.registerDataInput("rotationQuaternion",t.RichTypeQuaternion),this.scaling=this.registerDataInput("scaling",t.RichTypeVector3),this.value=this.registerDataOutput("value",t.RichTypeMatrix)}_updateOutputs(e){let r=e._getExecutionVariable(this,"executionId",-1),t=e._getExecutionVariable(this,"cachedMatrix",null);if(r===e.executionId&&t)this.value.setValue(t,e);else{let r=i.Matrix.Compose(this.scaling.getValue(e),this.rotationQuaternion.getValue(e),this.position.getValue(e));this.value.setValue(r,e),e._setExecutionVariable(this,"cachedMatrix",r),e._setExecutionVariable(this,"executionId",e.executionId)}}getClassName(){return"FlowGraphMatrixCompose"}}(0,a.RegisterClass)("FlowGraphMatrixCompose",u),e.s(["FlowGraphDeterminantBlock",0,s,"FlowGraphInvertMatrixBlock",0,f,"FlowGraphMatrixComposeBlock",0,u,"FlowGraphMatrixDecomposeBlock",0,d,"FlowGraphMatrixMultiplicationBlock",0,c,"FlowGraphTransposeBlock",0,l])},71158,e=>{"use strict";var r=e.i(33967);e.i(28248),e.i(31713),e.i(24137),e.i(13851),e.i(41092),e.i(1414),e.i(11364),e.i(93563),e.i(93741);let t="particlesPixelShader",i=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying vec4 remapRanges;uniform sampler2D rampSampler;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec4 textureColor=texture2D(diffuseSampler,vUV);vec4 baseColor=(textureColor*textureMask+(vec4(1.,1.,1.,1.)-textureMask))*vColor;
#ifdef RAMPGRADIENT
float alpha=baseColor.a;float remappedColorIndex=clamp((alpha-remapRanges.x)/remapRanges.y,0.0,1.0);vec4 rampColor=texture2D(rampSampler,vec2(1.0-remappedColorIndex,0.));baseColor.rgb*=rampColor.rgb;float finalAlpha=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-remapRanges.z)/remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
float sourceAlpha=vColor.a*textureColor.a;baseColor.rgb=baseColor.rgb*sourceAlpha+vec3(1.0)*(1.0-sourceAlpha);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor.rgb=toLinearSpace(baseColor.rgb);
#else
#ifdef IMAGEPROCESSING
baseColor.rgb=toLinearSpace(baseColor.rgb);baseColor=applyImageProcessing(baseColor);
#endif
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["particlesPixelShader",0,{name:t,shader:i}])},73022,e=>{"use strict";var r=e.i(33967);let t="screenSpaceReflection2BlurPixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;uniform texelOffsetScale: vec2f;const weights: array<f32,8>=array<f32,8>(0.071303,0.131514,0.189879,0.321392,0.452906, 0.584419,0.715932,0.847445);fn processSample(uv: vec2f,i: f32,stepSize: vec2f,accumulator: ptr<function,vec4f>,denominator: ptr<function,f32>)
{var offsetUV: vec2f=stepSize*i+uv;var coefficient: f32=weights[ i32(2.0-abs(i))];*accumulator+=textureSampleLevel(textureSampler,textureSamplerSampler,offsetUV,0.0)*coefficient;*denominator+=coefficient;}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colorFull: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);if (dot(colorFull, vec4f(1.0))==0.0) {fragmentOutputs.color=colorFull;return fragmentOutputs;}
var blurRadius: f32=colorFull.a*255.0; 
var stepSize: vec2f=uniforms.texelOffsetScale.xy*blurRadius;var accumulator: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0)*0.214607;var denominator: f32=0.214607;processSample(input.vUV,1.0,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.2,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.4,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.6,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.8,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.2,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.4,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.6,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.8,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*2.0,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.2,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.4,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.6,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.8,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.2,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.4,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.6,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.8,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*2.0,stepSize,&accumulator,&denominator);fragmentOutputs.color= vec4f(accumulator.rgb/denominator,colorFull.a);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["screenSpaceReflection2BlurPixelShaderWGSL",0,{name:t,shader:i}])},5145,e=>{"use strict";var r=e.i(33967);let t="iblShadowDebugPixelShader",i=`#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D debugSampler;uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 background=texture2D(textureSampler,vUV);vec4 debugColour=texture2D(debugSampler,vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=background;} else {gl_FragColor.rgb=mix(debugColour.rgb,background.rgb,0.0);gl_FragColor.a=1.0;}}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblShadowDebugPixelShader",0,{name:t,shader:i}])},32669,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingBilateralBlurPixelShader",i=`uniform sampler2D textureSampler;uniform int maxFilterSize;uniform vec2 blurDir;uniform float projectedParticleConstant;uniform float depthThreshold;varying vec2 vUV;void main(void) {float depth=textureLod(textureSampler,vUV,0.).x;if (depth>=1e6 || depth<=0.) {glFragColor=vec4(vec3(depth),1.);return;}
int filterSize=min(maxFilterSize,int(ceil(projectedParticleConstant/depth)));float sigma=float(filterSize)/3.0;float two_sigma2=2.0*sigma*sigma;float sigmaDepth=depthThreshold/3.0;float two_sigmaDepth2=2.0*sigmaDepth*sigmaDepth;float sum=0.;float wsum=0.;float sumVel=0.;for (int x=-filterSize; x<=filterSize; ++x) {vec2 coords=vec2(x);vec2 sampleDepthVel=textureLod(textureSampler,vUV+coords*blurDir,0.).rg;float r=dot(coords,coords);float w=exp(-r/two_sigma2);float rDepth=sampleDepthVel.r-depth;float wd=exp(-rDepth*rDepth/two_sigmaDepth2);sum+=sampleDepthVel.r*w*wd;sumVel+=sampleDepthVel.g*w*wd;wsum+=w*wd;}
glFragColor=vec4(sum/wsum,sumVel/wsum,0.,1.);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingBilateralBlurPixelShader",0,{name:t,shader:i}])},59094,e=>{"use strict";var r=e.i(33967);let t="passPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["passPixelShader",0,{name:t,shader:i}])},82729,e=>{"use strict";var r=e.i(33967);let t="shadowMapFragmentSoftTransparentShadow",i=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alpha) discard;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["shadowMapFragmentSoftTransparentShadow",0,{name:t,shader:i}])},16587,e=>{"use strict";var r=e.i(33967);let t="lensFlarePixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["lensFlarePixelShader",0,{name:t,shader:i}])},34140,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleDiffusePixelShader",i=`uniform float particleAlpha;varying vec2 uv;varying vec3 diffuseColor;void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;glFragColor=vec4(diffuseColor,1.0);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingParticleDiffusePixelShader",0,{name:t,shader:i}])},77989,e=>{"use strict";var r=e.i(33967);let t="oitBackBlendPixelShader",i=`var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureLoad(uBackColor,vec2i(fragmentInputs.position.xy),0);if (fragmentOutputs.color.a==0.0) {discard;}}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["oitBackBlendPixelShaderWGSL",0,{name:t,shader:i}])},89231,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererMaskerVertexShader",i="attribute vec2 uv;varying vec2 vUV;void main(void) {gl_Position=vec4(vec2(uv.x,uv.y)*2.0-1.0,0.,1.0);vUV=uv;}";r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["meshUVSpaceRendererMaskerVertexShader",0,{name:t,shader:i}])},70597,e=>{"use strict";var r=e.i(33967);let t="filterPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform mat4 kernelMatrix;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec3 baseColor=texture2D(textureSampler,vUV).rgb;vec3 updatedColor=(kernelMatrix*vec4(baseColor,1.0)).rgb;gl_FragColor=vec4(updatedColor,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["filterPixelShader",0,{name:t,shader:i}])},82180,e=>{"use strict";var r=e.i(33967);let t="glowMapMergeVertexShader",i=`attribute vec2 position;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["glowMapMergeVertexShader",0,{name:t,shader:i}])},90795,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="layerPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor.rgb=toGammaSpace(baseColor.rgb);
#elif defined(CONVERT_TO_LINEAR)
baseColor.rgb=toLinearSpace(baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["layerPixelShader",0,{name:t,shader:i}])},93198,e=>{"use strict";var r=e.i(56363),t=e.i(61724);class i extends r.FlowGraphBlock{constructor(e){super(e),this.config=e,this.executionFunction=this.registerDataInput("function",t.RichTypeAny),this.value=this.registerDataInput("value",t.RichTypeAny),this.result=this.registerDataOutput("result",t.RichTypeAny)}_updateOutputs(e){let r=this.executionFunction.getValue(e),t=this.value.getValue(e);r&&this.result.setValue(r(t,e),e)}getClassName(){return"FlowGraphCodeExecutionBlock"}}e.s(["FlowGraphCodeExecutionBlock",0,i])},55695,e=>{"use strict";var r=e.i(33967);e.i(13851),e.i(660),e.i(61404),e.i(76073);let t="hdrIrradianceFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform samplerCube inputTexture;
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfTexture;
#endif
uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=irradiance(inputTexture,direction,vFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfTexture
#endif
);gl_FragColor=vec4(color*hdrScale,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["hdrIrradianceFilteringPixelShader",0,{name:t,shader:i}])},45157,e=>{"use strict";var r=e.i(33967);let t="vrDistortionCorrectionPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 LensCenter;uniform vec2 Scale;uniform vec2 ScaleIn;uniform vec4 HmdWarpParam;vec2 HmdWarp(vec2 in01) {vec2 theta=(in01-LensCenter)*ScaleIn; 
float rSq=theta.x*theta.x+theta.y*theta.y;vec2 rvector=theta*(HmdWarpParam.x+HmdWarpParam.y*rSq+HmdWarpParam.z*rSq*rSq+HmdWarpParam.w*rSq*rSq*rSq);return LensCenter+Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 tc=HmdWarp(vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0)
gl_FragColor=vec4(0.0,0.0,0.0,0.0);else{gl_FragColor=texture2D(textureSampler,tc);}}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["vrDistortionCorrectionPixelShader",0,{name:t,shader:i}])},57279,e=>{"use strict";var r=e.i(61724),t=e.i(33316),i=e.i(99839);class a extends t.FlowGraphExecutionBlock{constructor(e){super(e),this.condition=this.registerDataInput("condition",r.RichTypeBoolean),this.onTrue=this._registerSignalOutput("onTrue"),this.onFalse=this._registerSignalOutput("onFalse")}_execute(e){this.condition.getValue(e)?this.onTrue._activateSignal(e):this.onFalse._activateSignal(e)}getClassName(){return"FlowGraphBranchBlock"}}(0,i.RegisterClass)("FlowGraphBranchBlock",a),e.s(["FlowGraphBranchBlock",0,a])},59534,e=>{"use strict";var r=e.i(33967);let t="glowBlurPostProcessPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform vec2 direction;uniform float blurWidth;float getLuminance(vec3 color)
{return dot(color,vec3(0.2126,0.7152,0.0722));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float weights[7];weights[0]=0.05;weights[1]=0.1;weights[2]=0.2;weights[3]=0.3;weights[4]=0.2;weights[5]=0.1;weights[6]=0.05;vec2 texelSize=vec2(1.0/screenSize.x,1.0/screenSize.y);vec2 texelStep=texelSize*direction*blurWidth;vec2 start=vUV-3.0*texelStep;vec4 baseColor=vec4(0.,0.,0.,0.);vec2 texelOffset=vec2(0.,0.);for (int i=0; i<7; i++)
{vec4 texel=texture2D(textureSampler,start+texelOffset);baseColor.a+=texel.a*weights[i];float luminance=getLuminance(baseColor.rgb);float luminanceTexel=getLuminance(texel.rgb);float choice=step(luminanceTexel,luminance);baseColor.rgb=choice*baseColor.rgb+(1.0-choice)*texel.rgb;texelOffset+=texelStep;}
gl_FragColor=baseColor;}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["glowBlurPostProcessPixelShader",0,{name:t,shader:i}])},11009,e=>{"use strict";var r=e.i(33967);let t="iblShadowVoxelTracingPixelShader",i=`precision highp sampler2D;precision highp sampler3D;
#define PI 3.1415927
varying vec2 vUV;
#define DISABLE_UNIFORMITY_ANALYSIS
uniform sampler2D depthSampler;uniform sampler2D worldNormalSampler;uniform sampler2D blueNoiseSampler;uniform sampler2D icdfSampler;uniform sampler3D voxelGridSampler;
#ifdef COLOR_SHADOWS
uniform samplerCube iblSampler;
#endif
uniform vec4 shadowParameters;
#define SHADOWdirs shadowParameters.x
#define SHADOWframe shadowParameters.y
#define SHADOWenvRot shadowParameters.w
uniform vec4 voxelBiasParameters;
#define highestMipLevel voxelBiasParameters.z
uniform vec4 sssParameters;
#define SSSsamples sssParameters.x
#define SSSstride sssParameters.y
#define SSSmaxDistance sssParameters.z
#define SSSthickness sssParameters.w
uniform vec4 shadowOpacity;uniform mat4 projMtx;uniform mat4 viewMtx;uniform mat4 invProjMtx;uniform mat4 invViewMtx;uniform mat4 wsNormalizationMtx;uniform mat4 invVPMtx;
#define PI 3.1415927
#define GOLD 0.618034
struct AABB3f {vec3 m_min;vec3 m_max;};struct Ray {vec3 orig;vec3 dir;vec3 dir_rcp;float t_min;float t_max;};Ray make_ray(const vec3 origin,const vec3 direction,const float tmin,
const float tmax) {Ray ray;ray.orig=origin;ray.dir=direction;ray.dir_rcp=1.0f/direction;ray.t_min=tmin;ray.t_max=tmax;return ray;}
bool ray_box_intersection(const in AABB3f aabb,const in Ray ray,
out float distance_near,out float distance_far) {vec3 tbot=ray.dir_rcp*(aabb.m_min-ray.orig);vec3 ttop=ray.dir_rcp*(aabb.m_max-ray.orig);vec3 tmin=min(ttop,tbot);vec3 tmax=max(ttop,tbot);distance_near=max(ray.t_min,max(tmin.x,max(tmin.y,tmin.z)));distance_far=min(ray.t_max,min(tmax.x,min(tmax.y,tmax.z)));return distance_near<=distance_far;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
struct VoxelMarchDiagnosticInfo {float heat;ivec3 voxel_intersect_coords;};
#endif
uint hash(uint i) {i ^= i>>16u;i*=0x7FEB352Du;i ^= i>>15u;i*=0x846CA68Bu;i ^= i>>16u;return i;}
float uint2float(uint i) {return uintBitsToFloat(0x3F800000u | (i>>9u))-1.0;}
vec3 uv_to_normal(vec2 uv) {vec3 N;vec2 uvRange=uv;float theta=uvRange.x*2.0*PI;float phi=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
vec2 plasticSequence(const uint rstate) {return vec2(uint2float(rstate*3242174889u),
uint2float(rstate*2447445414u));}
float goldenSequence(const uint rstate) {return uint2float(rstate*2654435769u);}
float distanceSquared(vec2 a,vec2 b) {vec2 diff=a-b;return dot(diff,diff);}
void genTB(const vec3 N,out vec3 T,out vec3 B) {float s=N.z<0.0 ? -1.0 : 1.0;float a=-1.0/(s+N.z);float b=N.x*N.y*a;T=vec3(1.0+s*N.x*N.x*a,s*b,-s*N.x);B=vec3(b,s+N.y*N.y*a,-N.y);}
int stack[24]; 
#define PUSH(i) stack[stackLevel++]=i; 
#define POP() stack[--stackLevel] 
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
bool anyHitVoxels(const Ray ray_vs,
out VoxelMarchDiagnosticInfo voxel_march_diagnostic_info) {
#else
bool anyHitVoxels(const Ray ray_vs) {
#endif
vec3 invD=ray_vs.dir_rcp;vec3 D=ray_vs.dir;vec3 O=ray_vs.orig;ivec3 negD=ivec3(lessThan(D,vec3(0,0,0)));int voxel0=negD.x | negD.y<<1 | negD.z<<2;vec3 t0=-O*invD,t1=(vec3(1.0)-O)*invD;int maxLod=int(highestMipLevel);int stackLevel=0;
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
uint steps=0u;
#endif
PUSH(maxLod<<24);while (stackLevel>0) {int elem=POP();ivec4 Coords =
ivec4(elem & 0xFF,elem>>8 & 0xFF,elem>>16 & 0xFF,elem>>24);if (Coords.w==0) {
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
voxel_march_diagnostic_info.heat=float(steps)/24.0;
#endif
return true;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
++steps;
#endif
float invRes=exp2(float(Coords.w-maxLod));vec3 bbmin=invRes*vec3(Coords.xyz+negD);vec3 bbmax=invRes*vec3(Coords.xyz-negD+ivec3(1));vec3 mint=mix(t0,t1,bbmin);vec3 maxt=mix(t0,t1,bbmax);vec3 midt=0.5*(mint+maxt);mint.x=max(0.0,mint.x);midt.x=max(0.0,midt.x);int nodeMask=int(
round(texelFetch(voxelGridSampler,Coords.xyz,Coords.w).x*255.0));Coords.w--;int voxelBit=voxel0;Coords.xyz=(Coords.xyz<<1)+negD;int packedCoords =
Coords.x | Coords.y<<8 | Coords.z<<16 | Coords.w<<24;if (max(mint.x,max(mint.y,mint.z))<min(midt.x,min(midt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(mint.y,mint.z))<min(maxt.x,min(midt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(midt.y,mint.z))<min(maxt.x,min(maxt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(midt.y,mint.z))<min(midt.x,min(maxt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x4;packedCoords ^= 0x10000;if (max(mint.x,max(midt.y,midt.z))<min(midt.x,min(maxt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(midt.y,midt.z))<min(maxt.x,min(maxt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(mint.y,midt.z))<min(maxt.x,min(midt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(mint.y,midt.z))<min(midt.x,min(midt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
voxel_march_diagnostic_info.heat=float(steps)/24.0;
#endif
return false;}
float linearizeDepth(float depth,float near,float far) {return (near*far)/(far-depth*(far-near));}
float screenSpaceShadow(vec3 csOrigin,vec3 csDirection,vec2 csZBufferSize,
float nearPlaneZ,float farPlaneZ,float noise) {
#ifdef RIGHT_HANDED
float csZDir=-1.0;
#else 
float csZDir=1.0;
#endif
float ssSamples=SSSsamples;float ssMaxDist=SSSmaxDistance;float ssStride=SSSstride;float ssThickness=SSSthickness;float rayLength =
csZDir*(csOrigin.z+ssMaxDist*csDirection.z)<csZDir*nearPlaneZ
? 
(nearPlaneZ-csOrigin.z)/csDirection.z
: ssMaxDist;vec3 csEndPoint=csOrigin+rayLength*csDirection;vec4 H0=projMtx*vec4(csOrigin,1.0);vec4 H1=projMtx*vec4(csEndPoint,1.0);vec2 Z0=vec2(csOrigin.z ,1.0)/H0.w;vec2 Z1=vec2(csEndPoint.z,1.0)/H1.w;vec2 P0=csZBufferSize*(0.5*H0.xy*Z0.y+0.5);vec2 P1=csZBufferSize*(0.5*H1.xy*Z1.y+0.5);P1+=vec2(distanceSquared(P0,P1)<0.0001 ? 0.01 : 0.0);vec2 delta=P1-P0;bool permute=false;if (abs(delta.x)<abs(delta.y)) {permute=true;P0=P0.yx;P1=P1.yx;delta=delta.yx;}
float stepDirection=sign(delta.x);float invdx=stepDirection/delta.x;vec2 dP=ssStride*vec2(stepDirection,invdx*delta.y);vec2 dZ=ssStride*invdx*(Z1-Z0);float opacity=0.0;vec2 P=P0+noise*dP;vec2 Z=Z0+noise*dZ;float end=P1.x*stepDirection;float rayZMax=csZDir*Z.x/Z.y;float sceneDepth=rayZMax;Z+=dZ;for (float stepCount=0.0;opacity<1.0 && P.x*stepDirection<end && sceneDepth>0.0 && stepCount<ssSamples;stepCount++,P+=dP,
Z+=dZ) { 
ivec2 coords=ivec2(permute ? P.yx : P);sceneDepth=texelFetch(depthSampler,coords,0).x;sceneDepth=linearizeDepth(sceneDepth,nearPlaneZ,farPlaneZ);sceneDepth=csZDir*sceneDepth;if (sceneDepth<=0.0) {break;}
float rayZMin=rayZMax;rayZMax=csZDir*Z.x/Z.y;opacity+=max(opacity,step(rayZMax,sceneDepth+ssThickness)*step(sceneDepth,rayZMin));}
return opacity;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
float voxelShadow(vec3 wsOrigin,vec3 wsDirection,vec3 wsNormal,
vec2 DitherNoise,
out VoxelMarchDiagnosticInfo voxel_march_diagnostic_info) {
#else
float voxelShadow(vec3 wsOrigin,vec3 wsDirection,vec3 wsNormal,
vec2 DitherNoise) {
#endif
float vxResolution=float(textureSize(voxelGridSampler,0).x);vec3 T,B;genTB(wsDirection,T,B);vec2 DitherXY=sqrt(DitherNoise.x)*vec2(cos(2.0*PI*DitherNoise.y),
sin(2.0*PI*DitherNoise.y));float sceneScale=wsNormalizationMtx[0][0];vec3 Dithering =
(voxelBiasParameters.x*wsNormal+voxelBiasParameters.y*wsDirection +
DitherXY.x*T+DitherXY.y*B) /
vxResolution;vec3 O=0.5*wsOrigin+0.5+Dithering;Ray ray_vs=make_ray(O,wsDirection,0.0,10.0);AABB3f voxel_aabb;voxel_aabb.m_min=vec3(0);voxel_aabb.m_max=vec3(1);float near,far;if (!ray_box_intersection(voxel_aabb,ray_vs,near,far))
return 0.0;ray_vs.t_min=max(ray_vs.t_min,near);ray_vs.t_max=min(ray_vs.t_max,far);
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
return anyHitVoxels(ray_vs,voxel_march_diagnostic_info) ? 1.0f : 0.0f;
#else
return anyHitVoxels(ray_vs) ? 1.0f : 0.0f;
#endif
}
void main(void) {uint nbDirs=uint(SHADOWdirs);uint frameId=uint(SHADOWframe);float envRot=SHADOWenvRot;vec2 Resolution=vec2(textureSize(depthSampler,0));ivec2 currentPixel=ivec2(vUV*Resolution);uint GlobalIndex=(frameId*uint(Resolution.y)+uint(currentPixel.y)) *
uint(Resolution.x) +
uint(currentPixel.x);vec3 N=texelFetch(worldNormalSampler,currentPixel,0).xyz;if (length(N)<0.01) {glFragColor=vec4(1.0,1.0,0.0,1.0);return;}
float normalizedRotation=envRot/(2.0*PI);float depth=texelFetch(depthSampler,currentPixel,0).x;
#ifndef IS_NDC_HALF_ZRANGE
depth=depth*2.0-1.0;
#endif
vec2 temp=(vec2(currentPixel)+vec2(0.5))*2.0/Resolution-vec2(1.0);vec4 VP=invProjMtx*vec4(temp.x,-temp.y,depth,1.0);VP/=VP.w;N=normalize(N);vec3 noise=texelFetch(blueNoiseSampler,currentPixel & 0xFF,0).xyz;noise.z=fract(noise.z+goldenSequence(frameId*nbDirs));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
float heat=0.0f;
#endif
float shadowAccum=0.001;float specShadowAccum=0.001;float sampleWeight=0.001;
#ifdef COLOR_SHADOWS
vec3 totalLight=vec3(0.001);vec3 shadowedLight=vec3(0.0);
#endif
for (uint i=0u; i<nbDirs; i++) {uint dirId=nbDirs*GlobalIndex+i;vec4 L;vec2 T;{vec2 r=plasticSequence(frameId*nbDirs+i);r=fract(r+vec2(2.0)*abs(noise.xy-vec2(0.5)));T.x=textureLod(icdfSampler,vec2(r.x,0.0),0.0).x;T.y=textureLod(icdfSampler,vec2(T.x,r.y),0.0).y;L=vec4(uv_to_normal(vec2(T.x-normalizedRotation,T.y)),0);
#ifndef RIGHT_HANDED
L.z*=-1.0;
#endif
}
#ifdef COLOR_SHADOWS
vec3 lightDir=uv_to_normal(vec2(1.0-fract(T.x+0.25),T.y));vec3 ibl=textureLod(iblSampler,lightDir,0.0).xyz;float pdf=textureLod(icdfSampler,T,0.0).z;
#endif
float cosNL=dot(N,L.xyz);float opacity=0.0;if (cosNL>0.0) {vec4 VP2=VP;VP2.y*=-1.0;vec4 unormWP=invViewMtx*VP2;vec3 WP=(wsNormalizationMtx*unormWP).xyz;vec2 vxNoise=vec2(uint2float(hash(dirId*2u)),uint2float(hash(dirId*2u+1u)));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
VoxelMarchDiagnosticInfo voxel_march_diagnostic_info;opacity=max(opacity,shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise,voxel_march_diagnostic_info));heat+=voxel_march_diagnostic_info.heat;
#else
opacity =
max(opacity,shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise));
#endif
vec3 VL=(viewMtx*L).xyz;
#ifdef RIGHT_HANDED
float nearPlaneZ=-projMtx[3][2]/(projMtx[2][2]-1.0); 
float farPlaneZ=-projMtx[3][2]/(projMtx[2][2]+1.0);
#else
float nearPlaneZ=-projMtx[3][2]/(projMtx[2][2]+1.0); 
float farPlaneZ=-projMtx[3][2]/(projMtx[2][2]-1.0);
#endif
float ssShadow=shadowOpacity.y *
screenSpaceShadow(VP2.xyz,VL,Resolution,nearPlaneZ,farPlaneZ,
abs(2.0*noise.z-1.0));opacity=max(opacity,ssShadow);
#ifdef COLOR_SHADOWS
vec3 light=pdf<1e-6 ? vec3(0.0) : vec3(cosNL)/vec3(pdf)*ibl;shadowedLight+=light*opacity;totalLight+=light;
#else
float rcos=(1.0-cosNL);shadowAccum+=(1.0-opacity*(1.0-pow(rcos,8.0)));sampleWeight+=1.0;vec3 VR=-(viewMtx*vec4(reflect(-L.xyz,N),0.0)).xyz;specShadowAccum+=max(1.0-(opacity*pow(VR.z,8.0)),0.0);
#endif
}
noise.z=fract(noise.z+GOLD);}
#ifdef COLOR_SHADOWS
vec3 shadow=(totalLight-shadowedLight)/totalLight;float maxShadow=max(max(shadow.x,max(shadow.y,shadow.z)),1.0);glFragColor=vec4(shadow/maxShadow,1.0);
#else
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
gl_FragColor=vec4(shadowAccum/float(sampleWeight),
specShadowAccum/float(sampleWeight),heat/float(sampleWeight),1.0);
#else
gl_FragColor=vec4(shadowAccum/float(sampleWeight),specShadowAccum/float(sampleWeight),0.0,1.0);
#endif
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblShadowVoxelTracingPixelShader",0,{name:t,shader:i}])},52096,53276,e=>{"use strict";var r=e.i(33967);let t="gaussianSplattingVertexDeclaration";r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]="attribute vec2 position;uniform mat4 view;uniform mat4 projection;uniform mat4 world;uniform vec4 vEyePosition;"),e.s([],53276),e.i(84400),e.i(17463);let i="gaussianSplattingUboDeclaration",a=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute vec2 position;`;r.ShaderStore.IncludesShadersStore[i]||(r.ShaderStore.IncludesShadersStore[i]=a),e.i(26230),e.i(44371),e.i(24137),e.i(13851);let o="gaussianSplatting",n=`#if !defined(WEBGL2) && !defined(WEBGPU) && !defined(NATIVE)
mat3 transpose(mat3 matrix) {return mat3(matrix[0][0],matrix[1][0],matrix[2][0],
matrix[0][1],matrix[1][1],matrix[2][1],
matrix[0][2],matrix[1][2],matrix[2][2]);}
#endif
vec2 getDataUV(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return vec2((x+0.5)/textureSize.x,(y+0.5)/textureSize.y);}
#if SH_DEGREE>0
ivec2 getDataUVint(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return ivec2(uint(x+0.5),uint(y+0.5));}
#endif
struct Splat {vec4 center;vec4 color;vec4 covA;vec4 covB;
#if SH_DEGREE>0
uvec4 sh0; 
#endif
#if SH_DEGREE>1
uvec4 sh1;
#endif
#if SH_DEGREE>2
uvec4 sh2;
#endif
};Splat readSplat(float splatIndex)
{Splat splat;vec2 splatUV=getDataUV(splatIndex,dataTextureSize);splat.center=texture2D(centersTexture,splatUV);splat.color=texture2D(colorsTexture,splatUV);splat.covA=texture2D(covariancesATexture,splatUV)*splat.center.w;splat.covB=texture2D(covariancesBTexture,splatUV)*splat.center.w;
#if SH_DEGREE>0
ivec2 splatUVint=getDataUVint(splatIndex,dataTextureSize);splat.sh0=texelFetch(shTexture0,splatUVint,0);
#endif
#if SH_DEGREE>1
splat.sh1=texelFetch(shTexture1,splatUVint,0);
#endif
#if SH_DEGREE>2
splat.sh2=texelFetch(shTexture2,splatUVint,0);
#endif
return splat;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
vec3 computeColorFromSHDegree(vec3 dir,const vec3 sh[16])
{const float SH_C0=0.28209479;const float SH_C1=0.48860251;float SH_C2[5];SH_C2[0]=1.092548430;SH_C2[1]=-1.09254843;SH_C2[2]=0.315391565;SH_C2[3]=-1.09254843;SH_C2[4]=0.546274215;float SH_C3[7];SH_C3[0]=-0.59004358;SH_C3[1]=2.890611442;SH_C3[2]=-0.45704579;SH_C3[3]=0.373176332;SH_C3[4]=-0.45704579;SH_C3[5]=1.445305721;SH_C3[6]=-0.59004358;vec3 result=/*SH_C0**/sh[0];
#if SH_DEGREE>0
float x=dir.x;float y=dir.y;float z=dir.z;result+=- SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
float xx=x*x,yy=y*y,zz=z*z;float xy=x*y,yz=y*z,xz=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0*zz-3.0*xx-3.0*yy)*sh[12] +
SH_C3[4]*x*(4.0*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0*yy)*sh[15];
#endif
#endif
#endif
return result;}
vec4 decompose(uint value)
{vec4 components=vec4(
float((value ) & 255u),
float((value>>uint( 8)) & 255u),
float((value>>uint(16)) & 255u),
float((value>>uint(24)) & 255u));return components*vec4(2./255.)-vec4(1.);}
vec3 computeSH(Splat splat,vec3 color,vec3 dir)
{vec3 sh[16];sh[0]=color;
#if SH_DEGREE>0
vec4 sh00=decompose(splat.sh0.x);vec4 sh01=decompose(splat.sh0.y);vec4 sh02=decompose(splat.sh0.z);sh[1]=vec3(sh00.x,sh00.y,sh00.z);sh[2]=vec3(sh00.w,sh01.x,sh01.y);sh[3]=vec3(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
vec4 sh03=decompose(splat.sh0.w);vec4 sh04=decompose(splat.sh1.x);vec4 sh05=decompose(splat.sh1.y);sh[4]=vec3(sh02.y,sh02.z,sh02.w);sh[5]=vec3(sh03.x,sh03.y,sh03.z);sh[6]=vec3(sh03.w,sh04.x,sh04.y);sh[7]=vec3(sh04.z,sh04.w,sh05.x);sh[8]=vec3(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
vec4 sh06=decompose(splat.sh1.z);vec4 sh07=decompose(splat.sh1.w);vec4 sh08=decompose(splat.sh2.x);vec4 sh09=decompose(splat.sh2.y);vec4 sh10=decompose(splat.sh2.z);vec4 sh11=decompose(splat.sh2.w);sh[9]=vec3(sh06.x,sh06.y,sh06.z);sh[10]=vec3(sh06.w,sh07.x,sh07.y);sh[11]=vec3(sh07.z,sh07.w,sh08.x);sh[12]=vec3(sh08.y,sh08.z,sh08.w);sh[13]=vec3(sh09.x,sh09.y,sh09.z);sh[14]=vec3(sh09.w,sh10.x,sh10.y);sh[15]=vec3(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
#else
vec3 computeSH(Splat splat,vec3 color,vec3 dir)
{return color;}
#endif
vec4 gaussianSplatting(vec2 meshPos,vec3 worldPos,vec2 scale,vec3 covA,vec3 covB,mat4 worldMatrix,mat4 viewMatrix,mat4 projectionMatrix)
{mat4 modelView=viewMatrix*worldMatrix;vec4 camspace=viewMatrix*vec4(worldPos,1.);vec4 pos2d=projectionMatrix*camspace;float bounds=1.2*pos2d.w;if (pos2d.z<-pos2d.w || pos2d.x<-bounds || pos2d.x>bounds
|| pos2d.y<-bounds || pos2d.y>bounds) {return vec4(0.0,0.0,2.0,1.0);}
mat3 Vrk=mat3(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);mat3 J=mat3(
focal.x/camspace.z,0.,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.,0.,0.
);mat3 invy=mat3(1,0,0,0,-1,0,0,0,1);mat3 T=invy*transpose(mat3(modelView))*J;mat3 cov2d=transpose(T)*Vrk*T;float mid=(cov2d[0][0]+cov2d[1][1])/2.0;float radius=length(vec2((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));float epsilon=0.0001;float lambda1=mid+radius+epsilon,lambda2=mid-radius+epsilon;if (lambda2<0.0)
{return vec4(0.0,0.0,2.0,1.0);}
vec2 diagonalVector=normalize(vec2(cov2d[0][1],lambda1-cov2d[0][0]));vec2 majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;vec2 minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2(diagonalVector.y,-diagonalVector.x);vec2 vCenter=vec2(pos2d);return vec4(
vCenter 
+ ((meshPos.x*majorAxis
+ meshPos.y*minorAxis)*invViewport*pos2d.w)*scale,pos2d.zw);}`;r.ShaderStore.IncludesShadersStore[o]||(r.ShaderStore.IncludesShadersStore[o]=n),e.i(7025),e.i(1141),e.i(3449);let l="gaussianSplattingVertexShader",s=`#include<__decl__gaussianSplattingVertex>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
attribute float splatIndex;uniform vec2 invViewport;uniform vec2 dataTextureSize;uniform vec2 focal;uniform sampler2D covariancesATexture;uniform sampler2D covariancesBTexture;uniform sampler2D centersTexture;uniform sampler2D colorsTexture;
#if SH_DEGREE>0
uniform highp usampler2D shTexture0;
#endif
#if SH_DEGREE>1
uniform highp usampler2D shTexture1;
#endif
#if SH_DEGREE>2
uniform highp usampler2D shTexture2;
#endif
varying vec4 vColor;varying vec2 vPosition;
#include<gaussianSplatting>
void main () {Splat splat=readSplat(splatIndex);vec3 covA=splat.covA.xyz;vec3 covB=vec3(splat.covA.w,splat.covB.xy);vec4 worldPos=world*vec4(splat.center.xyz,1.0);vColor=splat.color;vPosition=position;
#if SH_DEGREE>0
mat3 worldRot=mat3(world);mat3 normWorldRot=inverseMat3(worldRot);vec3 dir=normalize(normWorldRot*(worldPos.xyz-vEyePosition.xyz));dir.y*=-1.; 
vColor.xyz=computeSH(splat,splat.color.xyz,dir);
#endif
gl_Position=gaussianSplatting(position,worldPos.xyz,vec2(1.,1.),covA,covB,world,view,projection);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}
`;r.ShaderStore.ShadersStore[l]||(r.ShaderStore.ShadersStore[l]=s),e.s(["gaussianSplattingVertexShader",0,{name:l,shader:s}],52096)},51338,e=>{"use strict";var r=e.i(33967);let t="backgroundVertexDeclaration",i=`uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform float shadowLevel;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(78141),e.i(13851),e.i(43434),e.i(10283),e.i(18178),e.i(26230),e.i(44371),e.i(75248),e.i(62741),e.i(24137),e.i(22752),e.i(70017),e.i(44754),e.i(7025),e.i(1141),e.i(34479),e.i(3449);let a="backgroundVertexShader",o=`precision highp float;
#include<__decl__backgroundVertex>
#include<helperFunctions>
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vec2 vDiffuseUV;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*finalWorld*vec4(position,1.0);} else {gl_Position=viewProjectionR*finalWorld*vec4(position,1.0);}
#else
gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#endif
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(position,0.0)));
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
mat3 screenToWorld=inverseMat3(mat3(finalWorld*viewProjection));vec3 segment=mix(vDirectionW,screenToWorld*vec3(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vDirectionW=normalize(segment);} else {vDirectionW=normalize(vDirectionW+(vDirectionW-segment));}
#endif
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uv;
#endif
#ifdef MAINUV2
vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vColor=colorUpdated;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["backgroundVertexShader",0,{name:a,shader:o}],51338)},29030,e=>{"use strict";var r=e.i(61724),t=e.i(99839),i=e.i(52898),a=e.i(32170);class o extends a.FlowGraphAsyncExecutionBlock{constructor(e){super(e),this.animationGroup=this.registerDataInput("animationGroup",r.RichTypeAny),this.stopAtFrame=this.registerDataInput("stopAtFrame",r.RichTypeNumber,-1)}_preparePendingTasks(e){let r=this.animationGroup.getValue(e),t=this.stopAtFrame.getValue(e)??-1,i=e._getGlobalContextVariable("pendingStopAnimations",[]);i.push({uniqueId:r.uniqueId,stopAtFrame:t}),e._setGlobalContextVariable("pendingStopAnimations",i)}_cancelPendingTasks(e){let r=this.animationGroup.getValue(e),t=e._getGlobalContextVariable("pendingStopAnimations",[]);for(let i=0;i<t.length;i++)if(t[i].uniqueId===r.uniqueId){t.splice(i,1),e._setGlobalContextVariable("pendingStopAnimations",t);break}}_execute(e){let r=this.animationGroup.getValue(e),t=this.stopAtFrame.getValue(e)??-1;return r?isNaN(t)?this._reportError(e,"Invalid stop time."):void(t>0?this._startPendingTasks(e):this._stopAnimation(r,e),this.out._activateSignal(e)):(i.Logger.Warn("No animation group provided to stop."),this._reportError(e,"No animation group provided to stop."))}_executeOnTick(e){let r=this.animationGroup.getValue(e),t=e._getGlobalContextVariable("pendingStopAnimations",[]);for(let i=0;i<t.length;i++)if(t[i].uniqueId===r.uniqueId&&r.getCurrentFrame()>=t[i].stopAtFrame){this._stopAnimation(r,e),t.splice(i,1),e._setGlobalContextVariable("pendingStopAnimations",t),this.done._activateSignal(e),e._removePendingBlock(this);break}}getClassName(){return"FlowGraphStopAnimationBlock"}_stopAnimation(e,r){let t=r._getGlobalContextVariable("currentlyRunningAnimationGroups",[]),i=t.indexOf(e.uniqueId);-1!==i&&(e.stop(),t.splice(i,1),r._setGlobalContextVariable("currentlyRunningAnimationGroups",t))}}(0,t.RegisterClass)("FlowGraphStopAnimationBlock",o),e.s(["FlowGraphStopAnimationBlock",0,o])},88662,e=>{"use strict";var r=e.i(33967);let t="convolutionPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform float kernel[9];
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 onePixel=vec2(1.0,1.0)/screenSize;vec4 colorSum =
texture2D(textureSampler,vUV+onePixel*vec2(-1,-1))*kernel[0] +
texture2D(textureSampler,vUV+onePixel*vec2(0,-1))*kernel[1] +
texture2D(textureSampler,vUV+onePixel*vec2(1,-1))*kernel[2] +
texture2D(textureSampler,vUV+onePixel*vec2(-1,0))*kernel[3] +
texture2D(textureSampler,vUV+onePixel*vec2(0,0))*kernel[4] +
texture2D(textureSampler,vUV+onePixel*vec2(1,0))*kernel[5] +
texture2D(textureSampler,vUV+onePixel*vec2(-1,1))*kernel[6] +
texture2D(textureSampler,vUV+onePixel*vec2(0,1))*kernel[7] +
texture2D(textureSampler,vUV+onePixel*vec2(1,1))*kernel[8];float kernelWeight =
kernel[0] +
kernel[1] +
kernel[2] +
kernel[3] +
kernel[4] +
kernel[5] +
kernel[6] +
kernel[7] +
kernel[8];if (kernelWeight<=0.0) {kernelWeight=1.0;}
gl_FragColor=vec4((colorSum/kernelWeight).rgb,1);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["convolutionPixelShader",0,{name:t,shader:i}])},90553,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleDepthPixelShader",i=`uniform mat4 projection;varying vec2 uv;varying vec3 viewPos;varying float sphereRadius;
#ifdef FLUIDRENDERING_VELOCITY
varying float velocityNorm;
#endif
void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;normal.z=sqrt(1.0-r2);
#ifndef FLUIDRENDERING_RHS
normal.z=-normal.z;
#endif
vec4 realViewPos=vec4(viewPos+normal*sphereRadius,1.0);vec4 clipSpacePos=projection*realViewPos;
#ifdef WEBGPU
gl_FragDepth=clipSpacePos.z/clipSpacePos.w;
#else
gl_FragDepth=(clipSpacePos.z/clipSpacePos.w)*0.5+0.5;
#endif
#ifdef FLUIDRENDERING_RHS
realViewPos.z=-realViewPos.z;
#endif
#ifdef FLUIDRENDERING_VELOCITY
glFragColor=vec4(realViewPos.z,velocityNorm,0.,1.);
#else
glFragColor=vec4(realViewPos.z,0.,0.,1.);
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingParticleDepthPixelShader",0,{name:t,shader:i}])},33736,e=>{"use strict";var r=e.i(33967);let t="glowMapMergePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef EMISSIVE
var textureSampler2Sampler: sampler;var textureSampler2: texture_2d<f32>;
#endif
uniform offset: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef EMISSIVE
baseColor+=textureSample(textureSampler2,textureSampler2Sampler,input.vUV);baseColor*=uniforms.offset;
#else
baseColor=vec4f(baseColor.rgb,abs(uniforms.offset-baseColor.a));
#ifdef STROKE
var alpha: f32=smoothstep(.0,.1,baseColor.a);baseColor=vec4f(baseColor.rgb*alpha,alpha);
#endif
#endif
#if LDR
baseColor=clamp(baseColor,vec4f(0.),vec4f(1.0));
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["glowMapMergePixelShaderWGSL",0,{name:t,shader:i}])},5473,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="copyTextureToTexturePixelShader",i=`uniform conversion: f32;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef DEPTH_TEXTURE
fragmentOutputs.fragDepth=color.r;
#else
if (uniforms.conversion==1.) {color=toLinearSpaceVec4(color);} else if (uniforms.conversion==2.) {color=toGammaSpace(color);}
fragmentOutputs.color=color;
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["copyTextureToTexturePixelShaderWGSL",0,{name:t,shader:i}])},95356,e=>{"use strict";var r=e.i(33967);let t="passCubePixelShader",i=`varying vec2 vUV;uniform samplerCube textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001));
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["passCubePixelShader",0,{name:t,shader:i}])},52749,e=>{"use strict";var r=e.i(33967);e.i(28248),e.i(24137),e.i(11364),e.i(93563);let t="outlinePixelShader",i=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform vec4 color;
#ifdef ALPHATEST
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#include<logDepthFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["outlinePixelShader",0,{name:t,shader:i}])},43185,e=>{"use strict";var r=e.i(33967);let t="iblCombineVoxelGridsPixelShader",i=`varying vUV: vec2f;var voxelXaxisSamplerSampler: sampler;var voxelXaxisSampler: texture_3d<f32>;var voxelYaxisSamplerSampler: sampler;var voxelYaxisSampler: texture_3d<f32>;var voxelZaxisSamplerSampler: sampler;var voxelZaxisSampler: texture_3d<f32>;uniform layer: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coordZ: vec3f= vec3f(fragmentInputs.vUV.x,fragmentInputs.vUV.y,uniforms.layer);var voxelZ: f32=textureSample(voxelZaxisSampler,voxelZaxisSamplerSampler,coordZ).r;var coordX: vec3f= vec3f(1.0-uniforms.layer,fragmentInputs.vUV.y,fragmentInputs.vUV.x);var voxelX: f32=textureSample(voxelXaxisSampler,voxelXaxisSamplerSampler,coordX).r;var coordY: vec3f= vec3f(uniforms.layer,fragmentInputs.vUV.x,fragmentInputs.vUV.y);var voxelY: f32=textureSample(voxelYaxisSampler,voxelYaxisSamplerSampler,coordY).r;var voxel=select(0.0,1.0,(voxelX>0.0 || voxelY>0.0 || voxelZ>0.0));fragmentOutputs.color= vec4f( vec3f(voxel),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblCombineVoxelGridsPixelShaderWGSL",0,{name:t,shader:i}])},52400,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingStandardBlurPixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var s: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.);if (s.r==0.) {fragmentOutputs.color=vec4f(0.,0.,0.,1.);return fragmentOutputs;}
var sigma: f32=f32(uniforms.filterSize)/3.0;var twoSigma2: f32=2.0*sigma*sigma;var sum: vec4f=vec4f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {var coords: vec2f=vec2f(f32(x));var sampl: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.);var w: f32=exp(-coords.x*coords.x/twoSigma2);sum+=sampl*w;wsum+=w;}
sum/=wsum;fragmentOutputs.color=vec4f(sum.rgb,1.);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingStandardBlurPixelShaderWGSL",0,{name:t,shader:i}])},93716,e=>{"use strict";var r=e.i(33967);let t="boundingBoxRendererPixelShader",i=`uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["boundingBoxRendererPixelShaderWGSL",0,{name:t,shader:i}])},46630,e=>{"use strict";var r=e.i(33967);let t="passPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["passPixelShaderWGSL",0,{name:t,shader:i}])},32428,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererMaskerPixelShader",i=`varying vec2 vUV;void main(void) {gl_FragColor=vec4(1.0,1.0,1.0,1.0);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["meshUVSpaceRendererMaskerPixelShader",0,{name:t,shader:i}])},48523,e=>{"use strict";var r=e.i(33967);let t="proceduralVertexShader",i=`attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["proceduralVertexShader",0,{name:t,shader:i}])},32211,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleDepthVertexShader",i=`attribute vec3 position;attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 size;varying vec2 uv;varying vec3 viewPos;varying float sphereRadius;
#ifdef FLUIDRENDERING_VELOCITY
attribute vec3 velocity;varying float velocityNorm;
#endif
void main(void) {vec3 cornerPos;cornerPos.xy=vec2(offset.x-0.5,offset.y-0.5)*size;cornerPos.z=0.0;viewPos=(view*vec4(position,1.0)).xyz;gl_Position=projection*vec4(viewPos+cornerPos,1.0);uv=offset;sphereRadius=size.x/2.0;
#ifdef FLUIDRENDERING_VELOCITY
velocityNorm=length(velocity);
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingParticleDepthVertexShader",0,{name:t,shader:i}])},91251,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleDepthVertexShader",i=`attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;varying viewPos: vec3f;varying sphereRadius: f32;
#ifdef FLUIDRENDERING_VELOCITY
attribute velocity: vec3f;varying velocityNorm: f32;
#endif
@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);vertexOutputs.viewPos=(uniforms.view*vec4f(input.position,1.0)).xyz;vertexOutputs.position=uniforms.projection*vec4f(vertexOutputs.viewPos+cornerPos,1.0);vertexOutputs.uv=input.offset;vertexOutputs.sphereRadius=uniforms.size.x/2.0;
#ifdef FLUIDRENDERING_VELOCITY
vertexOutputs.velocityNorm=length(velocity);
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingParticleDepthVertexShaderWGSL",0,{name:t,shader:i}])},81647,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGrid3dDebugPixelShader",i=`varying vUV: vec2f;var voxelTextureSampler: sampler;var voxelTexture: texture_3d<f32>;var voxelSlabTextureSampler: sampler;var voxelSlabTexture: texture_2d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform sizeParams: vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
uniform mipNumber: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+input.vUV.x)*widthScale,(offsetY+input.vUV.y)*heightScale);var background: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var voxelSlab: vec4f=textureSample(voxelSlabTexture,voxelSlabTextureSampler,input.vUV);var size: vec3u=textureDimensions(voxelTexture, i32(uniforms.mipNumber));var dimension: f32=ceil(sqrt( f32(size.z)));var samplePos: vec2f=fract(uv.xy* vec2f(dimension));var sampleIndex: u32= u32(floor(uv.x* f32(dimension)) +
floor(uv.y* f32(dimension))*dimension);var mip_separator: f32=0.0;if (samplePos.x<0.01 || samplePos.y<0.01) {mip_separator=1.0;}
var outBounds: bool=select(false,true,sampleIndex>size.z-1);sampleIndex=clamp(sampleIndex,0,size.z-1);var samplePosInt: vec2i= vec2i(samplePos.xy* vec2f(size.xy));var voxel: vec3f=textureLoad(voxelTexture,
vec3i(i32(samplePosInt.x),i32(samplePosInt.y),i32(sampleIndex)),
i32(uniforms.mipNumber)).rgb;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=background;} else {if (outBounds) {voxel= vec3f(0.15,0.0,0.0);} else {if (voxel.r>0.001) {voxel.g=1.0;}
voxel.r+=mip_separator;}
fragmentOutputs.color=vec4f(mix(background.rgb,voxelSlab.rgb,voxelSlab.a)+voxel,1.0);}}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblVoxelGrid3dDebugPixelShaderWGSL",0,{name:t,shader:i}])},45849,e=>{"use strict";var r=e.i(33967);let t="motionBlurPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform float motionStrength;uniform float motionScale;uniform vec2 screenSize;
#ifdef OBJECT_BASED
uniform sampler2D velocitySampler;
#else
uniform sampler2D depthSampler;uniform mat4 inverseViewProjection;uniform mat4 prevViewProjection;uniform mat4 projection;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
vec2 texelSize=1.0/screenSize;vec4 velocityColor=texture2D(velocitySampler,vUV);velocityColor.rg=velocityColor.rg*2.0-vec2(1.0);vec2 signs=sign(velocityColor.rg);vec2 velocity=pow(abs(velocityColor.rg),vec2(3.0))*signs*velocityColor.a;velocity*=motionScale*motionStrength;float speed=length(velocity/texelSize);int samplesCount=int(clamp(speed,1.0,SAMPLES));velocity=normalize(velocity)*texelSize;float hlim=float(-samplesCount)*0.5+0.5;vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(SAMPLES); ++i)
{if (i>=samplesCount)
break;vec2 offset=vUV+velocity*(hlim+float(i));
#if defined(WEBGPU)
result+=texture2DLodEXT(textureSampler,offset,0.0);
#else
result+=texture2D(textureSampler,offset);
#endif
}
gl_FragColor=result/float(samplesCount);gl_FragColor.a=1.0;
#else
vec2 texelSize=1.0/screenSize;float depth=texture2D(depthSampler,vUV).r;depth=projection[2].z+projection[3].z/depth; 
vec4 cpos=vec4(vUV*2.0-1.0,depth,1.0);cpos=inverseViewProjection*cpos;cpos/=cpos.w;vec4 ppos=prevViewProjection*cpos;ppos/=ppos.w;ppos.xy=ppos.xy*0.5+0.5;vec2 velocity=(ppos.xy-vUV)*motionScale*motionStrength;float speed=length(velocity/texelSize);int nSamples=int(clamp(speed,1.0,SAMPLES));vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(SAMPLES); ++i) {if (i>=nSamples)
break;vec2 offset1=vUV+velocity*(float(i)/float(nSamples-1)-0.5);
#if defined(WEBGPU)
result+=texture2DLodEXT(textureSampler,offset1,0.0);
#else
result+=texture2D(textureSampler,offset1);
#endif
}
gl_FragColor=result/float(nSamples);
#endif
#else
gl_FragColor=texture2D(textureSampler,vUV);
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["motionBlurPixelShader",0,{name:t,shader:i}])},99764,e=>{"use strict";var r=e.i(33967);let t="sharpenPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform sharpnessAmounts: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var onePixel: vec2f= vec2f(1.0,1.0)/uniforms.screenSize;var color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var edgeDetection: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(0,-1)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(-1,0)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(1,0)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(0,1)) -
color*4.0;fragmentOutputs.color=max(vec4f(color.rgb*uniforms.sharpnessAmounts.y,color.a)-(uniforms.sharpnessAmounts.x* vec4f(edgeDetection.rgb,0)),vec4f(0.));}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["sharpenPixelShaderWGSL",0,{name:t,shader:i}])},59622,e=>{"use strict";var r=e.i(22969),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.animationToPause=this.registerDataInput("animationToPause",t.RichTypeAny)}_execute(e){this.animationToPause.getValue(e).pause(),this.out._activateSignal(e)}getClassName(){return"FlowGraphPauseAnimationBlock"}}(0,i.RegisterClass)("FlowGraphPauseAnimationBlock",a),e.s(["FlowGraphPauseAnimationBlock",0,a])},24188,e=>{"use strict";var r=e.i(33967);let t="iblGenerateVoxelMipPixelShader",i=`precision highp float;precision highp sampler3D;varying vec2 vUV;uniform sampler3D srcMip;uniform int layerNum;void main(void) {ivec3 Coords=ivec3(2)*ivec3(gl_FragCoord.x,gl_FragCoord.y,layerNum);uint tex =
uint(texelFetch(srcMip,Coords+ivec3(0,0,0),0).x>0.0f ? 1u : 0u)
<< 0u |
uint(texelFetch(srcMip,Coords+ivec3(1,0,0),0).x>0.0f ? 1u : 0u)
<< 1u |
uint(texelFetch(srcMip,Coords+ivec3(0,1,0),0).x>0.0f ? 1u : 0u)
<< 2u |
uint(texelFetch(srcMip,Coords+ivec3(1,1,0),0).x>0.0f ? 1u : 0u)
<< 3u |
uint(texelFetch(srcMip,Coords+ivec3(0,0,1),0).x>0.0f ? 1u : 0u)
<< 4u |
uint(texelFetch(srcMip,Coords+ivec3(1,0,1),0).x>0.0f ? 1u : 0u)
<< 5u |
uint(texelFetch(srcMip,Coords+ivec3(0,1,1),0).x>0.0f ? 1u : 0u)
<< 6u |
uint(texelFetch(srcMip,Coords+ivec3(1,1,1),0).x>0.0f ? 1u : 0u)
<< 7u;glFragColor.rgb=vec3(float(tex)/255.0f,0.0f,0.0f);glFragColor.a=1.0;}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblGenerateVoxelMipPixelShader",0,{name:t,shader:i}])},88658,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphBlock{constructor(e){super(e),this.config=e,this.value=this.registerDataOutput("value",t.RichTypeAny,e.initialValue)}_updateOutputs(e){let r=this.config.variable;e.hasVariable(r)&&this.value.setValue(e.getVariable(r),e)}serialize(e){super.serialize(e),e.config.variable=this.config.variable}getClassName(){return"FlowGraphGetVariableBlock"}}(0,i.RegisterClass)("FlowGraphGetVariableBlock",a),e.s(["FlowGraphGetVariableBlock",0,a])},1594,67151,e=>{"use strict";function r(e){return Math.floor(e/8)}class t{constructor(e){this.size=e,this._byteArray=new Uint8Array(Math.ceil(this.size/8))}get(e){if(e>=this.size)throw RangeError("Bit index out of range");let t=r(e),i=1<<e%8;return(this._byteArray[t]&i)!=0}set(e,t){if(e>=this.size)throw RangeError("Bit index out of range");let i=r(e),a=1<<e%8;t?this._byteArray[i]|=a:this._byteArray[i]&=~a}}e.s(["BitArray",0,t],67151),e.s(["OptimizeIndices",0,function(e){let r=[],i=e.length/3;for(let t=0;t<i;t++)r.push([e[3*t],e[3*t+1],e[3*t+2]]);let a=new Map;r.forEach((e,r)=>{e.forEach(e=>{let t=a.get(e);t||a.set(e,t=[]),t.push(r)})});let o=new t(i),n=[],l=e=>{let t=[e];for(;t.length>0;){let e=t.pop();o.get(e)||(o.set(e,!0),n.push(r[e]),r[e].forEach(e=>{let r=a.get(e);r&&r.forEach(e=>{o.get(e)||t.push(e)})}))}};for(let e=0;e<i;e++)o.get(e)||l(e);let s=0;n.forEach(r=>{e[s++]=r[0],e[s++]=r[1],e[s++]=r[2]})}],1594)},99784,e=>{"use strict";var r=e.i(33967);e.i(15906),e.i(86463),e.i(18989),e.i(54318),e.i(27104),e.i(79964),e.i(50328),e.i(6474);let t="lineVertexShader",i=`#define ADDITIONAL_VERTEX_DECLARATION
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position: vec3f;attribute normal: vec4f;uniform width: f32;uniform aspectRatio: f32;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
var worldViewProjection: mat4x4f=scene.viewProjection*finalWorld;var viewPosition: vec4f=worldViewProjection* vec4f(input.position,1.0);var viewPositionNext: vec4f=worldViewProjection* vec4f(input.normal.xyz,1.0);var currentScreen: vec2f=viewPosition.xy/viewPosition.w;var nextScreen: vec2f=viewPositionNext.xy/viewPositionNext.w;currentScreen=vec2f(currentScreen.x*uniforms.aspectRatio,currentScreen.y);nextScreen=vec2f(nextScreen.x*uniforms.aspectRatio,nextScreen.y);var dir: vec2f=normalize(nextScreen-currentScreen);var normalDir: vec2f= vec2f(-dir.y,dir.x);normalDir*=uniforms.width/2.0;normalDir=vec2f(normalDir.x/uniforms.aspectRatio,normalDir.y);var offset: vec4f= vec4f(normalDir*input.normal.w,0.0,0.0);vertexOutputs.position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["lineVertexShaderWGSL",0,{name:t,shader:i}])},99189,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(27104),e.i(13483),e.i(51597),e.i(69219);let t="gaussianSplattingFragmentDeclaration",i=`fn gaussianColor(inColor: vec4f,inPosition: vec2f)->vec4f
{var A : f32=-dot(inPosition,inPosition);if (A>-4.0)
{var B: f32=exp(A)*inColor.a;
#include<logDepthFragment>
var color: vec3f=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4f(color,B);} else {return vec4f(0.0);}}
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.i(94932);let a="gaussianSplattingPixelShader",o=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
fragmentOutputs.color=gaussianColor(input.vColor,input.vPosition);}
`;r.ShaderStore.ShadersStoreWGSL[a]||(r.ShaderStore.ShadersStoreWGSL[a]=o),e.s(["gaussianSplattingPixelShaderWGSL",0,{name:a,shader:o}],99189)},68597,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(86463),e.i(15906),e.i(27104),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583),e.i(50328),e.i(6474);let t="outlineVertexShader",i=`attribute position: vec3f;attribute normal: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform offset: f32;
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;var normalUpdated: vec3f=vertexInputs.normal;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
var offsetPosition: vec3f=positionUpdated+(normalUpdated*uniforms.offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(offsetPosition,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["outlineVertexShaderWGSL",0,{name:t,shader:i}])},51066,e=>{"use strict";var r=e.i(33967);let t="iblShadowSpatialBlurPixelShader",i=`#define PI 3.1415927
varying vUV: vec2f;var depthSampler: texture_2d<f32>;var worldNormalSampler: texture_2d<f32>;var voxelTracingSampler : texture_2d<f32>;uniform blurParameters: vec4f;
#define stridef uniforms.blurParameters.x
#define worldScale uniforms.blurParameters.y
const weights=array<f32,5>(0.0625,0.25,0.375,0.25,0.0625);const nbWeights: i32=5;fn max2(v: vec2f,w: vec2f)->vec2f {return vec2f(max(v.x,w.x),max(v.y,w.y));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var gbufferRes=vec2f(textureDimensions(depthSampler,0));var gbufferPixelCoord= vec2i(fragmentInputs.vUV*gbufferRes);var shadowRes=vec2f(textureDimensions(voxelTracingSampler,0));var shadowPixelCoord= vec2i(fragmentInputs.vUV*shadowRes);var N: vec3f=textureLoad(worldNormalSampler,gbufferPixelCoord,0).xyz;if (length(N)<0.01) {fragmentOutputs.color=vec4f(1.0,1.0,0.0,1.0);return fragmentOutputs;}
var depth: f32=-textureLoad(depthSampler,gbufferPixelCoord,0).x;var X: vec4f= vec4f(0.0);for(var y: i32=0; y<nbWeights; y++) {for(var x: i32=0; x<nbWeights; x++) {var gBufferCoords: vec2i=gbufferPixelCoord+i32(stridef)*vec2i(x-(nbWeights>>1),y-(nbWeights>>1));var shadowCoords: vec2i=shadowPixelCoord+i32(stridef)*vec2i(x-(nbWeights>>1),y-(nbWeights>>1));var T : vec3f=textureLoad(voxelTracingSampler,shadowCoords,0).xyz;var ddepth: f32=-textureLoad(depthSampler,gBufferCoords,0).x-depth;var dN: vec3f=textureLoad(worldNormalSampler,gBufferCoords,0).xyz-N;var w: f32=weights[x]*weights[y] *
exp2(max(-1000.0/(worldScale*worldScale),-0.5) *
(ddepth*ddepth) -
1e1*dot(dN,dN));X+= vec4f(w*T.x,w*T.y,w*T.z,w);}}
fragmentOutputs.color= vec4f(X.x/X.w,X.y/X.w,X.z/X.w,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblShadowSpatialBlurPixelShaderWGSL",0,{name:t,shader:i}])},92192,e=>{"use strict";var r=e.i(33967);e.i(1414),e.i(24137),e.i(93563),e.i(93741);let t="imageProcessingCompatibility",i=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i);let a="spritesPixelShader",o=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform bool alphaTest;varying vec4 vColor;varying vec2 vUV;uniform sampler2D diffuseSampler;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
vec2 uvPixelPerfect(vec2 uv) {vec2 res=vec2(textureSize(diffuseSampler,0));uv=uv*res;vec2 seam=floor(uv+0.5);uv=seam+clamp((uv-seam)/fwidth(uv),-0.5,0.5);return uv/res;}
#endif
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
vec2 uv=uvPixelPerfect(vUV);
#else
vec2 uv=vUV;
#endif
vec4 color=texture2D(diffuseSampler,uv);float fAlphaTest=float(alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95)
discard;}
color*=vColor;
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["spritesPixelShader",0,{name:a,shader:o}],92192)},61527,e=>{"use strict";var r=e.i(33967);let t="iblCdfDebugPixelShader",i=`precision highp samplerCube;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D cdfy;uniform sampler2D cdfx;uniform sampler2D icdf;uniform sampler2D pdf;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform sampler2D textureSampler;
#define cdfyVSize (0.8/3.0)
#define cdfxVSize 0.1
#define cdfyHSize 0.5
uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
#ifdef IBL_USE_CUBE_MAP
vec3 equirectangularToCubemapDirection(vec2 uv) {float longitude=uv.x*2.0*PI-PI;float latitude=PI*0.5-uv.y*PI;vec3 direction;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
#endif
void main(void) {vec3 colour=vec3(0.0);vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec3 backgroundColour=texture2D(textureSampler,vUV).rgb;int cdfxWidth=textureSize(cdfx,0).x;int cdfyHeight=textureSize(cdfy,0).y;const float iblStart=1.0-cdfyVSize;const float pdfStart=1.0-2.0*cdfyVSize;const float cdfyStart=1.0-3.0*cdfyVSize;const float cdfxStart=1.0-3.0*cdfyVSize-cdfxVSize;const float icdfxStart=1.0-3.0*cdfyVSize-2.0*cdfxVSize;
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(
(uv-vec2(0.0,iblStart))*vec2(1.0,1.0/cdfyVSize));vec3 iblColour=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 iblColour=texture2D(iblSource,(uv-vec2(0.0,iblStart)) *
vec2(1.0,1.0/cdfyVSize))
.rgb;
#endif
vec3 pdfColour=texture(icdf,(uv-vec2(0.0,pdfStart)) *
vec2(1.0,1.0/cdfyVSize)).zzz;float cdfyColour =
texture2D(cdfy,(uv-vec2(0.0,cdfyStart))*vec2(2.0,1.0/cdfyVSize))
.r;float icdfyColour =
texture2D(icdf,(uv-vec2(0.5,cdfyStart))*vec2(2.0,1.0/cdfyVSize))
.g;float cdfxColour =
texture2D(cdfx,(uv-vec2(0.0,cdfxStart))*vec2(1.0,1.0/cdfxVSize))
.r;float icdfxColour=texture2D(icdf,(uv-vec2(0.0,icdfxStart)) *
vec2(1.0,1.0/cdfxVSize))
.r;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {colour=backgroundColour;} else if (uv.y>iblStart) {colour+=iblColour;} else if (uv.y>pdfStart) {colour+=pdfColour;} else if (uv.y>cdfyStart && uv.x<0.5) {colour.r+=cdfyColour/float(cdfyHeight);} else if (uv.y>cdfyStart && uv.x>0.5) {colour.r+=icdfyColour;} else if (uv.y>cdfxStart) {colour.r+=cdfxColour/float(cdfxWidth);} else if (uv.y>icdfxStart) {colour.r+=icdfxColour;}
gl_FragColor=vec4(colour,1.0);glFragColor.rgb=mix(gl_FragColor.rgb,backgroundColour,0.5);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblCdfDebugPixelShader",0,{name:t,shader:i}])},7093,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(86463),e.i(55112),e.i(15906),e.i(79964),e.i(3813),e.i(42583),e.i(50328),e.i(8882),e.i(75902);let t="colorVertexShader",i=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["colorVertexShaderWGSL",0,{name:t,shader:i}])},58255,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="iblScaledLuminancePixelShader",i=`#include<helperFunctions>
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
uniform iblHeight: i32;uniform iblWidth: i32;fn fetchLuminance(coords: vec2f)->f32 {
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(coords);var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var deform: f32=sin(input.vUV.y*PI);var luminance: f32=fetchLuminance(input.vUV);fragmentOutputs.color=vec4f(vec3f(deform*luminance),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblScaledLuminancePixelShaderWGSL",0,{name:t,shader:i}])},98132,e=>{"use strict";var r=e.i(33967);let t="lodCubePixelShader",i=`precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)
{vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x),lod);
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x),lod);
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x),lod);
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x),lod);
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001),lod);
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001),lod);
#endif
if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["lodCubePixelShader",0,{name:t,shader:i}])},91932,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="rgbdDecodePixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["rgbdDecodePixelShader",0,{name:t,shader:i}])},10163,e=>{"use strict";var r=e.i(33967);let t="displayPassPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D passSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(passSampler,vUV);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["displayPassPixelShader",0,{name:t,shader:i}])},84854,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererPixelShader",i=`precision highp float;varying vec2 vDecalTC;uniform sampler2D textureSampler;void main(void) {if (vDecalTC.x<0. || vDecalTC.x>1. || vDecalTC.y<0. || vDecalTC.y>1.) {discard;}
gl_FragColor=texture2D(textureSampler,vDecalTC);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["meshUVSpaceRendererPixelShader",0,{name:t,shader:i}])},17259,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererMaskerPixelShader",i=`varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color= vec4f(1.0,1.0,1.0,1.0);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["meshUVSpaceRendererMaskerPixelShaderWGSL",0,{name:t,shader:i}])},9978,e=>{"use strict";var r=e.i(33967);e.i(66911),e.i(23393),e.i(94932);let t="glowMapGenerationPixelShader",i=`#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)
#include<helperFunctions>
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;var opacitySamplerSampler: sampler;var opacitySampler: texture_2d<f32>;uniform opacityIntensity: f32;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;var emissiveSamplerSampler: sampler;var emissiveSampler: texture_2d<f32>;
#endif
#ifdef VERTEXALPHA
varying vColor: vec4f;
#endif
uniform glowColor: vec4f;uniform glowIntensity: f32;
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
var finalColor: vec4f=uniforms.glowColor;
#ifdef DIFFUSE
var albedoTexture: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUVDiffuse);
#ifdef DIFFUSE_ISLINEAR
albedoTexture=toGammaSpace(albedoTexture);
#endif
#ifdef GLOW
finalColor=vec4f(finalColor.rgb,finalColor.a*albedoTexture.a);
#endif
#ifdef HIGHLIGHT
finalColor=vec4f(finalColor.rgb,albedoTexture.a);
#endif
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vUVOpacity);
#ifdef OPACITYRGB
finalColor=vec4f(finalColor.rgb,finalColor.a*getLuminance(opacityMap.rgb));
#else
finalColor=vec4f(finalColor.rgb,finalColor.a*opacityMap.a);
#endif
finalColor=vec4f(finalColor.rgb,finalColor.a*uniforms.opacityIntensity);
#endif
#ifdef VERTEXALPHA
finalColor=vec4f(finalColor.rgb,finalColor.a*fragmentInputs.vColor.a);
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE) {discard;}
#endif
#ifdef EMISSIVE
var emissive: vec4f=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vUVEmissive);
#ifdef EMISSIVE_ISLINEAR
emissive=toGammaSpace(emissive);
#endif
fragmentOutputs.color=emissive*finalColor*uniforms.glowIntensity;
#else
fragmentOutputs.color=finalColor*uniforms.glowIntensity;
#endif
#ifdef HIGHLIGHT
fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb,uniforms.glowColor.a);
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["glowMapGenerationPixelShaderWGSL",0,{name:t,shader:i}])},50308,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(59637),a=e.i(99839);class o extends r.FlowGraphBlock{constructor(e){super(e),this.config=e,this._inputCases=new Map,this.case=this.registerDataInput("case",t.RichTypeAny,NaN),this.default=this.registerDataInput("default",t.RichTypeAny),this.value=this.registerDataOutput("value",t.RichTypeAny),(this.config.cases||[]).forEach(e=>{e=(0,i.getNumericValue)(e),this.config.treatCasesAsIntegers&&(e|=0,this._inputCases.has(e))||this._inputCases.set(e,this.registerDataInput(`in_${e}`,t.RichTypeAny))})}_updateOutputs(e){let r,t=this.case.getValue(e);r=(0,i.isNumeric)(t)?this._getOutputValueForCase((0,i.getNumericValue)(t),e):this.default.getValue(e),this.value.setValue(r,e)}_getOutputValueForCase(e,r){return this._inputCases.get(e)?.getValue(r)}getClassName(){return"FlowGraphDataSwitchBlock"}}(0,a.RegisterClass)("FlowGraphDataSwitchBlock",o),e.s(["FlowGraphDataSwitchBlock",0,o])},45799,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(27104),e.i(51597),e.i(94932);let t="linePixelShader",i=`#include<clipPlaneFragmentDeclaration>
uniform color: vec4f;
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["linePixelShaderWGSL",0,{name:t,shader:i}])},8887,e=>{"use strict";var r=e.i(33967);let t="bloomMergePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var bloomBlurSampler: sampler;var bloomBlur: texture_2d<f32>;uniform bloomWeight: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var blurred: vec3f=textureSample(bloomBlur,bloomBlurSampler,input.vUV).rgb;fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb+(blurred.rgb*uniforms.bloomWeight),fragmentOutputs.color.a);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["bloomMergePixelShaderWGSL",0,{name:t,shader:i}])},66475,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="grainPixelShader",i=`#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform intensity: f32;uniform animatedSeed: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var seed: vec2f=input.vUV*uniforms.animatedSeed;var grain: f32=dither(seed,uniforms.intensity);var lum: f32=getLuminance(fragmentOutputs.color.rgb);var grainAmount: f32=(cos(-PI+(lum*PI*2.))+1.)/2.;fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb+grain*grainAmount,fragmentOutputs.color.a);fragmentOutputs.color=vec4f(max(fragmentOutputs.color.rgb,vec3f(0.0)),fragmentOutputs.color.a);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["grainPixelShaderWGSL",0,{name:t,shader:i}])},95262,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGrid2dArrayDebugPixelShader",i=`varying vUV: vec2f;var voxelTextureSampler: sampler;var voxelTexture: texture_3d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform slice: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var size: vec3u=textureDimensions(voxelTexture,0);var dimension: f32=sqrt( f32(size.z));var samplePos: vec2f=fract(input.vUV.xy* vec2f(dimension));var sampleIndex: u32= u32(floor(input.vUV.x* f32(dimension))+floor(input.vUV.y* f32(dimension))*dimension);var color=textureSample(voxelTexture,voxelTextureSampler, vec3f(samplePos.xy,sampleIndex)).rrr;color+=textureSample(textureSampler,textureSamplerSampler,input.vUV.xy).rgb;fragmentOutputs.color=vec4f(color,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblVoxelGrid2dArrayDebugPixelShaderWGSL",0,{name:t,shader:i}])},30310,e=>{"use strict";var r=e.i(33967);let t="greasedLinePixelShader",i=`var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAndColorDistributionType: vec2f;uniform grlColor: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
let grlColorMode: f32=uniforms.grl_colorModeAndColorDistributionType.x;let grlColorDistributionType: f32=uniforms.grl_colorModeAndColorDistributionType.y;var outColor=vec4(uniforms.grlColor,1.);outColor.a=step(fragmentInputs.grlCounters,uniforms.grlVisibility);if (outColor.a==0.0) {discard;}
if (uniforms.grlUseDash==1.0) {let dashPosition=(fragmentInputs.grlCounters+uniforms.grlDashOffset) % uniforms.grlDashArray;outColor.a*=ceil(dashPosition-(uniforms.grlDashArray*uniforms.grlDashRatio));if (outColor.a==0.0) {discard;}}
if (uniforms.grlUseColors==1.) {
#ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,vec2f(fragmentInputs.grlCounters,0.));
#else
let lookup: vec2f=vec2(fract(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth),1.0-floor(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth));let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,lookup);
#endif
if (grlColorMode==COLOR_MODE_SET) {outColor=grlColor;} else if (grlColorMode==COLOR_MODE_ADD) {outColor+=grlColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {outColor*=grlColor;}}
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=outColor;
#endif
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+outColor.rgb*outColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-outColor.a));} else {fragmentOutputs.backColor+=outColor;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["greasedLinePixelShaderWGSL",0,{name:t,shader:i}])},28465,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="iblIcdfPixelShader",i=`precision highp sampler2D;
#include<helperFunctions>
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform sampler2D scaledLuminanceSampler;uniform int iblWidth;uniform int iblHeight;uniform sampler2D cdfx;uniform sampler2D cdfy;float fetchLuminance(vec2 coords) {
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(coords);vec3 color=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 color=textureLod(iblSource,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
float fetchCDFx(int x) { return texelFetch(cdfx,ivec2(x,0),0).x; }
float bisectx(int size,float targetValue) {int a=0,b=size-1;while (b-a>1) {int c=a+b>>1;if (fetchCDFx(c)<targetValue)
a=c;else
b=c;}
return mix(float(a),float(b),
(targetValue-fetchCDFx(a))/(fetchCDFx(b)-fetchCDFx(a))) /
float(size-1);}
float fetchCDFy(int y,int invocationId) {return texelFetch(cdfy,ivec2(invocationId,y),0).x;}
float bisecty(int size,float targetValue,int invocationId) {int a=0,b=size-1;while (b-a>1) {int c=a+b>>1;if (fetchCDFy(c,invocationId)<targetValue)
a=c;else
b=c;}
return mix(float(a),float(b),
(targetValue-fetchCDFy(a,invocationId)) /
(fetchCDFy(b,invocationId)-fetchCDFy(a,invocationId))) /
float(size-1);}
void main(void) {ivec2 cdfxSize=textureSize(cdfx,0);int cdfWidth=cdfxSize.x;int icdfWidth=cdfWidth-1;ivec2 currentPixel=ivec2(gl_FragCoord.xy);vec3 outputColor=vec3(1.0);if (currentPixel.x==0) {outputColor.x=0.0;} else if (currentPixel.x==icdfWidth-1) {outputColor.x=1.0;} else {float targetValue=fetchCDFx(cdfWidth-1)*vUV.x;outputColor.x=bisectx(cdfWidth,targetValue);}
ivec2 cdfySize=textureSize(cdfy,0);int cdfHeight=cdfySize.y;if (currentPixel.y==0) {outputColor.y=0.0;} else if (currentPixel.y==cdfHeight-2) {outputColor.y=1.0;} else {float targetValue=fetchCDFy(cdfHeight-1,currentPixel.x)*vUV.y;outputColor.y=max(bisecty(cdfHeight,targetValue,currentPixel.x),0.0);}
vec2 size=vec2(textureSize(scaledLuminanceSampler,0));float highestMip=floor(log2(size.x));float normalization=texture(scaledLuminanceSampler,vUV,highestMip).r;float pixelLuminance=fetchLuminance(vUV);outputColor.z=pixelLuminance/(2.0*PI*normalization);gl_FragColor=vec4(outputColor,1.0);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblIcdfPixelShader",0,{name:t,shader:i}])},8545,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(15906),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583);let t="meshUVSpaceRendererVertexShader",i=`attribute position: vec3f;attribute normal: vec3f;attribute uv: vec2f;uniform projMatrix: mat4x4f;varying vDecalTC: vec2f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;var normalUpdated: vec3f=input.normal;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);var vNormalW: vec3f;
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vNormalW=normalize(normWorldSM*normalUpdated);
#endif
var normalView: vec3f=normalize((uniforms.projMatrix* vec4f(vNormalW,0.0)).xyz);var decalTC: vec3f=(uniforms.projMatrix*worldPos).xyz;vertexOutputs.vDecalTC=decalTC.xy;vertexOutputs.position=vec4f(input.uv*2.0-1.0,select(decalTC.z,2.,normalView.z>0.0),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["meshUVSpaceRendererVertexShaderWGSL",0,{name:t,shader:i}])},40237,e=>{"use strict";var r=e.i(33967);let t="bilateralBlurPixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;uniform depthThreshold: f32;uniform normalThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color= vec4f(color,1.);return fragmentOutputs;}
var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
var sigma: f32= f32(uniforms.filterSize);var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sigmaNormal: f32=uniforms.normalThreshold;var two_sigmaNormal2: f32=2.0*sigmaNormal*sigmaNormal;var sum: vec3f= vec3f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {var coords=vec2f(f32(x));var sampleColor: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rgb;var sampleDepth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).r;var sampleNormal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var depthDelta: f32=abs(sampleDepth-depth);var wd: f32=step(depthDelta,uniforms.depthThreshold);var normalDelta: vec3f=abs(sampleNormal-normal);var wn: f32=step(normalDelta.x+normalDelta.y+normalDelta.z,uniforms.normalThreshold);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}
fragmentOutputs.color= vec4f(sum/wsum,1.);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["bilateralBlurPixelShaderWGSL",0,{name:t,shader:i}])},43923,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(26230),e.i(44371),e.i(18178),e.i(22752),e.i(70017),e.i(44754),e.i(7025),e.i(1141),e.i(74391);let t="colorVertexShader",i=`attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform mat4 view;
#endif
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["colorVertexShader",0,{name:t,shader:i}])},61338,e=>{"use strict";var r=e.i(33967);let t="rsmGlobalIlluminationPixelShader",i=`/**
* The implementation is an application of the formula found in http:
* For better results,it also adds a random (noise) rotation to the RSM samples (the noise artifacts are easier to remove than the banding artifacts).
*/
precision highp float;varying vec2 vUV;uniform mat4 rsmLightMatrix;uniform vec4 rsmInfo;uniform vec4 rsmInfo2;uniform sampler2D textureSampler;uniform sampler2D normalSampler;uniform sampler2D rsmPositionW;uniform sampler2D rsmNormalW;uniform sampler2D rsmFlux;uniform sampler2D rsmSamples;
#ifdef TRANSFORM_NORMAL
uniform mat4 invView;
#endif
float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 perm(vec4 x){return mod289(((x*34.0)+1.0)*x);}
float noise(vec3 p){vec3 a=floor(p);vec3 d=p-a;d=d*d*(3.0-2.0*d);vec4 b=a.xxyy+vec4(0.0,1.0,0.0,1.0);vec4 k1=perm(b.xyxy);vec4 k2=perm(k1.xyxy+b.zzww);vec4 c=k2+a.zzzz;vec4 k3=perm(c);vec4 k4=perm(c+1.0);vec4 o1=fract(k3*(1.0/41.0));vec4 o2=fract(k4*(1.0/41.0));vec4 o3=o2*d.z+o1*(1.0-d.z);vec2 o4=o3.yw*d.x+o3.xz*(1.0-d.x);return o4.y*d.y+o4.x*(1.0-d.y);}
vec3 computeIndirect(vec3 p,vec3 n) {vec3 indirectDiffuse=vec3(0.);int numSamples=int(rsmInfo.x);float radius=rsmInfo.y;float intensity=rsmInfo.z;float edgeArtifactCorrection=rsmInfo.w;vec4 texRSM=rsmLightMatrix*vec4(p,1.);texRSM.xy/=texRSM.w;texRSM.xy=texRSM.xy*0.5+0.5;float angle=noise(p*rsmInfo2.x);float c=cos(angle);float s=sin(angle);for (int i=0; i<numSamples; i++) {vec3 rsmSample=texelFetch(rsmSamples,ivec2(i,0),0).xyz;float weightSquare=rsmSample.z;if (rsmInfo2.y==1.0) rsmSample.xy=vec2(rsmSample.x*c+rsmSample.y*s,-rsmSample.x*s+rsmSample.y*c);vec2 uv=texRSM.xy+rsmSample.xy*radius;if (uv.x<0. || uv.x>1. || uv.y<0. || uv.y>1.) continue;vec3 vplPositionW=textureLod(rsmPositionW,uv,0.).xyz;vec3 vplNormalW=textureLod(rsmNormalW,uv,0.).xyz*2.0-1.0;vec3 vplFlux=textureLod(rsmFlux,uv,0.).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
float dist2=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*weightSquare*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}
return clamp(indirectDiffuse*intensity,0.0,1.0);}
void main(void) 
{vec3 positionW=texture2D(textureSampler,vUV).xyz;vec3 normalW=texture2D(normalSampler,vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(invView*vec4(normalW,0.)).xyz;
#endif
gl_FragColor.rgb=computeIndirect(positionW,normalW);gl_FragColor.a=1.0;}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["rsmGlobalIlluminationPixelShader",0,{name:t,shader:i}])},23354,e=>{"use strict";var r=e.i(33967);e.i(28248),e.i(1414),e.i(11364),e.i(93741);let t="colorPixelShader",i=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vec4 vColor;
#else
uniform vec4 color;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
gl_FragColor=vColor;
#else
gl_FragColor=color;
#endif
#include<fogFragment>(color,gl_FragColor)
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["colorPixelShader",0,{name:t,shader:i}])},34635,e=>{"use strict";var r=e.i(33967);e.i(31713),e.i(13851),e.i(41092);let t="imageProcessingPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 result=texture2D(textureSampler,vUV);result.rgb=max(result.rgb,vec3(0.));
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result.rgb=toLinearSpace(result.rgb);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
gl_FragColor=result;}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["imageProcessingPixelShader",0,{name:t,shader:i}])},22768,e=>{"use strict";var r=e.i(33967);let t="pickingPixelShader",i=`#if defined(INSTANCES)
varying vec4 vMeshID;
#else
uniform vec4 meshID;
#endif
void main(void) {
#if defined(INSTANCES)
gl_FragColor=vMeshID;
#else
gl_FragColor=meshID;
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["pickingPixelShader",0,{name:t,shader:i}])},37311,e=>{"use strict";var r=e.i(33967);let t="pickingPixelShader",i=`#if defined(INSTANCES)
varying vMeshID: vec4f;
#else
uniform meshID: vec4f;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#if defined(INSTANCES)
fragmentOutputs.color=input.vMeshID;
#else
fragmentOutputs.color=uniforms.meshID;
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["pickingPixelShaderWGSL",0,{name:t,shader:i}])},93200,e=>{"use strict";var r=e.i(33967);let t="taaPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D historySampler;uniform float factor;void main() {vec4 c=texelFetch(textureSampler,ivec2(gl_FragCoord.xy),0);vec4 h=texelFetch(historySampler,ivec2(gl_FragCoord.xy),0);gl_FragColor=mix(h,c,factor);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["taaPixelShader",0,{name:t,shader:i}])},85089,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="rgbdEncodePixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["rgbdEncodePixelShader",0,{name:t,shader:i}])},89212,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(11104),a=e.i(99839);class o extends r.FlowGraphBlock{constructor(e={}){super(e),this.keyFrames=[];const r="string"==typeof e?.animationType?(0,t.getRichTypeByFlowGraphType)(e.animationType):(0,t.getRichTypeByAnimationType)(e?.animationType??0),i=e?.keyFramesCount??1,a=this.registerDataInput("duration_0",t.RichTypeNumber,0),o=this.registerDataInput("value_0",r);this.keyFrames.push({duration:a,value:o});for(let a=1;a<i+1;a++){const o=this.registerDataInput(`duration_${a}`,t.RichTypeNumber,a===i?e.duration:void 0),n=this.registerDataInput(`value_${a}`,r);this.keyFrames.push({duration:o,value:n})}this.initialValue=this.keyFrames[0].value,this.endValue=this.keyFrames[i].value,this.easingFunction=this.registerDataInput("easingFunction",t.RichTypeAny),this.animation=this.registerDataOutput("animation",t.RichTypeAny),this.propertyName=this.registerDataInput("propertyName",t.RichTypeAny,e?.propertyName),this.customBuildAnimation=this.registerDataInput("customBuildAnimation",t.RichTypeAny)}_updateOutputs(e){let r=e._getGlobalContextVariable("interpolationAnimations",[]),t=this.propertyName.getValue(e),i=this.easingFunction.getValue(e),a=this._createAnimation(e,t,i);if(this.animation.setValue(a,e),Array.isArray(a))for(let e of a)r.push(e.uniqueId);else r.push(a.uniqueId);e._setGlobalContextVariable("interpolationAnimations",r)}_createAnimation(e,r,t){let a=this.initialValue.richType,o=[],n=this.initialValue.getValue(e)||a.defaultValue;o.push({frame:0,value:n});let l=this.config?.numberOfKeyFrames??1;for(let r=1;r<l+1;r++){let t=this.keyFrames[r].duration?.getValue(e),i=this.keyFrames[r].value?.getValue(e);r===l-1&&(i=i||a.defaultValue),void 0!==t&&i&&o.push({frame:60*t,value:i})}let s=this.customBuildAnimation.getValue(e);if(s)return s()(o,60,a.animationType,t);if("string"!=typeof r)return r.map(e=>{let r=i.Animation.CreateAnimation(e,a.animationType,60,t);return r.setKeys(o),r});{let e=i.Animation.CreateAnimation(r,a.animationType,60,t);return e.setKeys(o),[e]}}getClassName(){return"FlowGraphInterpolationBlock"}}(0,a.RegisterClass)("FlowGraphInterpolationBlock",o),e.s(["FlowGraphInterpolationBlock",0,o])},46028,e=>{"use strict";var r=e.i(33967);let t="fxaaPixelShader",i=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
uniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sampleCoordSW;const float fxaaQualitySubpix=1.0;const float fxaaQualityEdgeThreshold=0.166;const float fxaaQualityEdgeThresholdMin=0.0833;const vec3 kLumaCoefficients=vec3(0.2126,0.7152,0.0722);
#define FxaaLuma(rgba) dot(rgba.rgb,kLumaCoefficients)
void main(){vec2 posM;posM.x=vUV.x;posM.y=vUV.y;vec4 rgbyM=TEXTUREFUNC(textureSampler,vUV,0.0);float lumaM=FxaaLuma(rgbyM);float lumaS=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordS,0.0));float lumaE=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordE,0.0));float lumaN=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordN,0.0));float lumaW=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordW,0.0));float maxSM=max(lumaS,lumaM);float minSM=min(lumaS,lumaM);float maxESM=max(lumaE,maxSM);float minESM=min(lumaE,minSM);float maxWN=max(lumaN,lumaW);float minWN=min(lumaN,lumaW);float rangeMax=max(maxWN,maxESM);float rangeMin=min(minWN,minESM);float rangeMaxScaled=rangeMax*fxaaQualityEdgeThreshold;float range=rangeMax-rangeMin;float rangeMaxClamped=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);
#ifndef MALI
if(range<rangeMaxClamped) 
{gl_FragColor=rgbyM;return;}
#endif
float lumaNW=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordNW,0.0));float lumaSE=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordSE,0.0));float lumaNE=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordNE,0.0));float lumaSW=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordSW,0.0));float lumaNS=lumaN+lumaS;float lumaWE=lumaW+lumaE;float subpixRcpRange=1.0/range;float subpixNSWE=lumaNS+lumaWE;float edgeHorz1=(-2.0*lumaM)+lumaNS;float edgeVert1=(-2.0*lumaM)+lumaWE;float lumaNESE=lumaNE+lumaSE;float lumaNWNE=lumaNW+lumaNE;float edgeHorz2=(-2.0*lumaE)+lumaNESE;float edgeVert2=(-2.0*lumaN)+lumaNWNE;float lumaNWSW=lumaNW+lumaSW;float lumaSWSE=lumaSW+lumaSE;float edgeHorz4=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);float edgeVert4=(abs(edgeVert1)*2.0)+abs(edgeVert2);float edgeHorz3=(-2.0*lumaW)+lumaNWSW;float edgeVert3=(-2.0*lumaS)+lumaSWSE;float edgeHorz=abs(edgeHorz3)+edgeHorz4;float edgeVert=abs(edgeVert3)+edgeVert4;float subpixNWSWNESE=lumaNWSW+lumaNESE;float lengthSign=texelSize.x;bool horzSpan=edgeHorz>=edgeVert;float subpixA=subpixNSWE*2.0+subpixNWSWNESE;if (!horzSpan)
{lumaN=lumaW;}
if (!horzSpan) 
{lumaS=lumaE;}
if (horzSpan) 
{lengthSign=texelSize.y;}
float subpixB=(subpixA*(1.0/12.0))-lumaM;float gradientN=lumaN-lumaM;float gradientS=lumaS-lumaM;float lumaNN=lumaN+lumaM;float lumaSS=lumaS+lumaM;bool pairN=abs(gradientN)>=abs(gradientS);float gradient=max(abs(gradientN),abs(gradientS));if (pairN)
{lengthSign=-lengthSign;}
float subpixC=clamp(abs(subpixB)*subpixRcpRange,0.0,1.0);vec2 posB;posB.x=posM.x;posB.y=posM.y;vec2 offNP;offNP.x=(!horzSpan) ? 0.0 : texelSize.x;offNP.y=(horzSpan) ? 0.0 : texelSize.y;if (!horzSpan) 
{posB.x+=lengthSign*0.5;}
if (horzSpan)
{posB.y+=lengthSign*0.5;}
vec2 posN;posN.x=posB.x-offNP.x*1.5;posN.y=posB.y-offNP.y*1.5;vec2 posP;posP.x=posB.x+offNP.x*1.5;posP.y=posB.y+offNP.y*1.5;float subpixD=((-2.0)*subpixC)+3.0;float lumaEndN=FxaaLuma(TEXTUREFUNC(textureSampler,posN,0.0));float subpixE=subpixC*subpixC;float lumaEndP=FxaaLuma(TEXTUREFUNC(textureSampler,posP,0.0));if (!pairN) 
{lumaNN=lumaSS;}
float gradientScaled=gradient*1.0/4.0;float lumaMM=lumaM-lumaNN*0.5;float subpixF=subpixD*subpixE;bool lumaMLTZero=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;bool doneN=abs(lumaEndN)>=gradientScaled;bool doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) 
{posN.x-=offNP.x*3.0;}
if (!doneN) 
{posN.y-=offNP.y*3.0;}
bool doneNP=(!doneN) || (!doneP);if (!doneP) 
{posP.x+=offNP.x*3.0;}
if (!doneP)
{posP.y+=offNP.y*3.0;}
if (doneNP)
{if (!doneN) lumaEndN=FxaaLuma(TEXTUREFUNC(textureSampler,posN.xy,0.0));if (!doneP) lumaEndP=FxaaLuma(TEXTUREFUNC(textureSampler,posP.xy,0.0));if (!doneN) lumaEndN=lumaEndN-lumaNN*0.5;if (!doneP) lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) posN.x-=offNP.x*12.0;if (!doneN) posN.y-=offNP.y*12.0;doneNP=(!doneN) || (!doneP);if (!doneP) posP.x+=offNP.x*12.0;if (!doneP) posP.y+=offNP.y*12.0;}
float dstN=posM.x-posN.x;float dstP=posP.x-posM.x;if (!horzSpan)
{dstN=posM.y-posN.y;}
if (!horzSpan) 
{dstP=posP.y-posM.y;}
bool goodSpanN=(lumaEndN<0.0) != lumaMLTZero;float spanLength=(dstP+dstN);bool goodSpanP=(lumaEndP<0.0) != lumaMLTZero;float spanLengthRcp=1.0/spanLength;bool directionN=dstN<dstP;float dst=min(dstN,dstP);bool goodSpan=directionN ? goodSpanN : goodSpanP;float subpixG=subpixF*subpixF;float pixelOffset=(dst*(-spanLengthRcp))+0.5;float subpixH=subpixG*fxaaQualitySubpix;float pixelOffsetGood=goodSpan ? pixelOffset : 0.0;float pixelOffsetSubpix=max(pixelOffsetGood,subpixH);if (!horzSpan)
{posM.x+=pixelOffsetSubpix*lengthSign;}
if (horzSpan)
{posM.y+=pixelOffsetSubpix*lengthSign;}
#ifdef MALI
if(range<rangeMaxClamped) 
{gl_FragColor=rgbyM;}
else
{gl_FragColor=TEXTUREFUNC(textureSampler,posM,0.0);}
#else
gl_FragColor=TEXTUREFUNC(textureSampler,posM,0.0);
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fxaaPixelShader",0,{name:t,shader:i}])},86071,e=>{"use strict";var r=e.i(33967);e.i(26230),e.i(44371),e.i(24137),e.i(7025),e.i(1141),e.i(3449);let t="particlesVertexShader",i=`attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;
#ifdef ANIMATESHEET
attribute float cellIndex;
#endif
#ifndef BILLBOARD
attribute vec3 direction;
#endif
#ifdef BILLBOARDSTRETCHED
attribute vec3 direction;
#endif
#ifdef RAMPGRADIENT
attribute vec4 remapData;
#endif
attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;
#ifdef ANIMATESHEET
uniform vec3 particlesInfos; 
#endif
varying vec2 vUV;varying vec4 vColor;varying vec3 vPositionW;
#ifdef RAMPGRADIENT
varying vec4 remapRanges;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform mat4 invView;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform vec3 eyePosition;
#endif
vec3 rotate(vec3 yaxis,vec3 rotatedCorner) {vec3 xaxis=normalize(cross(vec3(0.,1.0,0.),yaxis));vec3 zaxis=normalize(cross(yaxis,xaxis));vec3 row0=vec3(xaxis.x,xaxis.y,xaxis.z);vec3 row1=vec3(yaxis.x,yaxis.y,yaxis.z);vec3 row2=vec3(zaxis.x,zaxis.y,zaxis.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
vec3 rotateAlign(vec3 toCamera,vec3 rotatedCorner) {vec3 normalizedToCamera=normalize(toCamera);vec3 normalizedCrossDirToCamera=normalize(cross(normalize(direction),normalizedToCamera));vec3 row0=vec3(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);vec3 row2=vec3(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
vec3 row1=direction;
#else
vec3 crossProduct=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));vec3 row1=vec3(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec2 cornerPos;cornerPos=(vec2(offset.x-0.5,offset.y -0.5)-translationPivot)*size;
#ifdef BILLBOARD
vec3 rotatedCorner;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=position-eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 toCamera=position-eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 viewPos=(view*vec4(position,1.0)).xyz+rotatedCorner;vPositionW=(invView*vec4(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
remapRanges=remapData;
#endif
gl_Position=projection*vec4(viewPos,1.0);
#else
vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=normalize(direction);vPositionW=rotate(yaxis,rotatedCorner);gl_Position=projection*view*vec4(vPositionW,1.0);
#endif
vColor=color;
#ifdef ANIMATESHEET
float rowOffset=floor(cellIndex*particlesInfos.z);float columnOffset=cellIndex-rowOffset/particlesInfos.z;vec2 uvScale=particlesInfos.xy;vec2 uvOffset=vec2(offset.x ,1.0-offset.y);vUV=(uvOffset+vec2(columnOffset,rowOffset))*uvScale;
#else
vUV=offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
vec4 worldPos=vec4(vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["particlesVertexShader",0,{name:t,shader:i}])},50478,e=>{"use strict";var r=e.i(33967);e.i(13420),e.i(66911),e.i(34282),e.i(52813),e.i(15906),e.i(86463),e.i(55112),e.i(7874),e.i(27104),e.i(79964),e.i(3813),e.i(42583),e.i(50328),e.i(8882),e.i(75579),e.i(6474);let t="backgroundVertexShader",i=`#include<backgroundUboDeclaration>
#include<helperFunctions>
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif
#ifdef MAINUV2
varying vMainUV2: vec2f;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vDiffuseUV: vec2f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=input.position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);} else {vertexOutputs.position=scene.viewProjectionR*finalWorld* vec4f(input.position,1.0);}
#else
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);
#endif
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef NORMAL
var normalWorld: mat3x3f=mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*input.normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(input.position,0.0)).xyz);
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
var screenToWorld: mat3x3f=inverseMat3( mat3x3f(finalWorld*scene.viewProjection));var segment: vec3f=mix(vertexOutputs.vDirectionW,screenToWorld* vec3f(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vertexOutputs.vDirectionW=normalize(segment);} else {vertexOutputs.vDirectionW=normalize(vertexOutputs.vDirectionW+(vertexOutputs.vDirectionW-segment));}
#endif
#endif
#ifndef UV1
var uv: vec2f=vec2f(0.,0.);
#else
var uv=input.uv;
#endif
#ifndef UV2
var uv2: vec2f=vec2f(0.,0.);
#else
var uv2=input.uv2;
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uv;
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (uniforms.vDiffuseInfos.x==0.)
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv,1.0,0.0)).xy;}
else
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2,1.0,0.0)).xy;}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["backgroundVertexShaderWGSL",0,{name:t,shader:i}])},27099,e=>{"use strict";var r=e.i(22969),t=e.i(61724),i=e.i(99839),a=e.i(52898);class o extends r.FlowGraphExecutionBlockWithOutSignal{constructor(e){if(super(e),this.message=this.registerDataInput("message",t.RichTypeAny),this.logType=this.registerDataInput("logType",t.RichTypeAny,"log"),e?.messageTemplate)for(const r of this._getTemplateMatches(e.messageTemplate))this.registerDataInput(r,t.RichTypeAny)}_execute(e){let r=this.logType.getValue(e),t=this._getMessageValue(e);"warn"===r?a.Logger.Warn(t):"error"===r?a.Logger.Error(t):a.Logger.Log(t),this.out._activateSignal(e)}getClassName(){return"FlowGraphConsoleLogBlock"}_getMessageValue(e){if(!this.config?.messageTemplate)return this.message.getValue(e);{let r=this.config.messageTemplate;for(let t of this._getTemplateMatches(r)){let i=this.getDataInput(t)?.getValue(e);void 0!==i&&(r=r.replace(RegExp(`\\{${t}\\}`,"g"),i.toString()))}return r}}_getTemplateMatches(e){let r,t=/\{([^}]+)\}/g,i=[];for(;null!==(r=t.exec(e));)i.push(r[1]);return i}}(0,i.RegisterClass)("FlowGraphConsoleLogBlock",o),e.s(["FlowGraphConsoleLogBlock",0,o])},18101,e=>{"use strict";var r=e.i(22969),t=e.i(61724),i=e.i(99839),a=e.i(59637),o=e.i(66423);class n extends r.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.startIndex=this.registerDataInput("startIndex",t.RichTypeAny,0),this.endIndex=this.registerDataInput("endIndex",t.RichTypeAny),this.step=this.registerDataInput("step",t.RichTypeNumber,1),this.index=this.registerDataOutput("index",t.RichTypeFlowGraphInteger,new o.FlowGraphInteger((0,a.getNumericValue)(e?.initialIndex??0))),this.executionFlow=this._registerSignalOutput("executionFlow"),this.completed=this._registerSignalOutput("completed"),this._unregisterSignalOutput("out")}_execute(e){let r=(0,a.getNumericValue)(this.startIndex.getValue(e)),t=this.step.getValue(e),i=(0,a.getNumericValue)(this.endIndex.getValue(e));for(let l=r;l<i&&(this.index.setValue(new o.FlowGraphInteger(l),e),this.executionFlow._activateSignal(e),i=(0,a.getNumericValue)(this.endIndex.getValue(e)),!(l>n.MaxLoopIterations));l+=t);this.completed._activateSignal(e)}getClassName(){return"FlowGraphForLoopBlock"}}n.MaxLoopIterations=1e3,(0,i.RegisterClass)("FlowGraphForLoopBlock",n),e.s(["FlowGraphForLoopBlock",0,n])},80108,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="iblScaledLuminancePixelShader",i=`precision highp sampler2D;precision highp samplerCube;
#include<helperFunctions>
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform int iblWidth;uniform int iblHeight;float fetchLuminance(vec2 coords) {
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(coords);vec3 color=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 color=textureLod(iblSource,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
void main(void) {float deform=sin(vUV.y*PI);float luminance=fetchLuminance(vUV);gl_FragColor=vec4(vec3(deform*luminance),1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblScaledLuminancePixelShader",0,{name:t,shader:i}])},11150,e=>{"use strict";var r=e.i(33967);let t="circleOfConfusionPixelShader",i=`varying vUV: vec2f;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifndef COC_DEPTH_NOT_NORMALIZED
uniform cameraMinMaxZ: vec2f;
#endif
uniform focusDistance: f32;uniform cocPrecalculation: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var depth: f32=textureSample(depthSampler,depthSamplerSampler,input.vUV).r;
#define CUSTOM_COC_DEPTH
#ifdef COC_DEPTH_NOT_NORMALIZED
let pixelDistance=depth*1000.0;
#else
let pixelDistance: f32=(uniforms.cameraMinMaxZ.x+uniforms.cameraMinMaxZ.y*depth)*1000.0; 
#endif
#define CUSTOM_COC_PIXELDISTANCE
var coc: f32=abs(uniforms.cocPrecalculation*((uniforms.focusDistance-pixelDistance)/pixelDistance));coc=clamp(coc,0.0,1.0);fragmentOutputs.color= vec4f(coc,coc,coc,1.0);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["circleOfConfusionPixelShaderWGSL",0,{name:t,shader:i}])},16773,e=>{"use strict";var r=e.i(33967);let t="circleOfConfusionPixelShader",i=`uniform sampler2D depthSampler;varying vec2 vUV;
#ifndef COC_DEPTH_NOT_NORMALIZED
uniform vec2 cameraMinMaxZ;
#endif
uniform float focusDistance;uniform float cocPrecalculation;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float depth=texture2D(depthSampler,vUV).r;
#define CUSTOM_COC_DEPTH
#ifdef COC_DEPTH_NOT_NORMALIZED
float pixelDistance=depth*1000.0;
#else
float pixelDistance=(cameraMinMaxZ.x+cameraMinMaxZ.y*depth)*1000.0; 
#endif
#define CUSTOM_COC_PIXELDISTANCE
float coc=abs(cocPrecalculation*((focusDistance-pixelDistance)/pixelDistance));coc=clamp(coc,0.0,1.0);gl_FragColor=vec4(coc,coc,coc,1.0);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["circleOfConfusionPixelShader",0,{name:t,shader:i}])},85439,e=>{"use strict";var r=e.i(33967);let t="sharpenPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform vec2 sharpnessAmounts;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 onePixel=vec2(1.0,1.0)/screenSize;vec4 color=texture2D(textureSampler,vUV);vec4 edgeDetection=texture2D(textureSampler,vUV+onePixel*vec2(0,-1)) +
texture2D(textureSampler,vUV+onePixel*vec2(-1,0)) +
texture2D(textureSampler,vUV+onePixel*vec2(1,0)) +
texture2D(textureSampler,vUV+onePixel*vec2(0,1)) -
color*4.0;gl_FragColor=max(vec4(color.rgb*sharpnessAmounts.y,color.a)-(sharpnessAmounts.x*vec4(edgeDetection.rgb,0)),0.);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["sharpenPixelShader",0,{name:t,shader:i}])},33334,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(26230),e.i(18178),e.i(24137),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754),e.i(7025),e.i(3449);let t="outlineVertexShader",i=`attribute vec3 position;attribute vec3 normal;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform float offset;
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef ALPHATEST
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
vec3 offsetPosition=positionUpdated+(normalUpdated*offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(offsetPosition,1.0);gl_Position=viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["outlineVertexShader",0,{name:t,shader:i}])},17862,e=>{"use strict";var r=e.i(33967);e.i(18178),e.i(22752);let t="greasedLineVertexShader",i=`precision highp float;
#include<instancesDeclaration>
attribute float grl_widths;attribute vec3 grl_offsets;attribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;varying float grlCounters;varying float grlColorPointer;
#ifdef GREASED_LINE_CAMERA_FACING
attribute vec4 grl_nextAndCounters;attribute vec4 grl_previousAndSide;uniform vec2 grlResolution;uniform float grlAspect;uniform float grlWidth;uniform float grlSizeAttenuation;vec2 grlFix( vec4 i,float aspect ) {vec2 res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute vec3 grl_slopes;attribute float grl_counters;
#endif
void main() {
#include<instancesVertex>
grlColorPointer=grl_colorPointers;mat4 grlMatrix=viewProjection*finalWorld ;
#ifdef GREASED_LINE_CAMERA_FACING
float grlBaseWidth=grlWidth;vec3 grlPrevious=grl_previousAndSide.xyz;float grlSide=grl_previousAndSide.w;vec3 grlNext=grl_nextAndCounters.xyz;grlCounters=grl_nextAndCounters.w;float grlWidth=grlBaseWidth*grl_widths;vec3 positionUpdated=position+grl_offsets;vec3 worldDir=normalize(grlNext-grlPrevious);vec3 nearPosition=positionUpdated+(worldDir*0.001);vec4 grlFinalPosition=grlMatrix*vec4( positionUpdated ,1.0);vec4 screenNearPos=grlMatrix*vec4(nearPosition,1.0);vec2 grlLinePosition=grlFix(grlFinalPosition,grlAspect);vec2 grlLineNearPosition=grlFix(screenNearPos,grlAspect);vec2 grlDir=normalize(grlLineNearPosition-grlLinePosition);vec4 grlNormal=vec4( -grlDir.y,grlDir.x,0.,1. );
#ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM
grlNormal.xy*=-.5*grlWidth;
#else
grlNormal.xy*=.5*grlWidth;
#endif
grlNormal*=projection;if (grlSizeAttenuation==1.) {grlNormal.xy*=grlFinalPosition.w;grlNormal.xy/=( vec4( grlResolution,0.,1. )*projection ).xy;}
grlFinalPosition.xy+=grlNormal.xy*grlSide;gl_Position=grlFinalPosition;
#else
grlCounters=grl_counters;vec4 grlFinalPosition=grlMatrix*vec4( (position+grl_offsets)+grl_slopes*grl_widths ,1.0 ) ;gl_Position=grlFinalPosition;
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["greasedLineVertexShader",0,{name:t,shader:i}])},54656,e=>{"use strict";var r=e.i(33967);e.i(13851),e.i(28248),e.i(11364);let t="glowMapGenerationPixelShader",i=`#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)
#include<helperFunctions>
#endif
#ifdef DIFFUSE
varying vec2 vUVDiffuse;uniform sampler2D diffuseSampler;
#endif
#ifdef OPACITY
varying vec2 vUVOpacity;uniform sampler2D opacitySampler;uniform float opacityIntensity;
#endif
#ifdef EMISSIVE
varying vec2 vUVEmissive;uniform sampler2D emissiveSampler;
#endif
#ifdef VERTEXALPHA
varying vec4 vColor;
#endif
uniform vec4 glowColor;uniform float glowIntensity;
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
vec4 finalColor=glowColor;
#ifdef DIFFUSE
vec4 albedoTexture=texture2D(diffuseSampler,vUVDiffuse);
#ifdef DIFFUSE_ISLINEAR
albedoTexture=toGammaSpace(albedoTexture);
#endif
#ifdef GLOW
finalColor.a*=albedoTexture.a;
#endif
#ifdef HIGHLIGHT
finalColor.a=albedoTexture.a;
#endif
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vUVOpacity);
#ifdef OPACITYRGB
finalColor.a*=getLuminance(opacityMap.rgb);
#else
finalColor.a*=opacityMap.a;
#endif
finalColor.a*=opacityIntensity;
#endif
#ifdef VERTEXALPHA
finalColor.a*=vColor.a;
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE)
discard;
#endif
#ifdef EMISSIVE
vec4 emissive=texture2D(emissiveSampler,vUVEmissive);
#ifdef EMISSIVE_ISLINEAR
emissive=toGammaSpace(emissive);
#endif
gl_FragColor=emissive*finalColor*glowIntensity;
#else
gl_FragColor=finalColor*glowIntensity;
#endif
#ifdef HIGHLIGHT
gl_FragColor.a=glowColor.a;
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["glowMapGenerationPixelShader",0,{name:t,shader:i}])},70250,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererFinaliserPixelShader",i=`#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var maskTextureSamplerSampler: sampler;var maskTextureSampler: texture_2d<f32>;uniform textureSize: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var mask: vec4f=textureSample(maskTextureSampler,maskTextureSamplerSampler,input.vUV).rgba;if (mask.r>0.5) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);} else {var texelSize: vec2f=4.0/uniforms.textureSize;var uv_p01: vec2f=input.vUV+ vec2f(-1.0,0.0)*texelSize;var uv_p21: vec2f=input.vUV+ vec2f(1.0,0.0)*texelSize;var uv_p10: vec2f=input.vUV+ vec2f(0.0,-1.0)*texelSize;var uv_p12: vec2f=input.vUV+ vec2f(0.0,1.0)*texelSize;var mask_p01: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p01).r;var mask_p21: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p21).r;var mask_p10: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p10).r;var mask_p12: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p12).r;var col: vec4f= vec4f(0.0,0.0,0.0,0.0);var total_weight: f32=0.0;if (mask_p01>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p01);total_weight+=1.0;}
if (mask_p21>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p21);total_weight+=1.0;}
if (mask_p10>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p10);total_weight+=1.0;}
if (mask_p12>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p12);total_weight+=1.0;}
if (total_weight>0.0) {fragmentOutputs.color=col/total_weight;} else {fragmentOutputs.color=col;}}}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["meshUVSpaceRendererFinaliserPixelShaderWGSL",0,{name:t,shader:i}])},70599,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingStandardBlurPixelShader",i=`uniform sampler2D textureSampler;uniform int filterSize;uniform vec2 blurDir;varying vec2 vUV;void main(void) {vec4 s=textureLod(textureSampler,vUV,0.);if (s.r==0.) {glFragColor=vec4(0.,0.,0.,1.);return;}
float sigma=float(filterSize)/3.0;float twoSigma2=2.0*sigma*sigma;vec4 sum=vec4(0.);float wsum=0.;for (int x=-filterSize; x<=filterSize; ++x) {vec2 coords=vec2(x);vec4 sampl=textureLod(textureSampler,vUV+coords*blurDir,0.);float w=exp(-coords.x*coords.x/twoSigma2);sum+=sampl*w;wsum+=w;}
sum/=wsum;glFragColor=vec4(sum.rgb,1.);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingStandardBlurPixelShader",0,{name:t,shader:i}])},5290,e=>{"use strict";var r=e.i(61724),t=e.i(22969),i=e.i(99839);class a extends t.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.count=this.registerDataOutput("count",r.RichTypeNumber),this.reset=this._registerSignalInput("reset")}_execute(e,r){if(r===this.reset){e._setExecutionVariable(this,"count",0),this.count.setValue(0,e);return}let t=e._getExecutionVariable(this,"count",0)+1;e._setExecutionVariable(this,"count",t),this.count.setValue(t,e),this.out._activateSignal(e)}getClassName(){return"FlowGraphCallCounterBlock"}}(0,i.RegisterClass)("FlowGraphCallCounterBlock",a),e.s(["FlowGraphCallCounterBlock",0,a])},47143,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(27104),e.i(94932),e.i(51597);let t="outlinePixelShader",i=`uniform color: vec4f;
#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV).a<0.4) {discard;}
#endif
#include<logDepthFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["outlinePixelShaderWGSL",0,{name:t,shader:i}])},92751,e=>{"use strict";var r=e.i(33967);let t="colorCorrectionPixelShader",i=`uniform sampler2D textureSampler; 
uniform sampler2D colorTable; 
varying vec2 vUV;const float SLICE_COUNT=16.0; 
#define inline
vec4 sampleAs3DTexture(sampler2D textureSampler,vec3 uv,float width) {float sliceSize=1.0/width; 
float slicePixelSize=sliceSize/width; 
float sliceInnerSize=slicePixelSize*(width-1.0); 
float zSlice0=min(floor(uv.z*width),width-1.0);float zSlice1=min(zSlice0+1.0,width-1.0);float xOffset=slicePixelSize*0.5+uv.x*sliceInnerSize;float s0=xOffset+(zSlice0*sliceSize);float s1=xOffset+(zSlice1*sliceSize);vec4 slice0Color=texture2D(textureSampler,vec2(s0,uv.y));vec4 slice1Color=texture2D(textureSampler,vec2(s1,uv.y));float zOffset=mod(uv.z*width,1.0);vec4 result=mix(slice0Color,slice1Color,zOffset);return result;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 screen_color=texture2D(textureSampler,vUV);gl_FragColor=sampleAs3DTexture(colorTable,screen_color.rgb,SLICE_COUNT);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["colorCorrectionPixelShader",0,{name:t,shader:i}])},8368,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(52656),a=e.i(99839);class o extends r.FlowGraphBlock{constructor(e){super(e),this.sourceSystem=this.registerDataInput("sourceSystem",t.RichTypeAny),this.destinationSystem=this.registerDataInput("destinationSystem",t.RichTypeAny),this.inputCoordinates=this.registerDataInput("inputCoordinates",t.RichTypeVector3),this.outputCoordinates=this.registerDataOutput("outputCoordinates",t.RichTypeVector3)}_updateOutputs(e){let r=this.sourceSystem.getValue(e),t=this.destinationSystem.getValue(e),a=this.inputCoordinates.getValue(e),o=r.getWorldMatrix(),n=t.getWorldMatrix(),l=i.TmpVectors.Matrix[0].copyFrom(n);l.invert();let s=i.TmpVectors.Matrix[1];l.multiplyToRef(o,s);let f=this.outputCoordinates.getValue(e);i.Vector3.TransformCoordinatesToRef(a,s,f)}getClassName(){return"FlowGraphTransformCoordinatesSystemBlock"}}(0,a.RegisterClass)("FlowGraphTransformCoordinatesSystemBlock",o),e.s(["FlowGraphTransformCoordinatesSystemBlock",0,o])},17186,e=>{"use strict";var r=e.i(61724),t=e.i(22969),i=e.i(99839);class a extends t.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.reset=this._registerSignalInput("reset"),this.duration=this.registerDataInput("duration",r.RichTypeNumber),this.lastRemainingTime=this.registerDataOutput("lastRemainingTime",r.RichTypeNumber,NaN)}_execute(e,r){if(r===this.reset){this.lastRemainingTime.setValue(NaN,e),e._setExecutionVariable(this,"lastRemainingTime",NaN),e._setExecutionVariable(this,"timestamp",0);return}let t=this.duration.getValue(e);if(t<=0||isNaN(t)||!isFinite(t))return this._reportError(e,"Invalid duration in Throttle block");let i=e._getExecutionVariable(this,"lastRemainingTime",NaN),a=Date.now();if(isNaN(i))return this.lastRemainingTime.setValue(0,e),e._setExecutionVariable(this,"lastRemainingTime",0),e._setExecutionVariable(this,"timestamp",a),this.out._activateSignal(e);{let r=a-e._getExecutionVariable(this,"timestamp",0),i=1e3*t;if(i<=r)return this.lastRemainingTime.setValue(0,e),e._setExecutionVariable(this,"lastRemainingTime",0),e._setExecutionVariable(this,"timestamp",a),this.out._activateSignal(e);{let t=i-r;this.lastRemainingTime.setValue(t/1e3,e),e._setExecutionVariable(this,"lastRemainingTime",t)}}}getClassName(){return"FlowGraphThrottleBlock"}}(0,i.RegisterClass)("FlowGraphThrottleBlock",a),e.s(["FlowGraphThrottleBlock",0,a])},5156,e=>{"use strict";var r=e.i(33967);e.i(13851),e.i(660),e.i(61404),e.i(76073);let t="hdrFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform float alphaG;uniform samplerCube inputTexture;uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=radiance(alphaG,inputTexture,direction,vFilteringInfo);gl_FragColor=vec4(color*hdrScale,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["hdrFilteringPixelShader",0,{name:t,shader:i}])},21151,e=>{"use strict";var r=e.i(33967);e.i(28248),e.i(24137),e.i(93563),e.i(11364);let t="linePixelShader",i=`#include<clipPlaneFragmentDeclaration>
uniform vec4 color;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["linePixelShader",0,{name:t,shader:i}])},43065,e=>{"use strict";var r=e.i(33967);let t="iblGenerateVoxelMipPixelShader",i=`varying vUV: vec2f;var srcMip: texture_3d<f32>;uniform layerNum: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var Coords=vec3i(2)*vec3i(vec2i(fragmentInputs.position.xy),uniforms.layerNum);var tex =
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,0,0),0).x>0.0f))
<< 0u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,0,0),0).x>0.0f))
<< 1u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,1,0),0).x>0.0f))
<< 2u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,1,0),0).x>0.0f))
<< 3u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,0,1),0).x>0.0f))
<< 4u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,0,1),0).x>0.0f))
<< 5u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,1,1),0).x>0.0f))
<< 6u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,1,1),0).x>0.0f))
<< 7u);fragmentOutputs.color=vec4f( f32(tex)/255.0f,0.0f,0.0f,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblGenerateVoxelMipPixelShaderWGSL",0,{name:t,shader:i}])},78673,e=>{"use strict";var r=e.i(33967);let t="glowMapMergePixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#ifdef EMISSIVE
uniform sampler2D textureSampler2;
#endif
uniform float offset;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#ifdef EMISSIVE
baseColor+=texture2D(textureSampler2,vUV);baseColor*=offset;
#else
baseColor.a=abs(offset-baseColor.a);
#ifdef STROKE
float alpha=smoothstep(.0,.1,baseColor.a);baseColor.a=alpha;baseColor.rgb=baseColor.rgb*alpha;
#endif
#endif
#if LDR
baseColor=clamp(baseColor,0.,1.0);
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["glowMapMergePixelShader",0,{name:t,shader:i}])},60903,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(18178),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754);let t="meshUVSpaceRendererVertexShader",i=`precision highp float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 projMatrix;varying vec2 vDecalTC;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
void main(void) {vec3 positionUpdated=position;vec3 normalUpdated=normal;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);mat3 normWorldSM=mat3(finalWorld);vec3 vNormalW;
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vNormalW=normalize(normWorldSM*normalUpdated);
#endif
vec3 normalView=normalize((projMatrix*vec4(vNormalW,0.0)).xyz);vec3 decalTC=(projMatrix*worldPos).xyz;vDecalTC=decalTC.xy;gl_Position=vec4(uv*2.0-1.0,normalView.z>0.0 ? 2. : decalTC.z,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["meshUVSpaceRendererVertexShader",0,{name:t,shader:i}])},34875,e=>{"use strict";var r=e.i(33967);let t="depthOfFieldMergePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;var blurStep0Sampler: sampler;var blurStep0: texture_2d<f32>;
#if BLUR_LEVEL>0
var blurStep1Sampler: sampler;var blurStep1: texture_2d<f32>;
#endif
#if BLUR_LEVEL>1
var blurStep2Sampler: sampler;var blurStep2: texture_2d<f32>;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coc: f32=textureSampleLevel(circleOfConfusionSampler,circleOfConfusionSamplerSampler,input.vUV,0.0).r;
#if BLUR_LEVEL==0
var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred0,coc);
#endif
#if BLUR_LEVEL==1
if(coc<0.5){var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred1,coc/0.5);}else{var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred1,blurred0,(coc-0.5)/0.5);}
#endif
#if BLUR_LEVEL==2
if(coc<0.33){var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred2: vec4f=textureSampleLevel(blurStep2,blurStep2Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred2,coc/0.33);}else if(coc<0.66){var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);var blurred2: vec4f=textureSampleLevel(blurStep2,blurStep2Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred2,blurred1,(coc-0.33)/0.33);}else{var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred1,blurred0,(coc-0.66)/0.34);}
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["depthOfFieldMergePixelShaderWGSL",0,{name:t,shader:i}])},97554,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(24732),e.i(76066),e.i(66911),e.i(94932),e.i(81303);let t="geometryPixelShader",i=`#ifdef BUMP
varying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;varying vNormalW: vec3f;
#else
varying vNormalV: vec3f;
#endif
varying vViewPos: vec4f;
#if defined(POSITION) || defined(BUMP)
varying vPositionW: vec3f;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#ifdef NEED_UV
varying vUV: vec2f;
#endif
#ifdef BUMP
uniform vBumpInfos: vec3f;uniform vTangentSpaceParams: vec2f;
#endif
#if defined(REFLECTIVITY)
#if defined(ORMTEXTURE) || defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;varying vReflectivityUV: vec2f;
#endif
#ifdef ALBEDOTEXTURE
varying vAlbedoUV: vec2f;var albedoSamplerSampler: sampler;var albedoSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIVITYCOLOR
uniform reflectivityColor: vec3f;
#endif
#ifdef ALBEDOCOLOR
uniform albedoColor: vec3f;
#endif
#ifdef METALLIC
uniform metallic: f32;
#endif
#if defined(ROUGHNESS) || defined(GLOSSINESS)
uniform glossiness: f32;
#endif
#endif
#if defined(ALPHATEST) && defined(NEED_UV)
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
var normalOutput: vec3f;
#ifdef BUMP
var normalW: vec3f=normalize(input.vNormalW);
#include<bumpFragment>
#ifdef NORMAL_WORLDSPACE
normalOutput=normalW;
#else
normalOutput=normalize( (mat4x4f(input.vWorldView0,input.vWorldView1,input.vWorldView2,input.vWorldView3)* vec4f(normalW,0.0)).xyz);
#endif
#else
normalOutput=normalize(input.vNormalV);
#endif
#ifdef ENCODE_NORMAL
normalOutput=normalOutput*0.5+0.5;
#endif
var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef DEPTH
fragData[DEPTH_INDEX]=vec4f(input.vViewPos.z/input.vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef NORMAL
fragData[NORMAL_INDEX]=vec4f(normalOutput,1.0);
#endif
#ifdef SCREENSPACE_DEPTH
fragData[SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,1.0);
#endif
#ifdef POSITION
fragData[POSITION_INDEX]= vec4f(input.vPositionW,1.0);
#endif
#ifdef VELOCITY
var a: vec2f=(input.vCurrentPosition.xy/input.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(input.vPreviousPosition.xy/input.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[VELOCITY_INDEX]= vec4f(velocity,0.0,1.0);
#endif
#ifdef VELOCITY_LINEAR
var velocity : vec2f=vec2f(0.5)*((input.vPreviousPosition.xy /
input.vPreviousPosition.w) -
(input.vCurrentPosition.xy /
input.vCurrentPosition.w));fragData[VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
var reflectivity: vec4f= vec4f(0.0,0.0,0.0,1.0);
#ifdef METALLICWORKFLOW
var metal: f32=1.0;var roughness: f32=1.0;
#ifdef ORMTEXTURE
metal*=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV).b;roughness*=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV).g;
#endif
#ifdef METALLIC
metal*=uniforms.metallic;
#endif
#ifdef ROUGHNESS
roughness*=(1.0-uniforms.glossiness); 
#endif
reflectivity=vec4f(reflectivity.rgb,reflectivity.a-roughness);var color: vec3f= vec3f(1.0);
#ifdef ALBEDOTEXTURE
color=textureSample(albedoSampler,albedoSamplerSampler,input.vAlbedoUV).rgb;
#ifdef GAMMAALBEDO
color=toLinearSpaceVec4(color);
#endif
#endif
#ifdef ALBEDOCOLOR
color*=uniforms.albedoColor.xyz;
#endif
reflectivity=vec4f(mix( vec3f(0.04),color,metal),reflectivity.a);
#else
#if defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
reflectivity=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV);
#ifdef GAMMAREFLECTIVITYTEXTURE
reflectivity=vec4f(toLinearSpaceVec3(reflectivity.rgb),reflectivity.a);
#endif
#else 
#ifdef REFLECTIVITYCOLOR
reflectivity=vec4f(toLinearSpaceVec3(uniforms.reflectivityColor.xyz),1.0);
#endif
#endif
#ifdef GLOSSINESSS
reflectivity=vec4f(reflectivity.rgb,reflectivity.a*glossiness); 
#endif
#endif
fragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["geometryPixelShaderWGSL",0,{name:t,shader:i}])},13750,e=>{"use strict";var r=e.i(33967);e.i(28248);let t="mrtFragmentDeclaration",i=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(50862),e.i(79213),e.i(13851),e.i(11364),e.i(99354);let a="geometryPixelShader",o=`#extension GL_EXT_draw_buffers : require
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
#ifdef BUMP
varying mat4 vWorldView;varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#ifdef NEED_UV
varying vec2 vUV;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#if defined(REFLECTIVITY)
#if defined(ORMTEXTURE) || defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
uniform sampler2D reflectivitySampler;varying vec2 vReflectivityUV;
#endif
#ifdef ALBEDOTEXTURE
varying vec2 vAlbedoUV;uniform sampler2D albedoSampler;
#endif
#ifdef REFLECTIVITYCOLOR
uniform vec3 reflectivityColor;
#endif
#ifdef ALBEDOCOLOR
uniform vec3 albedoColor;
#endif
#ifdef METALLIC
uniform float metallic;
#endif
#if defined(ROUGHNESS) || defined(GLOSSINESS)
uniform float glossiness;
#endif
#endif
#if defined(ALPHATEST) && defined(NEED_UV)
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#include<mrtFragmentDeclaration>[SCENE_MRT_COUNT]
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<helperFunctions>
void main() {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
vec3 normalOutput;
#ifdef BUMP
vec3 normalW=normalize(vNormalW);
#include<bumpFragment>
#ifdef NORMAL_WORLDSPACE
normalOutput=normalW;
#else
normalOutput=normalize(vec3(vWorldView*vec4(normalW,0.0)));
#endif
#else
normalOutput=normalize(vNormalV);
#endif
#ifdef ENCODE_NORMAL
normalOutput=normalOutput*0.5+0.5;
#endif
#ifdef DEPTH
gl_FragData[DEPTH_INDEX]=vec4(vViewPos.z/vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef NORMAL
gl_FragData[NORMAL_INDEX]=vec4(normalOutput,1.0);
#endif
#ifdef SCREENSPACE_DEPTH
gl_FragData[SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,1.0);
#endif
#ifdef POSITION
gl_FragData[POSITION_INDEX]=vec4(vPositionW,1.0);
#endif
#ifdef VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[VELOCITY_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef VELOCITY_LINEAR
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w) -
(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
vec4 reflectivity=vec4(0.0,0.0,0.0,1.0);
#ifdef METALLICWORKFLOW
float metal=1.0;float roughness=1.0;
#ifdef ORMTEXTURE
metal*=texture2D(reflectivitySampler,vReflectivityUV).b;roughness*=texture2D(reflectivitySampler,vReflectivityUV).g;
#endif
#ifdef METALLIC
metal*=metallic;
#endif
#ifdef ROUGHNESS
roughness*=(1.0-glossiness); 
#endif
reflectivity.a-=roughness;vec3 color=vec3(1.0);
#ifdef ALBEDOTEXTURE
color=texture2D(albedoSampler,vAlbedoUV).rgb;
#ifdef GAMMAALBEDO
color=toLinearSpace(color);
#endif
#endif
#ifdef ALBEDOCOLOR
color*=albedoColor.xyz;
#endif
reflectivity.rgb=mix(vec3(0.04),color,metal);
#else
#if defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
reflectivity=texture2D(reflectivitySampler,vReflectivityUV);
#ifdef GAMMAREFLECTIVITYTEXTURE
reflectivity.rgb=toLinearSpace(reflectivity.rgb);
#endif
#else 
#ifdef REFLECTIVITYCOLOR
reflectivity.rgb=toLinearSpace(reflectivityColor.xyz);reflectivity.a=1.0;
#endif
#endif
#ifdef GLOSSINESSS
reflectivity.a*=glossiness; 
#endif
#endif
gl_FragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
}
`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["geometryPixelShader",0,{name:a,shader:o}],13750)},51715,e=>{"use strict";var r=e.i(33967);let t="screenSpaceRayTrace",i=`float distanceSquared(vec2 a,vec2 b) { a-=b; return dot(a,a); }
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
float linearizeDepth(float depth,float near,float far) {
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
return -(near*far)/(far-depth*(far-near));
#else
return (near*far)/(far-depth*(far-near));
#endif
}
#endif
/**
param csOrigin Camera-space ray origin,which must be 
within the view volume and must have z>0.01 and project within the valid screen rectangle
param csDirection Unit length camera-space ray direction
param projectToPixelMatrix A projection matrix that maps to **pixel** coordinates 
(**not** [-1,+1] normalized device coordinates).
param csZBuffer The camera-space Z buffer
param csZBufferSize Dimensions of csZBuffer
param csZThickness Camera space csZThickness to ascribe to each pixel in the depth buffer
param nearPlaneZ Positive number. Doesn't have to be THE actual near plane,just a reasonable value
for clipping rays headed towards the camera
param stride Step in horizontal or vertical pixels between samples. This is a float
because integer math is slow on GPUs,but should be set to an integer>=1
param jitterFraction Number between 0 and 1 for how far to bump the ray in stride units
to conceal banding artifacts,plus the stride ray offset.
param maxSteps Maximum number of iterations. Higher gives better images but may be slow
param maxRayTraceDistance Maximum camera-space distance to trace before returning a miss
param selfCollisionNumSkip Number of steps to skip at start when raytracing to avoid self collisions.
1 is a reasonable value,depending on the scene you may need to set this value to 2
param hitPixel Pixel coordinates of the first intersection with the scene
param numIterations number of iterations performed
param csHitPoint Camera space location of the ray hit
*/
#define inline
bool traceScreenSpaceRay1(
vec3 csOrigin,
vec3 csDirection,
mat4 projectToPixelMatrix,
sampler2D csZBuffer,
vec2 csZBufferSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
sampler2D csZBackBuffer,
float csZBackSizeFactor,
#endif
float csZThickness,
float nearPlaneZ,
float farPlaneZ,
float stride,
float jitterFraction,
float maxSteps,
float maxRayTraceDistance,
float selfCollisionNumSkip,
out vec2 startPixel,
out vec2 hitPixel,
out vec3 csHitPoint,
out float numIterations
#ifdef SSRAYTRACE_DEBUG
,out vec3 debugColor
#endif
)
{
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
float rayLength=(csOrigin.z+csDirection.z*maxRayTraceDistance)>-nearPlaneZ ? (-nearPlaneZ-csOrigin.z)/csDirection.z : maxRayTraceDistance;
#else
float rayLength=(csOrigin.z+csDirection.z*maxRayTraceDistance)<nearPlaneZ ? (nearPlaneZ-csOrigin.z)/csDirection.z : maxRayTraceDistance;
#endif
vec3 csEndPoint=csOrigin+csDirection*rayLength;hitPixel=vec2(-1.0,-1.0);vec4 H0=projectToPixelMatrix*vec4(csOrigin,1.0);vec4 H1=projectToPixelMatrix*vec4(csEndPoint,1.0);float k0=1.0/H0.w;float k1=1.0/H1.w;vec3 Q0=csOrigin*k0;vec3 Q1=csEndPoint*k1;vec2 P0=H0.xy*k0;vec2 P1=H1.xy*k1;
#ifdef SSRAYTRACE_CLIP_TO_FRUSTUM
float xMax=csZBufferSize.x-0.5,xMin=0.5,yMax=csZBufferSize.y-0.5,yMin=0.5;float alpha=0.0;if ((P1.y>yMax) || (P1.y<yMin)) {alpha=(P1.y-((P1.y>yMax) ? yMax : yMin))/(P1.y-P0.y);}
if ((P1.x>xMax) || (P1.x<xMin)) {alpha=max(alpha,(P1.x-((P1.x>xMax) ? xMax : xMin))/(P1.x-P0.x));}
P1=mix(P1,P0,alpha); k1=mix(k1,k0,alpha); Q1=mix(Q1,Q0,alpha);
#endif
P1+=vec2((distanceSquared(P0,P1)<0.0001) ? 0.01 : 0.0);vec2 delta=P1-P0;bool permute=false;if (abs(delta.x)<abs(delta.y)) { 
permute=true;delta=delta.yx;P0=P0.yx;P1=P1.yx; }
float stepDirection=sign(delta.x);float invdx=stepDirection/delta.x;vec2 dP=vec2(stepDirection,delta.y*invdx);vec3 dQ=(Q1-Q0)*invdx;float dk=(k1-k0)*invdx;float zMin=min(csEndPoint.z,csOrigin.z);float zMax=max(csEndPoint.z,csOrigin.z);dP*=stride; dQ*=stride; dk*=stride;P0+=dP*jitterFraction; Q0+=dQ*jitterFraction; k0+=dk*jitterFraction;vec4 pqk=vec4(P0,Q0.z,k0);vec4 dPQK=vec4(dP,dQ.z,dk);startPixel=permute ? P0.yx : P0.xy;float prevZMaxEstimate=csOrigin.z;float rayZMin=prevZMaxEstimate,rayZMax=prevZMaxEstimate;float sceneZMax=rayZMax+1e4;float end=P1.x*stepDirection;bool hit=false;float stepCount;for (stepCount=0.0;stepCount<=selfCollisionNumSkip ||
(pqk.x*stepDirection)<=end &&
stepCount<maxSteps &&
!hit &&
sceneZMax != 0.0; 
pqk+=dPQK,++stepCount)
{hitPixel=permute ? pqk.yx : pqk.xy;rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;if (rayZMin>rayZMax) { 
float t=rayZMin; rayZMin=rayZMax; rayZMax=t;}
sceneZMax=texelFetch(csZBuffer,ivec2(hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
float sceneBackZ=texelFetch(csZBackBuffer,ivec2(hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMax>=sceneBackZ-csZThickness) && (rayZMin<=sceneZMax);
#else
hit=(rayZMax>=sceneZMax-csZThickness) && (rayZMin<=sceneZMax);
#endif
#else
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
float sceneBackZ=texelFetch(csZBackBuffer,ivec2(hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMin<=sceneBackZ+csZThickness) && (rayZMax>=sceneZMax) && (sceneZMax != 0.0);
#else
hit=(rayZMin<=sceneZMax+csZThickness) && (rayZMax>=sceneZMax);
#endif
#endif
}
pqk-=dPQK;stepCount-=1.0;if (((pqk.x+dPQK.x)*stepDirection)>end || (stepCount+1.0)>=maxSteps || sceneZMax==0.0) {hit=false;}
#ifdef SSRAYTRACE_ENABLE_REFINEMENT
if (stride>1.0 && hit) {pqk-=dPQK;stepCount-=1.0;float invStride=1.0/stride;dPQK*=invStride;float refinementStepCount=0.0;prevZMaxEstimate=pqk.z/pqk.w;rayZMax=prevZMaxEstimate;sceneZMax=rayZMax+1e7;for (;refinementStepCount<=1.0 ||
(refinementStepCount<=stride*1.4) &&
(rayZMax<sceneZMax) && (sceneZMax != 0.0);pqk+=dPQK,refinementStepCount+=1.0)
{rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;rayZMax=max(rayZMax,rayZMin);hitPixel=permute ? pqk.yx : pqk.xy;sceneZMax=texelFetch(csZBuffer,ivec2(hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
}
pqk-=dPQK;refinementStepCount-=1.0;stepCount+=refinementStepCount/stride;}
#endif
Q0.xy+=dQ.xy*stepCount;Q0.z=pqk.z;csHitPoint=Q0/pqk.w;numIterations=stepCount+1.0;
#ifdef SSRAYTRACE_DEBUG
if (((pqk.x+dPQK.x)*stepDirection)>end) {debugColor=vec3(0,0,1);} else if ((stepCount+1.0)>=maxSteps) {debugColor=vec3(1,0,0);} else if (sceneZMax==0.0) {debugColor=vec3(1,1,0);} else {debugColor=vec3(0,stepCount/maxSteps,0);}
#endif
return hit;}
/**
texCoord: in the [0,1] range
depth: depth in view space (range [znear,zfar]])
*/
vec3 computeViewPosFromUVDepth(vec2 texCoord,float depth,mat4 projection,mat4 invProjectionMatrix) {vec4 ndc;ndc.xy=texCoord*2.0-1.0;
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef ORTHOGRAPHIC_CAMERA
ndc.z=-projection[2].z*depth+projection[3].z;
#else
ndc.z=-projection[2].z-projection[3].z/depth;
#endif
#else
#ifdef ORTHOGRAPHIC_CAMERA
ndc.z=projection[2].z*depth+projection[3].z;
#else
ndc.z=projection[2].z+projection[3].z/depth;
#endif
#endif
ndc.w=1.0;vec4 eyePos=invProjectionMatrix*ndc;eyePos.xyz/=eyePos.w;return eyePos.xyz;}
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s([])},27512,e=>{"use strict";var r=e.i(33967);e.i(13851),e.i(61404),e.i(51715);let t="screenSpaceReflection2BlurCombinerPixelShader",i=`uniform sampler2D textureSampler; 
uniform sampler2D mainSampler;uniform sampler2D reflectivitySampler;uniform float strength;uniform float reflectionSpecularFalloffExponent;uniform float reflectivityThreshold;varying vec2 vUV;
#include<helperFunctions>
#ifdef SSR_BLEND_WITH_FRESNEL
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
uniform mat4 projection;uniform mat4 invProjectionMatrix;
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
uniform mat4 view;
#endif
uniform sampler2D normalSampler;uniform sampler2D depthSampler;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
uniform float nearPlaneZ;uniform float farPlaneZ;
#endif
#endif
void main()
{
#ifdef SSRAYTRACE_DEBUG
gl_FragColor=texture2D(textureSampler,vUV);
#else
vec3 SSR=texture2D(textureSampler,vUV).rgb;vec4 color=texture2D(mainSampler,vUV);vec4 reflectivity=texture2D(reflectivitySampler,vUV);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=reflectivityThreshold) {gl_FragColor=color;return;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpace(color);
#endif
#ifdef SSR_BLEND_WITH_FRESNEL
vec2 texSize=vec2(textureSize(depthSampler,0));vec3 csNormal=texelFetch(normalSampler,ivec2(vUV*texSize),0).xyz;
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(view*vec4(csNormal,0.0)).xyz;
#endif
float depth=texelFetch(depthSampler,ivec2(vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,nearPlaneZ,farPlaneZ);
#endif
vec3 csPosition=computeViewPosFromUVDepth(vUV,depth,projection,invProjectionMatrix);vec3 csViewDirection=normalize(csPosition);vec3 F0=reflectivity.rgb;vec3 fresnel=fresnelSchlickGGX(max(dot(csNormal,-csViewDirection),0.0),F0,vec3(1.));vec3 reflectionMultiplier=clamp(pow(fresnel*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#else
vec3 reflectionMultiplier=clamp(pow(reflectivity.rgb*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#endif
vec3 colorMultiplier=1.0-reflectionMultiplier;vec3 finalColor=(color.rgb*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpace(finalColor);
#endif
gl_FragColor=vec4(finalColor,color.a);
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["screenSpaceReflection2BlurCombinerPixelShader",0,{name:t,shader:i}])},38632,e=>{"use strict";var r=e.i(27060);class t{constructor(){this._easingMode=t.EASINGMODE_EASEIN}setEasingMode(e){let r=Math.min(Math.max(e,0),2);this._easingMode=r}getEasingMode(){return this._easingMode}easeInCore(e){throw Error("You must implement this method")}ease(e){switch(this._easingMode){case t.EASINGMODE_EASEIN:return this.easeInCore(e);case t.EASINGMODE_EASEOUT:return 1-this.easeInCore(1-e)}return e>=.5?(1-this.easeInCore((1-e)*2))*.5+.5:.5*this.easeInCore(2*e)}}t.EASINGMODE_EASEIN=0,t.EASINGMODE_EASEOUT=1,t.EASINGMODE_EASEINOUT=2,e.s(["BackEase",0,class extends t{constructor(e=1){super(),this.amplitude=e}easeInCore(e){return Math.pow(e,3)-e*Math.max(0,this.amplitude)*Math.sin(3.141592653589793*e)}},"BezierCurveEase",0,class extends t{constructor(e=0,r=0,t=1,i=1){super(),this.x1=e,this.y1=r,this.x2=t,this.y2=i}easeInCore(e){return r.BezierCurve.Interpolate(e,this.x1,this.y1,this.x2,this.y2)}},"BounceEase",0,class extends t{constructor(e=3,r=2){super(),this.bounces=e,this.bounciness=r}easeInCore(e){let r=Math.max(0,this.bounces),t=this.bounciness;t<=1&&(t=1.001);let i=Math.pow(t,r),a=1-t,o=(1-i)/a+.5*i,n=Math.floor(Math.log(-(e*o)*(1-t)+1)/Math.log(t)),l=(1-Math.pow(t,n))/(a*o),s=(l+(1-Math.pow(t,n+1))/(a*o))*.5,f=e-s,c=s-l;return-Math.pow(1/t,r-n)/(c*c)*(f-c)*(f+c)}},"CircleEase",0,class extends t{easeInCore(e){return 1-Math.sqrt(1-(e=Math.max(0,Math.min(1,e)))*e)}},"CubicEase",0,class extends t{easeInCore(e){return e*e*e}},"EasingFunction",0,t,"ElasticEase",0,class extends t{constructor(e=3,r=3){super(),this.oscillations=e,this.springiness=r}easeInCore(e){let r=Math.max(0,this.oscillations),t=Math.max(0,this.springiness);return(0==t?e:(Math.exp(t*e)-1)/(Math.exp(t)-1))*Math.sin((6.283185307179586*r+1.5707963267948966)*e)}},"ExponentialEase",0,class extends t{constructor(e=2){super(),this.exponent=e}easeInCore(e){return this.exponent<=0?e:(Math.exp(this.exponent*e)-1)/(Math.exp(this.exponent)-1)}},"QuadraticEase",0,class extends t{easeInCore(e){return e*e}},"QuarticEase",0,class extends t{easeInCore(e){return e*e*e*e}},"QuinticEase",0,class extends t{easeInCore(e){return e*e*e*e*e}},"SineEase",0,class extends t{easeInCore(e){return 1-Math.sin(1.5707963267948966*(1-e))}}])},82609,e=>{"use strict";var r=e.i(38632),t=e.i(56363),i=e.i(61724),a=e.i(99839);class o extends t.FlowGraphBlock{constructor(e){super(e),this.config=e,this._easingFunctions={},this.mode=this.registerDataInput("mode",i.RichTypeNumber,0),this.controlPoint1=this.registerDataInput("controlPoint1",i.RichTypeVector2),this.controlPoint2=this.registerDataInput("controlPoint2",i.RichTypeVector2),this.easingFunction=this.registerDataOutput("easingFunction",i.RichTypeAny)}_updateOutputs(e){let t=this.mode.getValue(e),i=this.controlPoint1.getValue(e),a=this.controlPoint2.getValue(e);if(void 0===t)return;let o=`${t}-${i.x}-${i.y}-${a.x}-${a.y}`;if(!this._easingFunctions[o]){let e=new r.BezierCurveEase(i.x,i.y,a.x,a.y);e.setEasingMode(t),this._easingFunctions[o]=e}this.easingFunction.setValue(this._easingFunctions[o],e)}getClassName(){return"FlowGraphBezierCurveEasing"}}(0,a.RegisterClass)("FlowGraphBezierCurveEasing",o),e.s(["FlowGraphBezierCurveEasingBlock",0,o])},3872,e=>{"use strict";var r=e.i(33967);let t="ssao2PixelShader",i=`precision highp float;uniform sampler2D textureSampler;varying vec2 vUV;
#ifdef SSAO
float scales[16]=float[16](
0.1,
0.11406250000000001,
0.131640625,
0.15625,
0.187890625,
0.2265625,
0.272265625,
0.325,
0.384765625,
0.4515625,
0.525390625,
0.60625,
0.694140625,
0.7890625,
0.891015625,
1.0
);uniform float near;uniform float radius;uniform sampler2D depthSampler;uniform sampler2D randomSampler;uniform sampler2D normalSampler;uniform float randTextureTiles;uniform float samplesFactor;uniform vec3 sampleSphere[SAMPLES];uniform float totalStrength;uniform float base;uniform float xViewport;uniform float yViewport;uniform mat3 depthProjection;uniform float maxZ;uniform float minZAspect;uniform vec2 texelSize;uniform mat4 projection;void main()
{vec3 random=textureLod(randomSampler,vUV*randTextureTiles,0.0).rgb;float depth=textureLod(depthSampler,vUV,0.0).r;float depthSign=sign(depth);depth=depth*depthSign;vec3 normal=textureLod(normalSampler,vUV,0.0).rgb;float occlusion=0.0;float correctedRadius=min(radius,minZAspect*depth/near);vec3 vViewRay=vec3((vUV.x*2.0-1.0)*xViewport,(vUV.y*2.0-1.0)*yViewport,depthSign);vec3 vDepthFactor=depthProjection*vec3(1.0,1.0,depth);vec3 origin=vViewRay*vDepthFactor;vec3 rvec=random*2.0-1.0;rvec.z=0.0;float dotProduct=dot(rvec,normal);rvec=1.0-abs(dotProduct)>1e-2 ? rvec : vec3(-rvec.y,0.0,rvec.x);vec3 tangent=normalize(rvec-normal*dot(rvec,normal));vec3 bitangent=cross(normal,tangent);mat3 tbn=mat3(tangent,bitangent,normal);float difference;for (int i=0; i<SAMPLES; ++i) {vec3 samplePosition=scales[(i+int(random.x*16.0)) % 16]*tbn*sampleSphere[(i+int(random.y*16.0)) % 16];samplePosition=samplePosition*correctedRadius+origin;vec4 offset=vec4(samplePosition,1.0);offset=projection*offset;offset.xyz/=offset.w;offset.xy=offset.xy*0.5+0.5;if (offset.x<0.0 || offset.y<0.0 || offset.x>1.0 || offset.y>1.0) {continue;}
float sampleDepth=abs(textureLod(depthSampler,offset.xy,0.0).r);difference=depthSign*samplePosition.z-sampleDepth;float rangeCheck=1.0-smoothstep(correctedRadius*0.5,correctedRadius,difference);occlusion+=step(EPSILON,difference)*rangeCheck;}
occlusion=occlusion*(1.0-smoothstep(maxZ*0.75,maxZ,depth));float ao=1.0-totalStrength*occlusion*samplesFactor;float result=clamp(ao+base,0.0,1.0);gl_FragColor=vec4(vec3(result),1.0);}
#endif
#ifdef BLUR
uniform float outSize;uniform float soften;uniform float tolerance;uniform int samples;
#ifndef BLUR_BYPASS
uniform sampler2D depthSampler;
#ifdef BLUR_LEGACY
#define inline
float blur13Bilateral(sampler2D image,vec2 uv,vec2 step) {float result=0.0;vec2 off1=vec2(1.411764705882353)*step;vec2 off2=vec2(3.2941176470588234)*step;vec2 off3=vec2(5.176470588235294)*step;float compareDepth=abs(textureLod(depthSampler,uv,0.0).r);float sampleDepth;float weight;float weightSum=30.0;result+=textureLod(image,uv,0.0).r*30.0;sampleDepth=abs(textureLod(depthSampler,uv+off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureLod(image,uv+off1,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv-off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureLod(image,uv-off1,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv+off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv+off2,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv-off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv-off2,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv+off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv+off3,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv-off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv-off3,0.0).r*weight;return result/weightSum;}
#endif
#endif
void main()
{float result=0.0;
#ifdef BLUR_BYPASS
result=textureLod(textureSampler,vUV,0.0).r;
#else
#ifdef BLUR_H
vec2 step=vec2(1.0/outSize,0.0);
#else
vec2 step=vec2(0.0,1.0/outSize);
#endif
#ifdef BLUR_LEGACY
result=blur13Bilateral(textureSampler,vUV,step);
#else
float compareDepth=abs(textureLod(depthSampler,vUV,0.0).r);float weightSum=0.0;for (int i=-samples; i<samples; i+=2)
{vec2 samplePos=vUV+step*(float(i)+0.5);float sampleDepth=abs(textureLod(depthSampler,samplePos,0.0).r);float falloff=smoothstep(0.0,
float(samples),
float(samples)-abs(float(i))*soften);float minDivider=tolerance*0.5+0.003;float weight=falloff/( minDivider+abs(compareDepth-sampleDepth));result+=textureLod(textureSampler,samplePos,0.0).r*weight;weightSum+=weight;}
result/=weightSum;
#endif
#endif
gl_FragColor.rgb=vec3(result);gl_FragColor.a=1.0;}
#endif
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["ssao2PixelShader",0,{name:t,shader:i}])},54559,e=>{"use strict";var r,t,i=e.i(38632),a=e.i(56363),o=e.i(61724),n=e.i(99839);(r=t||(t={}))[r.CircleEase=0]="CircleEase",r[r.BackEase=1]="BackEase",r[r.BounceEase=2]="BounceEase",r[r.CubicEase=3]="CubicEase",r[r.ElasticEase=4]="ElasticEase",r[r.ExponentialEase=5]="ExponentialEase",r[r.PowerEase=6]="PowerEase",r[r.QuadraticEase=7]="QuadraticEase",r[r.QuarticEase=8]="QuarticEase",r[r.QuinticEase=9]="QuinticEase",r[r.SineEase=10]="SineEase",r[r.BezierCurveEase=11]="BezierCurveEase";class l extends a.FlowGraphBlock{constructor(e){super(e),this.config=e,this._easingFunctions={},this.type=this.registerDataInput("type",o.RichTypeAny,11),this.mode=this.registerDataInput("mode",o.RichTypeNumber,0),this.parameters=this.registerDataInput("parameters",o.RichTypeAny,[1,0,0,1]),this.easingFunction=this.registerDataOutput("easingFunction",o.RichTypeAny)}_updateOutputs(e){let r=this.type.getValue(e),t=this.mode.getValue(e),a=this.parameters.getValue(e);if(void 0===r||void 0===t)return;let o=`${r}-${t}-${a.join("-")}`;if(!this._easingFunctions[o]){let e=function(e,...r){switch(e){case 11:return new i.BezierCurveEase(...r);case 0:return new i.CircleEase;case 1:return new i.BackEase(...r);case 2:return new i.BounceEase(...r);case 3:return new i.CubicEase;case 4:return new i.ElasticEase(...r);case 5:return new i.ExponentialEase(...r);default:throw Error("Easing type not yet implemented")}}(r,...a);e.setEasingMode(t),this._easingFunctions[o]=e}this.easingFunction.setValue(this._easingFunctions[o],e)}getClassName(){return"FlowGraphEasingBlock"}}(0,n.RegisterClass)("FlowGraphEasingBlock",l),e.s(["FlowGraphEasingBlock",0,l])},42973,e=>{"use strict";var r=e.i(33967);let t="iblCombineVoxelGridsPixelShader",i="precision highp float;precision highp sampler3D;varying vec2 vUV;uniform sampler3D voxelXaxisSampler;uniform sampler3D voxelYaxisSampler;uniform sampler3D voxelZaxisSampler;uniform float layer;void main(void) {vec3 coordZ=vec3(vUV.x,vUV.y,layer);float voxelZ=texture(voxelZaxisSampler,coordZ).r;vec3 coordX=vec3(1.0-layer,vUV.y,vUV.x);float voxelX=texture(voxelXaxisSampler,coordX).r;vec3 coordY=vec3(layer,vUV.x,vUV.y);float voxelY=texture(voxelYaxisSampler,coordY).r;float voxel=(voxelX>0.0 || voxelY>0.0 || voxelZ>0.0) ? 1.0 : 0.0;glFragColor=vec4(vec3(voxel),1.0);}";r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblCombineVoxelGridsPixelShader",0,{name:t,shader:i}])},86370,e=>{"use strict";var r=e.i(33967);let t="boundingBoxRendererVertexShader",i=`attribute position: vec3f;uniform world: mat4x4f;uniform viewProjection: mat4x4f;
#ifdef INSTANCES
attribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef INSTANCES
var finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);
#else
var worldPos: vec4f=uniforms.world* vec4f(input.position,1.0);
#endif
vertexOutputs.position=uniforms.viewProjection*worldPos;
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["boundingBoxRendererVertexShaderWGSL",0,{name:t,shader:i}])},16671,e=>{"use strict";var r=e.i(33967);e.i(73547),e.i(66911),e.i(53444);let t="imageProcessingPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);result=vec4f(max(result.rgb,vec3f(0.)),result.a);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result=vec4f(toLinearSpaceVec3(result.rgb),result.a);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
fragmentOutputs.color=result;}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["imageProcessingPixelShaderWGSL",0,{name:t,shader:i}])},68421,e=>{"use strict";var r=e.i(33967);let t="iblVoxelSlabDebugPixelShader",i=`precision highp float;varying vec3 vNormalizedPosition;uniform float nearPlane;uniform float farPlane;uniform float stepSize;void main(void) {vec3 normPos=vNormalizedPosition.xyz;float chunkSize=stepSize*float(MAX_DRAW_BUFFERS);float numChunks=1.0/chunkSize;float positionInChunk=fract(normPos.z/chunkSize);float slab=floor(positionInChunk*float(MAX_DRAW_BUFFERS)) /
float(MAX_DRAW_BUFFERS);if (normPos.x<0.0 || normPos.y<0.0 || normPos.z<0.0 ||
normPos.x>1.0 || normPos.y>1.0 || normPos.z>1.0) {gl_FragColor=vec4(0.0,0.0,0.0,0.0);} else {gl_FragColor=vec4(slab,0.0,0.0,0.75);}}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblVoxelSlabDebugPixelShader",0,{name:t,shader:i}])},66169,e=>{"use strict";var r=e.i(33967);e.i(55098);let t="kernelBlurVertex";r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};");let i="kernelBlurVertexShader",a=`attribute vec2 position;uniform vec2 delta;varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[i]||(r.ShaderStore.ShadersStore[i]=a),e.s(["kernelBlurVertexShader",0,{name:i,shader:a}],66169)},14130,e=>{"use strict";var r=e.i(22969),t=e.i(99839);class i extends r.FlowGraphExecutionBlockWithOutSignal{constructor(e){for(const r in super(e),this.config=e,this.config.eventData)this.registerDataInput(r,this.config.eventData[r].type,this.config.eventData[r].value)}_execute(e){let r=this.config.eventId,t={};this.dataInputs.forEach(r=>{t[r.name]=r.getValue(e)}),e.configuration.coordinator.notifyCustomEvent(r,t),this.out._activateSignal(e)}getClassName(){return"FlowGraphReceiveCustomEventBlock"}}(0,t.RegisterClass)("FlowGraphReceiveCustomEventBlock",i),e.s(["FlowGraphSendCustomEventBlock",0,i])},73403,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="iblCdfyPixelShader",i=`precision highp sampler2D;precision highp samplerCube;
#include<helperFunctions>
#define PI 3.1415927
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform int iblHeight;
#ifdef IBL_USE_CUBE_MAP
float fetchCube(vec2 uv) {vec3 direction=equirectangularToCubemapDirection(uv);return sin(PI*uv.y)*dot(textureCubeLodEXT(iblSource,direction,0.0).rgb,LuminanceEncodeApprox);}
#else
float fetchPanoramic(ivec2 Coords,float envmapHeight) {return sin(PI*(float(Coords.y)+0.5)/envmapHeight) *
dot(texelFetch(iblSource,Coords,0).rgb,LuminanceEncodeApprox);}
#endif
void main(void) {ivec2 coords=ivec2(gl_FragCoord.x,gl_FragCoord.y);float cdfy=0.0;for (int y=1; y<=coords.y; y++) {
#ifdef IBL_USE_CUBE_MAP
vec2 uv=vec2(vUV.x,(float(y-1)+0.5)/float(iblHeight));cdfy+=fetchCube(uv);
#else
cdfy+=fetchPanoramic(ivec2(coords.x,y-1),float(iblHeight));
#endif
}
gl_FragColor=vec4(cdfy,0.0,0.0,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblCdfyPixelShader",0,{name:t,shader:i}])},79689,e=>{"use strict";var r=e.i(33967);let t="ssaoCombinePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var originalColorSampler: sampler;var originalColor: texture_2d<f32>;uniform viewport: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var uv: vec2f=uniforms.viewport.xy+input.vUV*uniforms.viewport.zw;var ssaoColor: vec4f=textureSample(textureSampler,textureSamplerSampler,uv);var sceneColor: vec4f=textureSample(originalColor,originalColorSampler,uv);fragmentOutputs.color=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["ssaoCombinePixelShaderWGSL",0,{name:t,shader:i}])},68617,e=>{"use strict";var r=e.i(33967);let t="screenSpaceReflection2BlurPixelShader",i=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,lod) texture2DLodEXT(s,c,lod)
#else
#define TEXTUREFUNC(s,c,bias) texture2D(s,c,bias)
#endif
uniform sampler2D textureSampler;varying vec2 vUV;uniform vec2 texelOffsetScale;const float weights[8]=float[8] (0.071303,0.131514,0.189879,0.321392,0.452906, 0.584419,0.715932,0.847445);void processSample(vec2 uv,float i,vec2 stepSize,inout vec4 accumulator,inout float denominator)
{vec2 offsetUV=stepSize*i+uv;float coefficient=weights[int(2.0-abs(i))];accumulator+=TEXTUREFUNC(textureSampler,offsetUV,0.0)*coefficient;denominator+=coefficient;}
void main()
{vec4 colorFull=TEXTUREFUNC(textureSampler,vUV,0.0);if (dot(colorFull,vec4(1.0))==0.0) {gl_FragColor=colorFull;return;}
float blurRadius=colorFull.a*255.0; 
vec2 stepSize=texelOffsetScale.xy*blurRadius;vec4 accumulator=TEXTUREFUNC(textureSampler,vUV,0.0)*0.214607;float denominator=0.214607;processSample(vUV,1.0,stepSize,accumulator,denominator);processSample(vUV,1.0*0.2,stepSize,accumulator,denominator);processSample(vUV,1.0*0.4,stepSize,accumulator,denominator);processSample(vUV,1.0*0.6,stepSize,accumulator,denominator);processSample(vUV,1.0*0.8,stepSize,accumulator,denominator);processSample(vUV,1.0*1.2,stepSize,accumulator,denominator);processSample(vUV,1.0*1.4,stepSize,accumulator,denominator);processSample(vUV,1.0*1.6,stepSize,accumulator,denominator);processSample(vUV,1.0*1.8,stepSize,accumulator,denominator);processSample(vUV,1.0*2.0,stepSize,accumulator,denominator);processSample(vUV,-1.0,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.2,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.4,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.6,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.8,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.2,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.4,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.6,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.8,stepSize,accumulator,denominator);processSample(vUV,-1.0*2.0,stepSize,accumulator,denominator);gl_FragColor=vec4(accumulator.rgb/denominator,colorFull.a);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["screenSpaceReflection2BlurPixelShader",0,{name:t,shader:i}])},4039,e=>{"use strict";var r=e.i(33967);let t="bilateralBlurQualityPixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;uniform depthThreshold: f32;uniform normalThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color= vec4f(color,1.);return fragmentOutputs;}
var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
var sigma: f32= f32(uniforms.filterSize);var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sigmaNormal: f32=uniforms.normalThreshold;var two_sigmaNormal2: f32=2.0*sigmaNormal*sigmaNormal;var sum: vec3f= vec3f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {for (var y: i32=-uniforms.filterSize; y<=uniforms.filterSize; y++) {var coords: vec2f= vec2f(f32(x),f32(y))*uniforms.blurDir;var sampleColor: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords,0.).rgb;var sampleDepth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV+coords,0.).r;var sampleNormal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV+coords,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var rDepth: f32=sampleDepth-depth;var wd: f32=exp(-rDepth*rDepth/two_sigmaDepth2);var rNormal: f32=abs(sampleNormal.x-normal.x)+abs(sampleNormal.y-normal.y)+abs(sampleNormal.z-normal.z);var wn: f32=exp(-rNormal*rNormal/two_sigmaNormal2);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}}
fragmentOutputs.color= vec4f(sum/wsum,1.);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["bilateralBlurQualityPixelShaderWGSL",0,{name:t,shader:i}])},113,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererMaskerVertexShader",i=`attribute uv: vec2f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position= vec4f( vec2f(input.uv.x,input.uv.y)*2.0-1.0,0.,1.0);vertexOutputs.vUV=input.uv;}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["meshUVSpaceRendererMaskerVertexShaderWGSL",0,{name:t,shader:i}])},11274,e=>{"use strict";var r=e.i(33967);let t="oitBackBlendPixelShader",i=`precision highp float;uniform sampler2D uBackColor;void main() {glFragColor=texelFetch(uBackColor,ivec2(gl_FragCoord.xy),0);if (glFragColor.a==0.0) { 
discard;}}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["oitBackBlendPixelShader",0,{name:t,shader:i}])},46664,e=>{"use strict";var r=e.i(33967);let t="lensFlareVertexShader",i=`attribute vec2 position;uniform mat4 viewportMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=viewportMatrix*vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["lensFlareVertexShader",0,{name:t,shader:i}])},46033,e=>{"use strict";var r=e.i(33967);let t="shadowMapFragmentSoftTransparentShadow",i=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alpha) {discard;}
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["shadowMapFragmentSoftTransparentShadowWGSL",0,{name:t,shader:i}])},23371,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphBlock{constructor(e){super(e),this.userVariables=this.registerDataOutput("userVariables",t.RichTypeAny),this.executionId=this.registerDataOutput("executionId",t.RichTypeNumber)}_updateOutputs(e){this.userVariables.setValue(e.userVariables,e),this.executionId.setValue(e.executionId,e)}serialize(e){super.serialize(e)}getClassName(){return"FlowGraphContextBlock"}}(0,i.RegisterClass)("FlowGraphContextBlock",a),e.s(["FlowGraphContextBlock",0,a])},18289,e=>{"use strict";var r=e.i(33967);let t="vrDistortionCorrectionPixelShader",i=`#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform LensCenter: vec2f;uniform Scale: vec2f;uniform ScaleIn: vec2f;uniform HmdWarpParam: vec4f;fn HmdWarp(in01: vec2f)->vec2f {var theta: vec2f=(in01-uniforms.LensCenter)*uniforms.ScaleIn; 
var rSq: f32=theta.x*theta.x+theta.y*theta.y;var rvector: vec2f=theta*(uniforms.HmdWarpParam.x+uniforms.HmdWarpParam.y*rSq+uniforms.HmdWarpParam.z*rSq*rSq+uniforms.HmdWarpParam.w*rSq*rSq*rSq);return uniforms.LensCenter+uniforms.Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tc: vec2f=HmdWarp(input.vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0) {fragmentOutputs.color=vec4f(0.0,0.0,0.0,0.0);}
else{fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,tc);}}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["vrDistortionCorrectionPixelShaderWGSL",0,{name:t,shader:i}])},43194,e=>{"use strict";var r=e.i(33967);let t="iblShadowDebugPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var debugSamplerSampler: sampler;var debugSampler: texture_2d<f32>;uniform sizeParams: vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+fragmentInputs.vUV.x)*widthScale,(offsetY+fragmentInputs.vUV.y)*heightScale);var background: vec4f=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV);var debugColour: vec4f=textureSample(debugSampler,debugSamplerSampler,fragmentInputs.vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=background;} else {fragmentOutputs.color=vec4f(mix(debugColour.rgb,background.rgb,0.0),1.0);}}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblShadowDebugPixelShaderWGSL",0,{name:t,shader:i}])},24350,e=>{"use strict";var r=e.i(33967);let t="iblVoxelSlabDebugPixelShader",i=`varying vNormalizedPosition: vec3f;uniform nearPlane: f32;uniform farPlane: f32;uniform stepSize: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normPos: vec3f=input.vNormalizedPosition.xyz;var chunkSize: f32=uniforms.stepSize* f32(MAX_DRAW_BUFFERS);var numChunks: f32=1.0/chunkSize;var positionInChunk: f32=fract(normPos.z/chunkSize);var slab: f32=floor(positionInChunk* f32(MAX_DRAW_BUFFERS)) /
f32(MAX_DRAW_BUFFERS);if (normPos.x<0.0 || normPos.y<0.0 || normPos.z<0.0 ||
normPos.x>1.0 || normPos.y>1.0 || normPos.z>1.0) {fragmentOutputs.color= vec4f(0.0,0.0,0.0,0.0);} else {fragmentOutputs.color= vec4f(slab,0.0,0.0,0.75);}}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblVoxelSlabDebugPixelShaderWGSL",0,{name:t,shader:i}])},45738,e=>{"use strict";var r=e.i(64102),t=e.i(99839),i=e.i(61724);class a extends r.FlowGraphEventBlock{constructor(){super(),this.type="SceneBeforeRender",this.timeSinceStart=this.registerDataOutput("timeSinceStart",i.RichTypeNumber),this.deltaTime=this.registerDataOutput("deltaTime",i.RichTypeNumber)}_preparePendingTasks(e){}_executeEvent(e,r){return this.timeSinceStart.setValue(r.timeSinceStart,e),this.deltaTime.setValue(r.deltaTime,e),this._execute(e),!0}_cancelPendingTasks(e){}getClassName(){return"FlowGraphSceneTickEventBlock"}}(0,t.RegisterClass)("FlowGraphSceneTickEventBlock",a),e.s(["FlowGraphSceneTickEventBlock",0,a])},81217,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGridPixelShader",i=`precision highp float;layout(location=0) out highp float glFragData[MAX_DRAW_BUFFERS];varying vec3 vNormalizedPosition;uniform float nearPlane;uniform float farPlane;uniform float stepSize;void main(void) {vec3 normPos=vNormalizedPosition.xyz;if (normPos.z<nearPlane || normPos.z>farPlane) {discard;}
glFragData[0]=normPos.z<nearPlane+stepSize ? 1.0 : 0.0;glFragData[1]=normPos.z>=nearPlane+stepSize && normPos.z<nearPlane+2.0*stepSize ? 1.0 : 0.0;glFragData[2]=normPos.z>=nearPlane+2.0*stepSize && normPos.z<nearPlane+3.0*stepSize ? 1.0 : 0.0;glFragData[3]=normPos.z>=nearPlane+3.0*stepSize && normPos.z<nearPlane+4.0*stepSize ? 1.0 : 0.0;
#if MAX_DRAW_BUFFERS>4
glFragData[4]=normPos.z>=nearPlane+4.0*stepSize && normPos.z<nearPlane+5.0*stepSize ? 1.0 : 0.0;glFragData[5]=normPos.z>=nearPlane+5.0*stepSize && normPos.z<nearPlane+6.0*stepSize ? 1.0 : 0.0;glFragData[6]=normPos.z>=nearPlane+6.0*stepSize && normPos.z<nearPlane+7.0*stepSize ? 1.0 : 0.0;glFragData[7]=normPos.z>=nearPlane+7.0*stepSize && normPos.z<nearPlane+8.0*stepSize ? 1.0 : 0.0;
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblVoxelGridPixelShader",0,{name:t,shader:i}])},96651,e=>{"use strict";var r=e.i(33967);e.i(13483),e.i(27104),e.i(51597),e.i(69219);let t="imageProcessingCompatibility",i=`#ifdef IMAGEPROCESSINGPOSTPROCESS
fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i);let a="spritesPixelShader",o=`uniform alphaTest: i32;varying vColor: vec4f;varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
fn uvPixelPerfect(uv: vec2f)->vec2f {var res: vec2f= vec2f(textureDimensions(diffuseSampler,0));var uvTemp=uv*res;var seam: vec2f=floor(uvTemp+0.5);uvTemp=seam+clamp((uvTemp-seam)/fwidth(uvTemp),vec2f(-0.5),vec2f(0.5));return uvTemp/res;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
var uv: vec2f=uvPixelPerfect(input.vUV);
#else
var uv: vec2f=input.vUV;
#endif
var color: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,uv);var fAlphaTest: f32= f32(uniforms.alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95) {discard;}}
color*=input.vColor;
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[a]||(r.ShaderStore.ShadersStoreWGSL[a]=o),e.s(["spritesPixelShaderWGSL",0,{name:a,shader:o}],96651)},45117,e=>{"use strict";var r=e.i(33967);let t="convolutionPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform kernel: array<f32,9>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var onePixel: vec2f= vec2f(1.0,1.0)/uniforms.screenSize;var colorSum: vec4f =
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,-1))*uniforms.kernel[0] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,-1))*uniforms.kernel[1] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,-1))*uniforms.kernel[2] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,0))*uniforms.kernel[3] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,0))*uniforms.kernel[4] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,0))*uniforms.kernel[5] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,1))*uniforms.kernel[6] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,1))*uniforms.kernel[7] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,1))*uniforms.kernel[8];var kernelWeight: f32 =
uniforms.kernel[0] +
uniforms.kernel[1] +
uniforms.kernel[2] +
uniforms.kernel[3] +
uniforms.kernel[4] +
uniforms.kernel[5] +
uniforms.kernel[6] +
uniforms.kernel[7] +
uniforms.kernel[8];if (kernelWeight<=0.0) {kernelWeight=1.0;}
fragmentOutputs.color= vec4f((colorSum/kernelWeight).rgb,1);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["convolutionPixelShaderWGSL",0,{name:t,shader:i}])},86325,67167,e=>{"use strict";var r=e.i(52898);function t(e){let r=0;return{id_length:e[r++],colormap_type:e[r++],image_type:e[r++],colormap_index:e[r++]|e[r++]<<8,colormap_length:e[r++]|e[r++]<<8,colormap_size:e[r++],origin:[e[r++]|e[r++]<<8,e[r++]|e[r++]<<8],width:e[r++]|e[r++]<<8,height:e[r++]|e[r++]<<8,pixel_size:e[r++],flags:e[r++]}}function i(e,i){let o,n,l,s,f,c,d,u;if(i.length<19)return void r.Logger.Error("Unable to load TGA file - Not enough data to contain header");let p=18,m=t(i);if(m.id_length+p>i.length)return void r.Logger.Error("Unable to load TGA file - Not enough data");p+=m.id_length;let v=!1,S=!1,h=!1;switch(m.image_type){case 9:v=!0;case 1:S=!0;break;case 10:v=!0;case 2:break;case 11:v=!0;case 3:h=!0}let x=m.pixel_size>>3,g=m.width*m.height*x;if(S&&(n=i.subarray(p,p+=m.colormap_length*(m.colormap_size>>3))),v){let e,r,t;o=new Uint8Array(g);let a=0,n=new Uint8Array(x);for(;p<g&&a<g;)if(r=(127&(e=i[p++]))+1,128&e){for(t=0;t<x;++t)n[t]=i[p++];for(t=0;t<r;++t)o.set(n,a+t*x);a+=x*r}else{for(r*=x,t=0;t<r;++t)o[a+t]=i[p++];a+=r}}else o=i.subarray(p,p+=S?m.width*m.height:g);switch((48&m.flags)>>4){default:case 2:l=0,f=1,u=m.width,s=0,c=1,d=m.height;break;case 0:l=0,f=1,u=m.width,s=m.height-1,c=-1,d=-1;break;case 3:l=m.width-1,f=-1,u=-1,s=0,c=1,d=m.height;break;case 1:l=m.width-1,f=-1,u=-1,s=m.height-1,c=-1,d=-1}let E=a["_getImageData"+(h?"Grey":"")+m.pixel_size+"bits"](m,n,o,s,c,d,l,f,u);e.getEngine()._uploadDataToTextureDirectly(e,E)}let a={GetTGAHeader:t,UploadContent:i,_getImageData8bits:function(e,r,t,i,a,o,n,l,s){let f=e.width,c=e.height,d,u=0,p,m,v=new Uint8Array(f*c*4);for(m=i;m!==o;m+=a)for(p=n;p!==s;p+=l,u++)d=t[u],v[(p+f*m)*4+3]=255,v[(p+f*m)*4+2]=r[3*d+0],v[(p+f*m)*4+1]=r[3*d+1],v[(p+f*m)*4+0]=r[3*d+2];return v},_getImageData16bits:function(e,r,t,i,a,o,n,l,s){let f=e.width,c=e.height,d,u=0,p,m,v=new Uint8Array(f*c*4);for(m=i;m!==o;m+=a)for(p=n;p!==s;p+=l,u+=2){let e=((31744&(d=t[u+0]+(t[u+1]<<8)))>>10)*255/31|0,r=((992&d)>>5)*255/31|0,i=(31&d)*255/31|0;v[(p+f*m)*4+0]=e,v[(p+f*m)*4+1]=r,v[(p+f*m)*4+2]=i,v[(p+f*m)*4+3]=32768&d?0:255}return v},_getImageData24bits:function(e,r,t,i,a,o,n,l,s){let f=e.width,c=e.height,d=0,u,p,m=new Uint8Array(f*c*4);for(p=i;p!==o;p+=a)for(u=n;u!==s;u+=l,d+=3)m[(u+f*p)*4+3]=255,m[(u+f*p)*4+2]=t[d+0],m[(u+f*p)*4+1]=t[d+1],m[(u+f*p)*4+0]=t[d+2];return m},_getImageData32bits:function(e,r,t,i,a,o,n,l,s){let f=e.width,c=e.height,d=0,u,p,m=new Uint8Array(f*c*4);for(p=i;p!==o;p+=a)for(u=n;u!==s;u+=l,d+=4)m[(u+f*p)*4+2]=t[d+0],m[(u+f*p)*4+1]=t[d+1],m[(u+f*p)*4+0]=t[d+2],m[(u+f*p)*4+3]=t[d+3];return m},_getImageDataGrey8bits:function(e,r,t,i,a,o,n,l,s){let f=e.width,c=e.height,d,u=0,p,m,v=new Uint8Array(f*c*4);for(m=i;m!==o;m+=a)for(p=n;p!==s;p+=l,u++)d=t[u],v[(p+f*m)*4+0]=d,v[(p+f*m)*4+1]=d,v[(p+f*m)*4+2]=d,v[(p+f*m)*4+3]=255;return v},_getImageDataGrey16bits:function(e,r,t,i,a,o,n,l,s){let f=e.width,c=e.height,d=0,u,p,m=new Uint8Array(f*c*4);for(p=i;p!==o;p+=a)for(u=n;u!==s;u+=l,d+=2)m[(u+f*p)*4+0]=t[d+0],m[(u+f*p)*4+1]=t[d+0],m[(u+f*p)*4+2]=t[d+0],m[(u+f*p)*4+3]=t[d+1];return m}};e.s(["GetTGAHeader",0,t,"UploadContent",0,i],67167),e.s(["_TGATextureLoader",0,class{constructor(){this.supportCascades=!1}loadCubeData(){throw".env not supported in Cube."}loadData(e,r,a){let o=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=t(o);a(n.width,n.height,r.generateMipMaps,!1,()=>{i(r,o)})}}],86325)},52816,59449,e=>{"use strict";var r,t,i=e.i(32170),a=e.i(61724),o=e.i(38579);(r=t||(t={}))[r.INIT=0]="INIT",r[r.STARTED=1]="STARTED",r[r.ENDED=2]="ENDED";class n{constructor(e){this.onEachCountObservable=new o.Observable,this.onTimerAbortedObservable=new o.Observable,this.onTimerEndedObservable=new o.Observable,this.onStateChangedObservable=new o.Observable,this._observer=null,this._breakOnNextTick=!1,this._tick=e=>{let r=Date.now();this._timer=r-this._startTime;let t={startTime:this._startTime,currentTime:r,deltaTime:this._timer,completeRate:this._timer/this._timeToEnd,payload:e},i=this._breakOnNextTick||this._breakCondition(t);i||this._timer>=this._timeToEnd?this._stop(t,i):this.onEachCountObservable.notifyObservers(t)},this._setState(0),this._contextObservable=e.contextObservable,this._observableParameters=e.observableParameters??{},this._breakCondition=e.breakCondition??(()=>!1),this._timeToEnd=e.timeout,e.onEnded&&this.onTimerEndedObservable.add(e.onEnded),e.onTick&&this.onEachCountObservable.add(e.onTick),e.onAborted&&this.onTimerAbortedObservable.add(e.onAborted)}set breakCondition(e){this._breakCondition=e}clearObservables(){this.onEachCountObservable.clear(),this.onTimerAbortedObservable.clear(),this.onTimerEndedObservable.clear(),this.onStateChangedObservable.clear()}start(e=this._timeToEnd){if(1===this._state)throw Error("Timer already started. Please stop it before starting again");this._timeToEnd=e,this._startTime=Date.now(),this._timer=0,this._observer=this._contextObservable.add(this._tick,this._observableParameters.mask,this._observableParameters.insertFirst,this._observableParameters.scope),this._setState(1)}stop(){1===this._state&&(this._breakOnNextTick=!0)}dispose(){this._observer&&this._contextObservable.remove(this._observer),this.clearObservables()}_setState(e){this._state=e,this.onStateChangedObservable.notifyObservers(this._state)}_stop(e,r=!1){this._contextObservable.remove(this._observer),this._setState(2),r?this.onTimerAbortedObservable.notifyObservers(e):this.onTimerEndedObservable.notifyObservers(e)}}e.s(["AdvancedTimer",0,n,"setAndStartTimer",0,function(e){let r=0,t=Date.now();e.observableParameters=e.observableParameters??{};let i=e.contextObservable.add(a=>{let o=Date.now();r=o-t;let n={startTime:t,currentTime:o,deltaTime:r,completeRate:r/e.timeout,payload:a};e.onTick&&e.onTick(n),e.breakCondition&&e.breakCondition()&&(e.contextObservable.remove(i),e.onAborted&&e.onAborted(n)),r>=e.timeout&&(e.contextObservable.remove(i),e.onEnded&&e.onEnded(n))},e.observableParameters.mask,e.observableParameters.insertFirst,e.observableParameters.scope);return i}],59449);var l=e.i(52898),s=e.i(99839);class f extends i.FlowGraphAsyncExecutionBlock{constructor(e){super(e),this.cancel=this._registerSignalInput("cancel"),this.duration=this.registerDataInput("duration",a.RichTypeNumber),this.lastDelayIndex=this.registerDataOutput("lastDelayIndex",a.RichTypeNumber,-1)}_preparePendingTasks(e){let r=this.duration.getValue(e);if(r<0||isNaN(r)||!isFinite(r))return this._reportError(e,"Invalid duration in SetDelay block");if(e._getGlobalContextVariable("activeDelays",0)>=f.MaxParallelDelayCount)return this._reportError(e,"Max parallel delays reached");let t=e._getGlobalContextVariable("lastDelayIndex",-1),i=e._getExecutionVariable(this,"pendingDelays",[]),a=new n({timeout:1e3*r,contextObservable:e.configuration.scene.onBeforeRenderObservable,onEnded:()=>this._onEnded(a,e)});a.start();let o=t+1;this.lastDelayIndex.setValue(o,e),e._setGlobalContextVariable("lastDelayIndex",o),i[o]=a,e._setExecutionVariable(this,"pendingDelays",i)}_cancelPendingTasks(e){for(let r of e._getExecutionVariable(this,"pendingDelays",[]))r?.dispose();e._deleteExecutionVariable(this,"pendingDelays"),this.lastDelayIndex.setValue(-1,e)}_execute(e,r){r===this.cancel?this._cancelPendingTasks(e):(this._preparePendingTasks(e),this.out._activateSignal(e))}getClassName(){return"FlowGraphSetDelayBlock"}_onEnded(e,r){let t=r._getExecutionVariable(this,"pendingDelays",[]),i=t.indexOf(e);-1!==i?t.splice(i,1):l.Logger.Warn("FlowGraphTimerBlock: Timer ended but was not found in the running timers list"),r._removePendingBlock(this),this.done._activateSignal(r)}}f.MaxParallelDelayCount=100,(0,s.RegisterClass)("FlowGraphSetDelayBlock",f),e.s(["FlowGraphSetDelayBlock",0,f],52816)},17392,e=>{"use strict";var r=e.i(33967);e.i(28248),e.i(71133),e.i(11364);let t="depthPixelShader",i=`#ifdef ALPHATEST
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vec4 vViewPos;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
gl_FragColor=pack(vViewPos.z);
#else
gl_FragColor=vec4(vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["depthPixelShader",0,{name:t,shader:i}])},19875,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="extractHighlightsPixelShader",i=`#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform threshold: f32;uniform exposure: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var luma: f32=dot(LuminanceEncodeApprox,fragmentOutputs.color.rgb*uniforms.exposure);fragmentOutputs.color=vec4f(step(uniforms.threshold,luma)*fragmentOutputs.color.rgb,fragmentOutputs.color.a);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["extractHighlightsPixelShaderWGSL",0,{name:t,shader:i}])},10411,e=>{"use strict";var r=e.i(33967);let t="fxaaVertexShader",i=`attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sampleCoordSW;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd);sampleCoordS=vUV+vec2( 0.0,1.0)*texelSize;sampleCoordE=vUV+vec2( 1.0,0.0)*texelSize;sampleCoordN=vUV+vec2( 0.0,-1.0)*texelSize;sampleCoordW=vUV+vec2(-1.0,0.0)*texelSize;sampleCoordNW=vUV+vec2(-1.0,-1.0)*texelSize;sampleCoordSE=vUV+vec2( 1.0,1.0)*texelSize;sampleCoordNE=vUV+vec2( 1.0,-1.0)*texelSize;sampleCoordSW=vUV+vec2(-1.0,1.0)*texelSize;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fxaaVertexShader",0,{name:t,shader:i}])},65258,e=>{"use strict";var r=e.i(33967);let t="anaglyphPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var leftSamplerSampler: sampler;var leftSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var leftFrag: vec4f=textureSample(leftSampler,leftSamplerSampler,input.vUV);leftFrag= vec4f(1.0,leftFrag.g,leftFrag.b,1.0);var rightFrag: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);rightFrag= vec4f(rightFrag.r,1.0,1.0,1.0);fragmentOutputs.color= vec4f(rightFrag.rgb*leftFrag.rgb,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["anaglyphPixelShaderWGSL",0,{name:t,shader:i}])},43614,e=>{"use strict";var r=e.i(22969),t=e.i(99839),i=e.i(61724);class a extends r.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.config=e,this.inFlows=[],this._cachedActivationState=[],this.reset=this._registerSignalInput("reset"),this.completed=this._registerSignalOutput("completed"),this.remainingInputs=this.registerDataOutput("remainingInputs",i.RichTypeNumber,this.config.inputSignalCount||0);for(let e=0;e<this.config.inputSignalCount;e++)this.inFlows.push(this._registerSignalInput(`in_${e}`));this._unregisterSignalInput("in")}_getCurrentActivationState(e){let r=this._cachedActivationState;if(r.length=0,e._hasExecutionVariable(this,"activationState")){let t=e._getExecutionVariable(this,"activationState",[]);for(let e=0;e<t.length;e++)r.push(t[e])}else for(let e=0;e<this.config.inputSignalCount;e++)r.push(!1);return r}_execute(e,r){let t=this._getCurrentActivationState(e);if(r===this.reset)for(let e=0;e<this.config.inputSignalCount;e++)t[e]=!1;else{let e=this.inFlows.indexOf(r);e>=0&&(t[e]=!0)}if(this.remainingInputs.setValue(t.filter(e=>!e).length,e),e._setExecutionVariable(this,"activationState",t.slice()),t.includes(!1))r!==this.reset&&this.out._activateSignal(e);else{this.completed._activateSignal(e);for(let e=0;e<this.config.inputSignalCount;e++)t[e]=!1}}getClassName(){return"FlowGraphWaitAllBlock"}serialize(e){super.serialize(e),e.config.inputFlows=this.config.inputSignalCount}}(0,t.RegisterClass)("FlowGraphWaitAllBlock",a),e.s(["FlowGraphWaitAllBlock",0,a])},12829,e=>{"use strict";var r=e.i(33967);e.i(55112),e.i(27104),e.i(6474);let t="spritesVertexShader",i=`attribute position: vec4f;attribute options: vec2f;attribute offsets: vec2f;attribute inverts: vec2f;attribute cellInfo: vec4f;attribute color: vec4f;uniform view: mat4x4f;uniform projection: mat4x4f;varying vUV: vec2f;varying vColor: vec4f;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var viewPos: vec3f=(uniforms.view* vec4f(input.position.xyz,1.0)).xyz; 
var cornerPos: vec2f;var angle: f32=input.position.w;var size: vec2f= vec2f(input.options.x,input.options.y);var offset: vec2f=input.offsets.xy;cornerPos= vec2f(offset.x-0.5,offset.y -0.5)*size;var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0); 
vertexOutputs.vColor=input.color;var uvOffset: vec2f= vec2f(abs(offset.x-input.inverts.x),abs(1.0-offset.y-input.inverts.y));var uvPlace: vec2f=input.cellInfo.xy;var uvSize: vec2f=input.cellInfo.zw;vertexOutputs.vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vertexOutputs.vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vertexOutputs.vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["spritesVertexShaderWGSL",0,{name:t,shader:i}])},73983,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(15906),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583);let t="pickingVertexShader",i=`attribute position: vec3f;
#if defined(INSTANCES)
attribute instanceMeshID: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(INSTANCES)
varying vMeshID: vec4f;
#endif
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#if defined(INSTANCES)
vertexOutputs.vMeshID=input.instanceMeshID;
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["pickingVertexShaderWGSL",0,{name:t,shader:i}])},17439,e=>{"use strict";var r=e.i(33967);let t="chromaticAberrationPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform chromatic_aberration: f32;uniform radialIntensity: f32;uniform direction: vec2f;uniform centerPosition: vec2f;uniform screen_width: f32;uniform screen_height: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var centered_screen_pos: vec2f= vec2f(input.vUV.x-uniforms.centerPosition.x,input.vUV.y-uniforms.centerPosition.y);var directionOfEffect: vec2f=uniforms.direction;if(directionOfEffect.x==0. && directionOfEffect.y==0.){directionOfEffect=normalize(centered_screen_pos);}
var radius2: f32=centered_screen_pos.x*centered_screen_pos.x
+ centered_screen_pos.y*centered_screen_pos.y;var radius: f32=sqrt(radius2);var ref_indices: vec3f= vec3f(-0.3,0.0,0.3);var ref_shiftX: f32=uniforms.chromatic_aberration*pow(radius,uniforms.radialIntensity)*directionOfEffect.x/uniforms.screen_width;var ref_shiftY: f32=uniforms.chromatic_aberration*pow(radius,uniforms.radialIntensity)*directionOfEffect.y/uniforms.screen_height;var ref_coords_r: vec2f=vec2f(input.vUV.x+ref_indices.r*ref_shiftX,input.vUV.y+ref_indices.r*ref_shiftY*0.5);var ref_coords_g: vec2f=vec2f(input.vUV.x+ref_indices.g*ref_shiftX,input.vUV.y+ref_indices.g*ref_shiftY*0.5);var ref_coords_b: vec2f=vec2f(input.vUV.x+ref_indices.b*ref_shiftX,input.vUV.y+ref_indices.b*ref_shiftY*0.5);var r=textureSample(textureSampler,textureSamplerSampler,ref_coords_r);var g=textureSample(textureSampler,textureSamplerSampler,ref_coords_g);var b=textureSample(textureSampler,textureSamplerSampler,ref_coords_b);var a=clamp(r.a+g.a+b.a,0.,1.);fragmentOutputs.color=vec4f(r.r,g.g,b.b,a);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["chromaticAberrationPixelShaderWGSL",0,{name:t,shader:i}])},68070,e=>{"use strict";var r=e.i(33967);let t="iblVoxelSlabDebugVertexShader",i=`attribute position: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform cameraViewMatrix: mat4x4f;uniform projection: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {var worldPosition: vec4f=(uniforms.world* vec4f(input.position,1.));vertexOutputs.position=uniforms.projection*uniforms.cameraViewMatrix*worldPosition;vertexOutputs.vNormalizedPosition=(uniforms.viewMatrix*uniforms.invWorldScale*worldPosition).rgb;vertexOutputs.vNormalizedPosition=vertexOutputs.vNormalizedPosition* vec3f(0.5)+ vec3f(0.5);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblVoxelSlabDebugVertexShaderWGSL",0,{name:t,shader:i}])},73540,e=>{"use strict";var r=e.i(33967);let t="passCubePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["passCubePixelShaderWGSL",0,{name:t,shader:i}])},95467,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGridVertexShader",i=`attribute position: vec3f;attribute normal: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.viewMatrix*uniforms.invWorldScale*uniforms.world* vec4f(input.position,1.);vertexOutputs.vNormalizedPosition=vertexOutputs.position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
vertexOutputs.position=vec4f(vertexOutputs.position.x,vertexOutputs.position.y,vertexOutputs.position.z*0.5+0.5,vertexOutputs.position.w);
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblVoxelGridVertexShaderWGSL",0,{name:t,shader:i}])},66346,e=>{"use strict";var r=e.i(33967);e.i(66911),e.i(35620),e.i(73728),e.i(55755);let t="hdrIrradianceFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;
#ifdef IBL_CDF_FILTERING
var icdfTextureSampler: sampler;var icdfTexture: texture_2d<f32>;
#endif
uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=irradiance(inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfTexture,icdfTextureSampler
#endif
);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["hdrIrradianceFilteringPixelShaderWGSL",0,{name:t,shader:i}])},23949,e=>{"use strict";var r=e.i(99839),t=e.i(22969),i=e.i(61724);class a extends t.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.delayIndex=this.registerDataInput("delayIndex",i.RichTypeNumber)}_execute(e,r){let t=this.delayIndex.getValue(e);if(t<=0||isNaN(t)||!isFinite(t))return this._reportError(e,"Invalid delay index");let i=e._getExecutionVariable(this,"pendingDelays",[])[t];i&&i.dispose(),this.out._activateSignal(e)}getClassName(){return"FlowGraphCancelDelayBlock"}}(0,r.RegisterClass)("FlowGraphCancelDelayBlock",a),e.s(["FlowGraphCancelDelayBlock",0,a])},74626,e=>{"use strict";var r=e.i(33316),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphExecutionBlock{constructor(e){super(e),this.onOn=this._registerSignalOutput("onOn"),this.onOff=this._registerSignalOutput("onOff"),this.value=this.registerDataOutput("value",t.RichTypeBoolean)}_execute(e,r){let t=e._getExecutionVariable(this,"value","boolean"==typeof this.config?.startValue&&!this.config.startValue);t=!t,e._setExecutionVariable(this,"value",t),this.value.setValue(t,e),t?this.onOn._activateSignal(e):this.onOff._activateSignal(e)}getClassName(){return"FlowGraphFlipFlopBlock"}}(0,i.RegisterClass)("FlowGraphFlipFlopBlock",a),e.s(["FlowGraphFlipFlopBlock",0,a])},30409,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleDepthPixelShader",i=`uniform projection: mat4x4f;varying uv: vec2f;varying viewPos: vec3f;varying sphereRadius: f32;
#ifdef FLUIDRENDERING_VELOCITY
varying velocityNorm: f32;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
var normal: vec3f=vec3f(normalxy,sqrt(1.0-r2));
#ifndef FLUIDRENDERING_RHS
normal.z=-normal.z;
#endif
var realViewPos: vec4f=vec4f(input.viewPos+normal*input.sphereRadius,1.0);var clipSpacePos: vec4f=uniforms.projection*realViewPos;fragmentOutputs.fragDepth=clipSpacePos.z/clipSpacePos.w;
#ifdef FLUIDRENDERING_RHS
realViewPos.z=-realViewPos.z;
#endif
#ifdef FLUIDRENDERING_VELOCITY
fragmentOutputs.color=vec4f(realViewPos.z,input.velocityNorm,0.,1.);
#else
fragmentOutputs.color=vec4f(realViewPos.z,0.,0.,1.);
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingParticleDepthPixelShaderWGSL",0,{name:t,shader:i}])},91412,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(13483),e.i(94932),e.i(69219);let t="colorPixelShader",i=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vColor: vec4f;
#else
uniform color: vec4f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
fragmentOutputs.color=input.vColor;
#else
fragmentOutputs.color=uniforms.color;
#endif
#include<fogFragment>(color,fragmentOutputs.color)
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["colorPixelShaderWGSL",0,{name:t,shader:i}])},75599,e=>{"use strict";var r=e.i(33967);let t="iblShadowAccumulationPixelShader",i=`varying vUV: vec2f;uniform accumulationParameters: vec4f;
#define remanence uniforms.accumulationParameters.x
#define resetb uniforms.accumulationParameters.y
#define sceneSize uniforms.accumulationParameters.z
var motionSampler: texture_2d<f32>;var positionSampler: texture_2d<f32>;var spatialBlurSampler : texture_2d<f32>;var oldAccumulationSamplerSampler: sampler;var oldAccumulationSampler: texture_2d<f32>;var prevPositionSamplerSampler: sampler;var prevPositionSampler: texture_2d<f32>;fn max2(v: vec2f,w: vec2f)->vec2f { 
return vec2f(max(v.x,w.x),max(v.y,w.y)); }
fn lessThan(x: vec2f,y: vec2f)->vec2<bool> {return x<y;}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var reset: bool= bool(resetb);var gbufferRes : vec2f=vec2f(textureDimensions(positionSampler,0));var gbufferPixelCoord: vec2i= vec2i(input.vUV*gbufferRes);var shadowRes : vec2f=vec2f(textureDimensions(spatialBlurSampler,0));var shadowPixelCoord: vec2i= vec2i(input.vUV*shadowRes);var LP: vec4f=textureLoad(positionSampler,gbufferPixelCoord,0);if (0.0==LP.w) {fragmentOutputs.color=vec4f(1.0,0.0,0.0,1.0);return fragmentOutputs;}
var velocityColor: vec2f=textureLoad(motionSampler,gbufferPixelCoord,0).xy;var prevCoord: vec2f=input.vUV+velocityColor;var PrevLP: vec3f=textureSampleLevel(prevPositionSampler,prevPositionSamplerSampler,prevCoord,0.0).xyz;var PrevShadows: vec4f=textureSampleLevel(oldAccumulationSampler,oldAccumulationSamplerSampler,prevCoord,0.0);var newShadows : vec3f=textureLoad(spatialBlurSampler,shadowPixelCoord,0).xyz;PrevShadows.a=select(1.0,max(PrevShadows.a/(1.0+PrevShadows.a),1.0-remanence),!reset && all(lessThan(abs(prevCoord- vec2f(0.5)), vec2f(0.5))) &&
distance(LP.xyz,PrevLP)<5e-2*sceneSize);PrevShadows=max( vec4f(0.0),PrevShadows);fragmentOutputs.color= vec4f(mix(PrevShadows.x,newShadows.x,PrevShadows.a),
mix(PrevShadows.y,newShadows.y,PrevShadows.a),
mix(PrevShadows.z,newShadows.z,PrevShadows.a),PrevShadows.a);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblShadowAccumulationPixelShaderWGSL",0,{name:t,shader:i}])},64176,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(73547),e.i(27104),e.i(66911),e.i(53444),e.i(13483),e.i(94932),e.i(51597),e.i(69219);let t="particlesPixelShader",i=`varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;var rampSamplerSampler: sampler;var rampSampler: texture_2d<f32>;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var textureColor: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV);var baseColor: vec4f=(textureColor*uniforms.textureMask+( vec4f(1.,1.,1.,1.)-uniforms.textureMask))*input.vColor;
#ifdef RAMPGRADIENT
var alpha: f32=baseColor.a;var remappedColorIndex: f32=clamp((alpha-input.remapRanges.x)/input.remapRanges.y,0.0,1.0);var rampColor: vec4f=textureSample(rampSampler,rampSamplerSampler,vec2f(1.0-remappedColorIndex,0.));baseColor=vec4f(baseColor.rgb*rampColor.rgb,baseColor.a);var finalAlpha: f32=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-input.remapRanges.z)/input.remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
var sourceAlpha: f32=input.vColor.a*textureColor.a;baseColor=vec4f(baseColor.rgb*sourceAlpha+ vec3f(1.0)*(1.0-sourceAlpha),baseColor.a);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);
#else
#ifdef IMAGEPROCESSING
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);baseColor=applyImageProcessing(baseColor);
#endif
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["particlesPixelShaderWGSL",0,{name:t,shader:i}])},63375,e=>{"use strict";var r=e.i(98825),t=e.i(61724),i=e.i(99839),a=e.i(66423);class o extends r.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeBoolean,t.RichTypeNumber,e=>+e,"FlowGraphBooleanToFloat",e)}}(0,i.RegisterClass)("FlowGraphBooleanToFloat",o);class n extends r.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeBoolean,t.RichTypeFlowGraphInteger,e=>a.FlowGraphInteger.FromValue(+e),"FlowGraphBooleanToInt",e)}}(0,i.RegisterClass)("FlowGraphBooleanToInt",n);class l extends r.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeBoolean,e=>!!e,"FlowGraphFloatToBoolean",e)}}(0,i.RegisterClass)("FlowGraphFloatToBoolean",l);class s extends r.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeBoolean,e=>!!e.value,"FlowGraphIntToBoolean",e)}}(0,i.RegisterClass)("FlowGraphIntToBoolean",s);class f extends r.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeFlowGraphInteger,t.RichTypeNumber,e=>e.value,"FlowGraphIntToFloat",e)}}(0,i.RegisterClass)("FlowGraphIntToFloat",f);class c extends r.FlowGraphUnaryOperationBlock{constructor(e){super(t.RichTypeNumber,t.RichTypeFlowGraphInteger,r=>{switch(e?.roundingMode){case"floor":return a.FlowGraphInteger.FromValue(Math.floor(r));case"ceil":return a.FlowGraphInteger.FromValue(Math.ceil(r));case"round":return a.FlowGraphInteger.FromValue(Math.round(r));default:return a.FlowGraphInteger.FromValue(r)}},"FlowGraphFloatToInt",e)}}(0,i.RegisterClass)("FlowGraphFloatToInt",c),e.s(["FlowGraphBooleanToFloat",0,o,"FlowGraphBooleanToInt",0,n,"FlowGraphFloatToBoolean",0,l,"FlowGraphFloatToInt",0,c,"FlowGraphIntToBoolean",0,s,"FlowGraphIntToFloat",0,f])},86177,e=>{"use strict";var r=e.i(33967);let t="shadowMapFragment",i=`var depthSM: f32=fragmentInputs.vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
depthSM=(fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
depthSM=clamp(depthSM,0.0,1.0);
#ifdef USE_REVERSE_DEPTHBUFFER
fragmentOutputs.fragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
fragmentOutputs.fragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,uniforms.biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
fragmentOutputs.color= vec4f(depthSM,1.0,1.0,1.0);
#else
fragmentOutputs.color=pack(depthSM);
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["shadowMapFragmentWGSL",0,{name:t,shader:i}])},91303,e=>{"use strict";var r=e.i(33967);e.i(47267);let t="bayerDitherFunctions",i=`fn bayerDither2(_P: vec2f)->f32 {return ((2.0*_P.y+_P.x+1.0)%(4.0));}
fn bayerDither4(_P: vec2f)->f32 {var P1: vec2f=((_P)%(2.0)); 
var P2: vec2f=floor(0.5*((_P)%(4.0))); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
fn bayerDither8(_P: vec2f)->f32 {var P1: vec2f=((_P)%(2.0)); 
var P2: vec2f=floor(0.5 *((_P)%(4.0))); 
var P4: vec2f=floor(0.25*((_P)%(8.0))); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i);let a="shadowMapFragmentExtraDeclaration",o=`#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform softTransparentShadowSM: vec2f;
#endif
varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
uniform lightDataSM: vec3f;varying vPositionWSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[a]||(r.ShaderStore.IncludesShadersStoreWGSL[a]=o),e.i(23393),e.i(94932),e.i(86177);let n="shadowMapPixelShader",l=`#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
var opacityMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV);var alphaFromAlphaTexture: f32=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (uniforms.softTransparentShadowSM.y==1.0) {opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE) {discard;}
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alphaFromAlphaTexture) {discard;}
#else
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x) {discard;} 
#endif
#endif
#include<shadowMapFragment>
}`;r.ShaderStore.ShadersStoreWGSL[n]||(r.ShaderStore.ShadersStoreWGSL[n]=l),e.s(["shadowMapPixelShaderWGSL",0,{name:n,shader:l}],91303)},91434,e=>{"use strict";var r=e.i(33316),t=e.i(61724),i=e.i(99839),a=e.i(59637);class o extends r.FlowGraphExecutionBlock{constructor(e){super(e),this.config=e,this.default=this._registerSignalOutput("default"),this._caseToOutputFlow=new Map,this.case=this.registerDataInput("case",t.RichTypeAny),(this.config.cases||[]).forEach(e=>{this._caseToOutputFlow.set(e,this._registerSignalOutput(`out_${e}`))})}_execute(e,r){let t,i=this.case.getValue(e);(t=(0,a.isNumeric)(i)?this._getOutputFlowForCase((0,a.getNumericValue)(i)):this._getOutputFlowForCase(i))?t._activateSignal(e):this.default._activateSignal(e)}addCase(e){this.config.cases.includes(e)||(this.config.cases.push(e),this._caseToOutputFlow.set(e,this._registerSignalOutput(`out_${e}`)))}removeCase(e){if(!this.config.cases.includes(e))return;let r=this.config.cases.indexOf(e);this.config.cases.splice(r,1),this._caseToOutputFlow.delete(e)}_getOutputFlowForCase(e){return this._caseToOutputFlow.get(e)}getClassName(){return"FlowGraphSwitchBlock"}serialize(e){super.serialize(e),e.cases=this.config.cases}}(0,i.RegisterClass)("FlowGraphSwitchBlock",o),e.s(["FlowGraphSwitchBlock",0,o])},75557,e=>{"use strict";var r=e.i(33967);let t="iblShadowGBufferDebugPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var depthSampler: sampler;var depthTexture: texture_2d<f32>;var normalSampler: sampler;var normalTexture: texture_2d<f32>;var positionSampler: sampler;var positionTexture: texture_2d<f32>;var velocitySampler: sampler;var velocityTexture: texture_2d<f32>;uniform sizeParams: vec4f;uniform maxDepth: f32;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+input.vUV.x)*widthScale,(offsetY+input.vUV.y)*heightScale);var backgroundColour: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgba;var depth: vec4f=textureSample(depthTexture,depthSampler,input.vUV);var worldNormal: vec4f=textureSample(normalTexture,normalSampler,input.vUV);var worldPosition: vec4f=textureSample(positionTexture,positionSampler,input.vUV);var velocityLinear: vec4f=textureSample(velocityTexture,velocitySampler,input.vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=backgroundColour;} else {if (uv.x<=0.25) {fragmentOutputs.color=vec4f(depth.rgb,1.0);} else if (uv.x<=0.5) {velocityLinear=vec4f(velocityLinear.r*0.5+0.5,velocityLinear.g*0.5+0.5,velocityLinear.b,velocityLinear.a);fragmentOutputs.color=vec4f(velocityLinear.rgb,1.0);} else if (uv.x<=0.75) {fragmentOutputs.color=vec4f(worldPosition.rgb,1.0);} else {fragmentOutputs.color=vec4f(worldNormal.rgb,1.0);}}}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblShadowGBufferDebugPixelShaderWGSL",0,{name:t,shader:i}])},71133,e=>{"use strict";var r=e.i(33967);let t="packingFunctions",i=`vec4 pack(float depth)
{const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);vec4 res=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.s(["packingFunctions",0,{name:t,shader:i}])},55098,e=>{"use strict";var r=e.i(33967);let t="kernelBlurVaryingDeclaration";r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]="varying vec2 sampleCoord{X};"),e.s([])},47267,e=>{"use strict";var r=e.i(33967);let t="packingFunctions",i=`fn pack(depth: f32)->vec4f
{const bit_shift: vec4f= vec4f(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const bit_mask: vec4f= vec4f(0.0,1.0/255.0,1.0/255.0,1.0/255.0);var res: vec4f=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
fn unpack(color: vec4f)->f32
{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["packingFunctionsWGSL",0,{name:t,shader:i}])},8100,e=>{"use strict";var r=e.i(33967);let t="kernelBlurVaryingDeclaration";r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]="varying sampleCoord{X}: vec2f;"),e.s([])},86790,e=>{"use strict";var r=e.i(61724),t=e.i(22969),i=e.i(99839);class a extends t.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.count=this.registerDataInput("count",r.RichTypeNumber),this.reset=this._registerSignalInput("reset"),this.currentCount=this.registerDataOutput("currentCount",r.RichTypeNumber)}_execute(e,r){if(r===this.reset)return void e._setExecutionVariable(this,"debounceCount",0);let t=this.count.getValue(e),i=e._getExecutionVariable(this,"debounceCount",0)+1;this.currentCount.setValue(i,e),e._setExecutionVariable(this,"debounceCount",i),i>=t&&(this.out._activateSignal(e),e._setExecutionVariable(this,"debounceCount",0))}getClassName(){return"FlowGraphDebounceBlock"}}(0,i.RegisterClass)("FlowGraphDebounceBlock",a),e.s(["FlowGraphDebounceBlock",0,a])},84334,e=>{"use strict";var r=e.i(33967);e.i(23393),e.i(47267),e.i(94932);let t="depthPixelShader",i=`#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
varying vDepthMetric: f32;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vViewPos: vec4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
fragmentOutputs.color=pack(input.vViewPos.z);
#else
fragmentOutputs.color= vec4f(input.vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
fragmentOutputs.color=pack(input.position.z);
#else
fragmentOutputs.color= vec4f(input.position.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
fragmentOutputs.color=pack(input.vDepthMetric);
#else
fragmentOutputs.color= vec4f(input.vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["depthPixelShaderWGSL",0,{name:t,shader:i}])},26528,e=>{"use strict";var r=e.i(33967);let t="shadowMapVertexMetric",i=`#if SM_USEDISTANCE==1
vertexOutputs.vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.position.z-=uniforms.biasAndScaleSM.x*vertexOutputs.position.w*BIASFACTOR;
#else
vertexOutputs.position.z+=uniforms.biasAndScaleSM.x*vertexOutputs.position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
vertexOutputs.zSM=vertexOutputs.position.z;vertexOutputs.position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetricSM=(-vertexOutputs.position.z+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
vertexOutputs.vDepthMetricSM=(vertexOutputs.position.z+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.s(["shadowMapVertexMetricWGSL",0,{name:t,shader:i}])},6828,e=>{"use strict";var r=e.i(33967);e.i(34282),e.i(52813),e.i(81352),e.i(34738),e.i(66911),e.i(18989),e.i(54318);let t="shadowMapVertexExtraDeclaration",i=`#if SM_NORMALBIAS==1
uniform lightDataSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
varying vPositionWSM: vec3f;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[t]||(r.ShaderStore.IncludesShadersStoreWGSL[t]=i),e.i(86463),e.i(10241),e.i(73636),e.i(79964),e.i(3813),e.i(42583);let a="shadowMapVertexNormalBias",o=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
var worldLightDirSM: vec3f=normalize(-uniforms.lightDataSM.xyz);
#else
var directionToLightSM: vec3f=uniforms.lightDataSM.xyz-worldPos.xyz;var worldLightDirSM: vec3f=normalize(directionToLightSM);
#endif
var ndlSM: f32=dot(vNormalW,worldLightDirSM);var sinNLSM: f32=sqrt(1.0-ndlSM*ndlSM);var normalBiasSM: f32=uniforms.biasAndScaleSM.y*sinNLSM;worldPos=vec4f(worldPos.xyz-vNormalW*normalBiasSM,worldPos.w);
#endif
`;r.ShaderStore.IncludesShadersStoreWGSL[a]||(r.ShaderStore.IncludesShadersStoreWGSL[a]=o),e.i(26528),e.i(50328);let n="shadowMapVertexShader",l=`attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;
#endif
#include<helperFunctions>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#ifdef NORMAL
var normalUpdated: vec3f=input.normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
var vNormalW: vec3f=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
var vNormalW: vec3f=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
vertexOutputs.position=scene.viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
}`;r.ShaderStore.ShadersStoreWGSL[n]||(r.ShaderStore.ShadersStoreWGSL[n]=l),e.s(["shadowMapVertexShaderWGSL",0,{name:n,shader:l}],6828)},17498,e=>{"use strict";var r=e.i(33967);let t="ssao2PixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef SSAO
const scales: array<f32,16>=array<f32,16>(
0.1,
0.11406250000000001,
0.131640625,
0.15625,
0.187890625,
0.2265625,
0.272265625,
0.325,
0.384765625,
0.4515625,
0.525390625,
0.60625,
0.694140625,
0.7890625,
0.891015625,
1.0
);uniform near: f32;uniform radius: f32;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;var randomSamplerSampler: sampler;var randomSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;uniform randTextureTiles: f32;uniform samplesFactor: f32;uniform sampleSphere: array<vec3f,SAMPLES>;uniform totalStrength: f32;uniform base: f32;uniform xViewport: f32;uniform yViewport: f32;uniform depthProjection: mat3x3f;uniform maxZ: f32;uniform minZAspect: f32;uniform texelSize: vec2f;uniform projection: mat4x4f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var random: vec3f=textureSampleLevel(randomSampler,randomSamplerSampler,input.vUV*uniforms.randTextureTiles,0.0).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r;var depthSign: f32=sign(depth);depth=depth*depthSign;var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.0).rgb;var occlusion: f32=0.0;var correctedRadius: f32=min(uniforms.radius,uniforms.minZAspect*depth/uniforms.near);var vViewRay: vec3f= vec3f((input.vUV.x*2.0-1.0)*uniforms.xViewport,(input.vUV.y*2.0-1.0)*uniforms.yViewport,depthSign);var vDepthFactor: vec3f=uniforms.depthProjection* vec3f(1.0,1.0,depth);var origin: vec3f=vViewRay*vDepthFactor;var rvec: vec3f=random*2.0-1.0;rvec.z=0.0;var dotProduct: f32=dot(rvec,normal);rvec=select( vec3f(-rvec.y,0.0,rvec.x),rvec,1.0-abs(dotProduct)>1e-2);var tangent: vec3f=normalize(rvec-normal*dot(rvec,normal));var bitangent: vec3f=cross(normal,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,normal);var difference: f32;for (var i: i32=0; i<SAMPLES; i++) {var samplePosition: vec3f=scales[(i+ i32(random.x*16.0)) % 16]*tbn*uniforms.sampleSphere[(i+ i32(random.y*16.0)) % 16];samplePosition=samplePosition*correctedRadius+origin;var offset: vec4f= vec4f(samplePosition,1.0);offset=uniforms.projection*offset;offset=vec4f(offset.xyz/offset.w,offset.w);offset=vec4f(offset.xy*0.5+0.5,offset.z,offset.w);if (offset.x<0.0 || offset.y<0.0 || offset.x>1.0 || offset.y>1.0) {continue;}
var sampleDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,offset.xy,0.0).r);difference=depthSign*samplePosition.z-sampleDepth;var rangeCheck: f32=1.0-smoothstep(correctedRadius*0.5,correctedRadius,difference);occlusion+=step(EPSILON,difference)*rangeCheck;}
occlusion=occlusion*(1.0-smoothstep(uniforms.maxZ*0.75,uniforms.maxZ,depth));var ao: f32=1.0-uniforms.totalStrength*occlusion*uniforms.samplesFactor;var result: f32=clamp(ao+uniforms.base,0.0,1.0);fragmentOutputs.color= vec4f( vec3f(result),1.0);}
#else
#ifdef BLUR
uniform outSize: f32;uniform soften: f32;uniform tolerance: f32;uniform samples: i32;
#ifndef BLUR_BYPASS
var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifdef BLUR_LEGACY
fn blur13Bilateral(image: texture_2d<f32>,imageSampler: sampler,uv: vec2f,step: vec2f)->f32 {var result: f32=0.0;var off1: vec2f= vec2f(1.411764705882353)*step;var off2: vec2f= vec2f(3.2941176470588234)*step;var off3: vec2f= vec2f(5.176470588235294)*step;var compareDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv,0.0).r);var sampleDepth: f32;var weight: f32;var weightSum: f32=30.0;result+=textureSampleLevel(image,imageSampler,uv,0.0).r*30.0;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureSampleLevel(image,imageSampler,uv+off1,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureSampleLevel(image,imageSampler,uv-off1,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv+off2,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv-off2,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv+off3,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv-off3,0.0).r*weight;return result/weightSum;}
#endif
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: f32=0.0;
#ifdef BLUR_BYPASS
result=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0).r;
#else
#ifdef BLUR_H
var step: vec2f= vec2f(1.0/uniforms.outSize,0.0);
#else
var step: vec2f= vec2f(0.0,1.0/uniforms.outSize);
#endif
#ifdef BLUR_LEGACY
result=blur13Bilateral(textureSampler,textureSamplerSampler,input.vUV,step);
#else
var compareDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r);var weightSum: f32=0.0;for (var i: i32=-uniforms.samples; i<uniforms.samples; i+=2)
{var samplePos: vec2f=input.vUV+step*( f32(i)+0.5);var sampleDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,samplePos,0.0).r);var falloff: f32=smoothstep(0.0,
f32(uniforms.samples),
f32(uniforms.samples)-abs( f32(i))*uniforms.soften);var minDivider: f32=uniforms.tolerance*0.5+0.003;var weight: f32=falloff/( minDivider+abs(compareDepth-sampleDepth));result+=textureSampleLevel(textureSampler,textureSamplerSampler,samplePos,0.0).r*weight;weightSum+=weight;}
result/=weightSum;
#endif
#endif
fragmentOutputs.color=vec4f(result,result,result,1.0);}
#endif
#endif
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["ssao2PixelShaderWGSL",0,{name:t,shader:i}])},12526,e=>{"use strict";var r=e.i(37029),t=e.i(4859),i=e.i(95441);class a extends r.AbstractNamedAudioNode{constructor(e,r){super(e,r,3),this._analyzer=null}get analyzer(){return this._analyzer??(this._analyzer=new i._AudioAnalyzer(this._subGraph))}get volume(){return(0,t._GetVolumeAudioProperty)(this._subGraph,"volume")}set volume(e){let r=(0,t._GetVolumeAudioSubNode)(this._subGraph);if(!r)throw Error("No volume subnode");r.volume=e}dispose(){super.dispose(),this._analyzer?.dispose(),this._analyzer=null,this._subGraph.dispose()}}e.s(["AbstractAudioBus",0,a])},61899,96444,e=>{"use strict";var r=e.i(12526);class t extends r.AbstractAudioBus{constructor(e,r){super(e,r)}}e.s(["MainAudioBus",0,t],96444);var i=e.i(24474);class a extends t{constructor(e,r){super(e,r),this._subGraph=new a._SubGraph(this)}async _init(e){if(await this._subGraph.init(e),this.engine.mainOut&&!this._connect(this.engine.mainOut))throw Error("Connect failed");this.engine._addMainBus(this)}dispose(){super.dispose(),this.engine._removeMainBus(this)}get _inNode(){return this._subGraph._inNode}get _outNode(){return this._subGraph._outNode}_connect(e){return!!super._connect(e)&&(e._inNode&&this._outNode?.connect(e._inNode),!0)}_disconnect(e){return!!super._disconnect(e)&&(e._inNode&&this._outNode?.disconnect(e._inNode),!0)}getClassName(){return"_WebAudioMainBus"}}a._SubGraph=class extends i._WebAudioBaseSubGraph{get _downstreamNodes(){return this._owner._downstreamNodes??null}},e.s(["_WebAudioMainBus",0,a],61899)},48583,e=>{"use strict";var r=e.i(33967);e.i(15906),e.i(18989),e.i(54318),e.i(79964);let t="greasedLineVertexShader",i=`#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute grl_widths: f32;
#ifdef GREASED_LINE_USE_OFFSETS
attribute grl_offsets: vec3f; 
#endif
attribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#ifdef GREASED_LINE_CAMERA_FACING
attribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute grl_slopes: vec3f;attribute grl_counters: f32;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vertexOutputs.grlColorPointer=input.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;
#ifdef GREASED_LINE_CAMERA_FACING
let grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=input.grl_previousAndSide.xyz;let grlSide: f32=input.grl_previousAndSide.w;let grlNext: vec3f=input.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=input.grl_nextAndCounters.w;let grlWidth:f32=grlBaseWidth*input.grl_widths;
#ifdef GREASED_LINE_USE_OFFSETS
var grlPositionOffset: vec3f=input.grl_offsets;
#else
var grlPositionOffset=vec3f(0.);
#endif
let positionUpdated: vec3f=vertexInputs.position+grlPositionOffset;let worldDir: vec3f=normalize(grlNext-grlPrevious);let nearPosition: vec3f=positionUpdated+(worldDir*0.001);let grlFinalPosition: vec4f=grlMatrix*vec4f(positionUpdated,1.0);let screenNearPos: vec4f=grlMatrix*vec4(nearPosition,1.0);let grlLinePosition: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlLineNearPosition: vec2f=grlFix(screenNearPos,uniforms.grlAspect);let grlDir: vec2f=normalize(grlLineNearPosition-grlLinePosition);var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;
#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
grlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;
#else
grlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;
#endif
grlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}
vertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);
#else
vertexOutputs.grlCounters=input.grl_counters;vertexOutputs.position=grlMatrix*vec4f((vertexInputs.position+input.grl_offsets)+input.grl_slopes*input.grl_widths,1.0) ;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["greasedLineVertexShaderWGSL",0,{name:t,shader:i}])},93244,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839),a=e.i(65742);class o extends r.FlowGraphBlock{constructor(e){super(e),this.config=e,this.output=this.registerDataOutput("output",(0,t.getRichTypeFromValue)(e.value))}_updateOutputs(e){this.output.setValue(this.config.value,e)}getClassName(){return"FlowGraphConstantBlock"}serialize(e={},r=a.defaultValueSerializationFunction){super.serialize(e),r("value",this.config.value,e.config)}}(0,i.RegisterClass)("FlowGraphConstantBlock",o),e.s(["FlowGraphConstantBlock",0,o])},52269,e=>{"use strict";var r=e.i(33967);let t="iblShadowGBufferDebugPixelShader",i=`#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D depthSampler;uniform sampler2D normalSampler;uniform sampler2D positionSampler;uniform sampler2D velocitySampler;uniform vec4 sizeParams;uniform float maxDepth;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 backgroundColour=texture2D(textureSampler,vUV).rgba;vec4 depth=texture2D(depthSampler,vUV);vec4 worldNormal=texture2D(normalSampler,vUV);vec4 worldPosition=texture2D(positionSampler,vUV);vec4 velocityLinear=texture2D(velocitySampler,vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=backgroundColour;} else {gl_FragColor.a=1.0;if (uv.x<=0.25) {gl_FragColor.rgb=depth.rgb;gl_FragColor.a=1.0;} else if (uv.x<=0.5) {velocityLinear.rg=velocityLinear.rg*0.5+0.5;gl_FragColor.rgb=velocityLinear.rgb;} else if (uv.x<=0.75) {gl_FragColor.rgb=worldPosition.rgb;} else {gl_FragColor.rgb=worldNormal.rgb;}}}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblShadowGBufferDebugPixelShader",0,{name:t,shader:i}])},3316,e=>{"use strict";var r=e.i(61724),t=e.i(22969),i=e.i(99839),a=e.i(66423);class o extends t.FlowGraphExecutionBlockWithOutSignal{constructor(e={}){super(e),this.config=e,this.config.startIndex=e.startIndex??new a.FlowGraphInteger(0),this.reset=this._registerSignalInput("reset"),this.maxExecutions=this.registerDataInput("maxExecutions",r.RichTypeFlowGraphInteger),this.executionCount=this.registerDataOutput("executionCount",r.RichTypeFlowGraphInteger,new a.FlowGraphInteger(0))}_execute(e,r){if(r===this.reset)this.executionCount.setValue(this.config.startIndex,e);else{let r=this.executionCount.getValue(e);r.value<this.maxExecutions.getValue(e).value&&(this.executionCount.setValue(new a.FlowGraphInteger(r.value+1),e),this.out._activateSignal(e))}}getClassName(){return"FlowGraphDoNBlock"}}(0,i.RegisterClass)("FlowGraphDoNBlock",o),e.s(["FlowGraphDoNBlock",0,o])},44502,e=>{"use strict";var r=e.i(33967);let t="tonemapPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform float _ExposureAdjustment;
#if defined(HABLE_TONEMAPPING)
const float A=0.15;const float B=0.50;const float C=0.10;const float D=0.20;const float E=0.02;const float F=0.30;const float W=11.2;
#endif
float Luminance(vec3 c)
{return dot(c,vec3(0.22,0.707,0.071));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec3 colour=texture2D(textureSampler,vUV).rgb;
#if defined(REINHARD_TONEMAPPING)
float lum=Luminance(colour.rgb); 
float lumTm=lum*_ExposureAdjustment;float scale=lumTm/(1.0+lumTm); 
colour*=scale/lum;
#elif defined(HABLE_TONEMAPPING)
colour*=_ExposureAdjustment;const float ExposureBias=2.0;vec3 x=ExposureBias*colour;vec3 curr=((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;x=vec3(W,W,W);vec3 whiteScale=1.0/(((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F);colour=curr*whiteScale;
#elif defined(OPTIMIZED_HEJIDAWSON_TONEMAPPING)
colour*=_ExposureAdjustment;vec3 X=max(vec3(0.0,0.0,0.0),colour-0.004);vec3 retColor=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);colour=retColor*retColor;
#elif defined(PHOTOGRAPHIC_TONEMAPPING)
colour= vec3(1.0,1.0,1.0)-exp2(-_ExposureAdjustment*colour);
#endif
gl_FragColor=vec4(colour.rgb,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["tonemapPixelShader",0,{name:t,shader:i}])},39040,e=>{"use strict";var r=e.i(64102),t=e.i(99839);class i extends r.FlowGraphEventBlock{constructor(){super(...arguments),this.initPriority=-1,this.type="SceneReady"}_executeEvent(e,r){return this._execute(e),!0}_preparePendingTasks(e){}_cancelPendingTasks(e){}getClassName(){return"FlowGraphSceneReadyEventBlock"}}(0,t.RegisterClass)("FlowGraphSceneReadyEventBlock",i),e.s(["FlowGraphSceneReadyEventBlock",0,i])},12454,e=>{"use strict";var r=e.i(33967);let t="depthBoxBlurPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 colorDepth=vec4(0.0);for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["depthBoxBlurPixelShader",0,{name:t,shader:i}])},16993,e=>{"use strict";var r=e.i(33967);let t="layerVertexShader",i=`attribute vec2 position;uniform vec2 scale;uniform vec2 offset;uniform mat4 textureMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec2 shiftedPosition=position*scale+offset;vUV=vec2(textureMatrix*vec4(shiftedPosition*madd+madd,1.0,0.0));gl_Position=vec4(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["layerVertexShader",0,{name:t,shader:i}])},62512,e=>{"use strict";var r=e.i(33967);let t="hdrIrradianceFilteringVertexShader",i=`attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["hdrIrradianceFilteringVertexShaderWGSL",0,{name:t,shader:i}])},45003,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleDiffusePixelShader",i=`uniform particleAlpha: f32;varying uv: vec2f;varying diffuseColor: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
fragmentOutputs.color=vec4f(input.diffuseColor,1.0);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingParticleDiffusePixelShaderWGSL",0,{name:t,shader:i}])},88902,e=>{"use strict";var r=e.i(33967);let t="lodPixelShader",i=`const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,fragmentInputs.vUV,uniforms.lod);if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["lodPixelShaderWGSL",0,{name:t,shader:i}])},56824,e=>{"use strict";var r=e.i(33967);let t="taaPixelShader",i=`var textureSampler: texture_2d<f32>;var historySampler: texture_2d<f32>;uniform factor: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let c=textureLoad(textureSampler,vec2<i32>(fragmentInputs.position.xy),0);let h=textureLoad(historySampler,vec2<i32>(fragmentInputs.position.xy),0);fragmentOutputs.color= mix(h,c,uniforms.factor);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["taaPixelShaderWGSL",0,{name:t,shader:i}])},86818,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="rgbdDecodePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV)),1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["rgbdDecodePixelShaderWGSL",0,{name:t,shader:i}])},29809,e=>{"use strict";var r=e.i(99839),t=e.i(22969),i=e.i(61724);class a extends t.FlowGraphExecutionBlockWithOutSignal{constructor(e){if(super(e),!e.variable&&!e.variables)throw Error("FlowGraphSetVariableBlock: variable/variables is not defined");if(e.variables&&e.variable)throw Error("FlowGraphSetVariableBlock: variable and variables are both defined");if(e.variables)for(const r of e.variables)this.registerDataInput(r,i.RichTypeAny);else this.registerDataInput("value",i.RichTypeAny)}_execute(e,r){if(this.config?.variables)for(let r of this.config.variables)this._saveVariable(e,r);else this._saveVariable(e,this.config?.variable,"value");this.out._activateSignal(e)}_saveVariable(e,r,t){let i=e._getGlobalContextVariable("currentlyRunningAnimationGroups",[]);for(let t of i){let a=e.assetsContext.animationGroups[t];for(let o of a.targetedAnimations)if(o.target===e&&o.target===e&&o.animation.targetProperty===r){a.stop();let r=i.indexOf(t);r>-1&&i.splice(r,1),e._setGlobalContextVariable("currentlyRunningAnimationGroups",i);break}}let a=this.getDataInput(t||r)?.getValue(e);e.setVariable(r,a)}getClassName(){return"FlowGraphSetVariableBlock"}serialize(e){super.serialize(e),e.config.variable=this.config?.variable}}(0,r.RegisterClass)("FlowGraphSetVariableBlock",a),e.s(["FlowGraphSetVariableBlock",0,a])},61150,34167,e=>{"use strict";var r=e.i(12526);class t extends r.AbstractAudioBus{constructor(e,r){super(e,r),this._outBus=null,this._onOutBusDisposed=()=>{this.outBus=this.engine.defaultMainBus}}get outBus(){return this._outBus}set outBus(e){if(this._outBus!==e){if(this._outBus&&(this._outBus.onDisposeObservable.removeCallback(this._onOutBusDisposed),!this._disconnect(this._outBus)))throw Error("Disconnect failed");if(this._outBus=e,this._outBus&&(this._outBus.onDisposeObservable.add(this._onOutBusDisposed),!this._connect(this._outBus)))throw Error("Connect failed")}}dispose(){super.dispose(),this._outBus=null}}e.s(["AudioBus",0,t],34167);var i=e.i(73111),a=e.i(82985),o=e.i(53961),n=e.i(93012);class l extends t{constructor(e,r,t){super(e,r),this._spatial=null,this._spatialAutoUpdate=!0,this._spatialMinUpdateTime=0,this._stereo=null,"boolean"==typeof t.spatialAutoUpdate&&(this._spatialAutoUpdate=t.spatialAutoUpdate),"number"==typeof t.spatialMinUpdateTime&&(this._spatialMinUpdateTime=t.spatialMinUpdateTime),this._subGraph=new l._SubGraph(this)}async _init(e){e.outBus?this.outBus=e.outBus:(await this.engine.isReadyPromise,this.outBus=this.engine.defaultMainBus),await this._subGraph.init(e),(0,i._HasSpatialAudioOptions)(e)&&this._initSpatialProperty(),this.engine._addNode(this)}dispose(){super.dispose(),this._spatial=null,this._stereo=null,this.engine._removeNode(this)}get _inNode(){return this._subGraph._inNode}get _outNode(){return this._subGraph._outNode}get spatial(){return this._spatial?this._spatial:this._initSpatialProperty()}get stereo(){return this._stereo??(this._stereo=new a._StereoAudio(this._subGraph))}getClassName(){return"_WebAudioBus"}_connect(e){return!!super._connect(e)&&(e._inNode&&this._outNode?.connect(e._inNode),!0)}_disconnect(e){return!!super._disconnect(e)&&(e._inNode&&this._outNode?.disconnect(e._inNode),!0)}_initSpatialProperty(){return this._spatial||(this._spatial=new n._SpatialWebAudio(this._subGraph,this._spatialAutoUpdate,this._spatialMinUpdateTime)),this._spatial}}l._SubGraph=class extends o._WebAudioBusAndSoundSubGraph{get _downstreamNodes(){return this._owner._downstreamNodes??null}get _upstreamNodes(){return this._owner._upstreamNodes??null}},e.s(["_WebAudioBus",0,l],61150)},45762,e=>{"use strict";var r=e.i(33967);let t="highlightsPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;const RGBLuminanceCoefficients: vec3f= vec3f(0.2126,0.7152,0.0722);
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tex: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var c: vec3f=tex.rgb;var luma: f32=dot(c.rgb,RGBLuminanceCoefficients);fragmentOutputs.color= vec4f(pow(c, vec3f(25.0-luma*15.0)),tex.a); }`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["highlightsPixelShaderWGSL",0,{name:t,shader:i}])},21776,e=>{"use strict";var r=e.i(33967);let t="blackAndWhitePixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform float degree;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec3 color=texture2D(textureSampler,vUV).rgb;float luminance=dot(color,vec3(0.3,0.59,0.11)); 
vec3 blackAndWhite=vec3(luminance,luminance,luminance);gl_FragColor=vec4(color-((color-blackAndWhite)*degree),1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["blackAndWhitePixelShader",0,{name:t,shader:i}])},30729,e=>{"use strict";var r=e.i(33967);e.i(66911);let t="rgbdEncodePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["rgbdEncodePixelShaderWGSL",0,{name:t,shader:i}])},39708,e=>{"use strict";var r=e.i(33967);let t="layerVertexShader",i=`attribute position: vec2f;uniform scale: vec2f;uniform offset: vec2f;uniform textureMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var shiftedPosition: vec2f=input.position*uniforms.scale+uniforms.offset;vertexOutputs.vUV=(uniforms.textureMatrix* vec4f(shiftedPosition*madd+madd,1.0,0.0)).xy;vertexOutputs.position= vec4f(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["layerVertexShaderWGSL",0,{name:t,shader:i}])},88686,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGrid2dArrayDebugPixelShader",i="precision highp sampler2DArray;varying vec2 vUV;uniform sampler2DArray voxelTexture;uniform sampler2D textureSampler;uniform int slice;void main(void) {ivec3 size=textureSize(voxelTexture,0);float dimension=sqrt(float(size.z));vec2 samplePos=fract(vUV.xy*vec2(dimension));int sampleIndex=int(floor(vUV.x*float(dimension))+floor(vUV.y*float(dimension))*dimension);glFragColor.rgb=texture(voxelTexture,vec3(samplePos.xy,sampleIndex)).rrr;glFragColor.a=1.0;glFragColor.rgb+=texture(textureSampler,vUV.xy).rgb;}";r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblVoxelGrid2dArrayDebugPixelShader",0,{name:t,shader:i}])},1273,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGridVertexShader",i=`attribute vec3 position;attribute vec3 normal;varying vec3 vNormalizedPosition;uniform mat4 world;uniform mat4 invWorldScale;uniform mat4 viewMatrix;void main(void) {gl_Position=viewMatrix*invWorldScale*world*vec4(position,1.);vNormalizedPosition.xyz=gl_Position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
gl_Position.z=gl_Position.z*0.5+0.5;
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblVoxelGridVertexShader",0,{name:t,shader:i}])},74249,e=>{"use strict";var r=e.i(33967);let t="ssaoCombinePixelShader",i=`uniform sampler2D textureSampler;uniform sampler2D originalColor;uniform vec4 viewport;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec2 uv=viewport.xy+vUV*viewport.zw;vec4 ssaoColor=texture2D(textureSampler,uv);vec4 sceneColor=texture2D(originalColor,uv);gl_FragColor=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["ssaoCombinePixelShader",0,{name:t,shader:i}])},8336,e=>{"use strict";var r=e.i(33967);let t="glowMapMergeVertexShader",i=`attribute position: vec2f;varying vUV: vec2f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["glowMapMergeVertexShaderWGSL",0,{name:t,shader:i}])},23125,e=>{"use strict";var r=e.i(33967);let t="proceduralVertexShader",i=`attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["proceduralVertexShaderWGSL",0,{name:t,shader:i}])},44222,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="copyTextureToTexturePixelShader",i=`uniform float conversion;uniform sampler2D textureSampler;varying vec2 vUV;
#include<helperFunctions>
void main(void) 
{vec4 color=texture2D(textureSampler,vUV);
#ifdef DEPTH_TEXTURE
gl_FragDepth=color.r;
#else
if (conversion==1.) {color=toLinearSpace(color);} else if (conversion==2.) {color=toGammaSpace(color);}
gl_FragColor=color;
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["copyTextureToTexturePixelShader",0,{name:t,shader:i}])},20642,e=>{"use strict";var r=e.i(33967);let t="filterPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform kernelMatrix: mat4x4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var baseColor: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var updatedColor: vec3f=(uniforms.kernelMatrix* vec4f(baseColor,1.0)).rgb;fragmentOutputs.color= vec4f(updatedColor,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["filterPixelShaderWGSL",0,{name:t,shader:i}])},23992,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="extractHighlightsPixelShader",i=`#include<helperFunctions>
varying vec2 vUV;uniform sampler2D textureSampler;uniform float threshold;uniform float exposure;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);float luma=dot(LuminanceEncodeApprox,gl_FragColor.rgb*exposure);gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["extractHighlightsPixelShader",0,{name:t,shader:i}])},43288,e=>{"use strict";var r=e.i(33967);let t="lensFlareVertexShader",i=`attribute position: vec2f;uniform viewportMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position=uniforms.viewportMatrix* vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["lensFlareVertexShaderWGSL",0,{name:t,shader:i}])},20031,e=>{"use strict";var r=e.i(33967);let t="iblCdfxPixelShader",i=`precision highp sampler2D;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D cdfy;void main(void) {ivec2 cdfyRes=textureSize(cdfy,0);ivec2 currentPixel=ivec2(gl_FragCoord.xy);float cdfx=0.0;for (int x=1; x<=currentPixel.x; x++) {cdfx+=texelFetch(cdfy,ivec2(x-1,cdfyRes.y-1),0).x;}
gl_FragColor=vec4(vec3(cdfx),1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblCdfxPixelShader",0,{name:t,shader:i}])},93623,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererPixelShader",i=`varying vDecalTC: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {if (input.vDecalTC.x<0. || input.vDecalTC.x>1. || input.vDecalTC.y<0. || input.vDecalTC.y>1.) {discard;}
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vDecalTC);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["meshUVSpaceRendererPixelShaderWGSL",0,{name:t,shader:i}])},32178,e=>{"use strict";var r=e.i(33967);let t="iblVoxelSlabDebugVertexShader",i="attribute vec3 position;varying vec3 vNormalizedPosition;uniform mat4 world;uniform mat4 invWorldScale;uniform mat4 cameraViewMatrix;uniform mat4 projection;uniform mat4 viewMatrix;void main(void) {vec4 worldPosition=(world*vec4(position,1.));gl_Position=projection*cameraViewMatrix*worldPosition;vNormalizedPosition=(viewMatrix*invWorldScale*worldPosition).rgb;vNormalizedPosition.xyz=vNormalizedPosition.xyz*vec3(0.5)+vec3(0.5);}";r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblVoxelSlabDebugVertexShader",0,{name:t,shader:i}])},80076,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererFinaliserPixelShader",i=`precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D maskTextureSampler;uniform vec2 textureSize;void main() {vec4 mask=texture2D(maskTextureSampler,vUV).rgba;if (mask.r>0.5) {gl_FragColor=texture2D(textureSampler,vUV);} else {vec2 texelSize=4.0/textureSize;vec2 uv_p01=vUV+vec2(-1.0,0.0)*texelSize;vec2 uv_p21=vUV+vec2(1.0,0.0)*texelSize;vec2 uv_p10=vUV+vec2(0.0,-1.0)*texelSize;vec2 uv_p12=vUV+vec2(0.0,1.0)*texelSize;float mask_p01=texture2D(maskTextureSampler,uv_p01).r;float mask_p21=texture2D(maskTextureSampler,uv_p21).r;float mask_p10=texture2D(maskTextureSampler,uv_p10).r;float mask_p12=texture2D(maskTextureSampler,uv_p12).r;vec4 col=vec4(0.0,0.0,0.0,0.0);float total_weight=0.0;if (mask_p01>0.5) {col+=texture2D(textureSampler,uv_p01);total_weight+=1.0;}
if (mask_p21>0.5) {col+=texture2D(textureSampler,uv_p21);total_weight+=1.0;}
if (mask_p10>0.5) {col+=texture2D(textureSampler,uv_p10);total_weight+=1.0;}
if (mask_p12>0.5) {col+=texture2D(textureSampler,uv_p12);total_weight+=1.0;}
if (total_weight>0.0) {gl_FragColor=col/total_weight;} else {gl_FragColor=col;}}}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["meshUVSpaceRendererFinaliserPixelShader",0,{name:t,shader:i}])},93844,e=>{"use strict";var r=e.i(33967);let t="greasedLinePixelShader",i=`precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeAndColorDistributionType;uniform vec3 grlColor;varying float grlCounters;varying float grlColorPointer;void main() {float grlColorMode=grl_colorModeAndColorDistributionType.x;float grlColorDistributionType=grl_colorModeAndColorDistributionType.y;gl_FragColor=vec4(grlColor,1.);gl_FragColor.a=step(grlCounters,grlVisibility);if (gl_FragColor.a==0.) discard;if( grlUseDash==1. ){gl_FragColor.a=ceil(mod(grlCounters+grlDashOffset,grlDashArray)-(grlDashArray*grlDashRatio));if (gl_FragColor.a==0.) discard;}
if (grlUseColors==1.) {vec4 textureColor;if (grlColorDistributionType==COLOR_DISTRIBUTION_TYPE_LINE) { 
textureColor=texture2D(grlColors,vec2(grlCounters,0.),0.);} else {textureColor=texture2D(grlColors,vec2(grlColorPointer/grlColorsWidth,0.),0.);}
if (grlColorMode==COLOR_MODE_SET) {gl_FragColor=textureColor;} else if (grlColorMode==COLOR_MODE_ADD) {gl_FragColor+=textureColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {gl_FragColor*=textureColor;}}}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["greasedLinePixelShader",0,{name:t,shader:i}])},78366,e=>{"use strict";var r=e.i(33967);let t="iblVoxelGridPixelShader",i=`varying vNormalizedPosition: vec3f;uniform nearPlane: f32;uniform farPlane: f32;uniform stepSize: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normPos: vec3f=input.vNormalizedPosition.xyz;if (normPos.z<uniforms.nearPlane || normPos.z>uniforms.farPlane) {discard;}
fragmentOutputs.fragData0=select(vec4f(0.0),vec4f(1.0),normPos.z<uniforms.nearPlane+uniforms.stepSize);fragmentOutputs.fragData1=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+uniforms.stepSize && normPos.z<uniforms.nearPlane+2.0*uniforms.stepSize);fragmentOutputs.fragData2=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+2.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+3.0*uniforms.stepSize);fragmentOutputs.fragData3=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+3.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+4.0*uniforms.stepSize);
#if MAX_DRAW_BUFFERS>4
fragmentOutputs.fragData4=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+4.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+5.0*uniforms.stepSize);fragmentOutputs.fragData5=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+5.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+6.0*uniforms.stepSize);fragmentOutputs.fragData6=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+6.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+7.0*uniforms.stepSize);fragmentOutputs.fragData7=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+7.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+8.0*uniforms.stepSize);
#endif
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblVoxelGridPixelShaderWGSL",0,{name:t,shader:i}])},16874,e=>{"use strict";var r=e.i(33967);let t="lodCubePixelShader",i=`const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,1.001),uniforms.lod);
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,-1.001),uniforms.lod);
#endif
if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["lodCubePixelShaderWGSL",0,{name:t,shader:i}])},20202,e=>{"use strict";var r=e.i(33967);e.i(44371),e.i(24137),e.i(3449);let t="spritesVertexShader",i=`attribute vec4 position;attribute vec2 options;attribute vec2 offsets;attribute vec2 inverts;attribute vec4 cellInfo;attribute vec4 color;uniform mat4 view;uniform mat4 projection;varying vec2 vUV;varying vec4 vColor;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 viewPos=(view*vec4(position.xyz,1.0)).xyz; 
vec2 cornerPos;float angle=position.w;vec2 size=vec2(options.x,options.y);vec2 offset=offsets.xy;cornerPos=vec2(offset.x-0.5,offset.y -0.5)*size;vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;gl_Position=projection*vec4(viewPos,1.0); 
vColor=color;vec2 uvOffset=vec2(abs(offset.x-inverts.x),abs(1.0-offset.y-inverts.y));vec2 uvPlace=cellInfo.xy;vec2 uvSize=cellInfo.zw;vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["spritesVertexShader",0,{name:t,shader:i}])},61504,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839),a=e.i(66423),o=e.i(59637);class n extends r.FlowGraphBlock{constructor(e){super(e),this.config=e,this.array=this.registerDataInput("array",t.RichTypeAny),this.index=this.registerDataInput("index",t.RichTypeAny,new a.FlowGraphInteger(-1)),this.value=this.registerDataOutput("value",t.RichTypeAny)}_updateOutputs(e){let r=this.array.getValue(e),t=(0,o.getNumericValue)(this.index.getValue(e));r&&t>=0&&t<r.length?this.value.setValue(r[t],e):this.value.setValue(null,e)}serialize(e){super.serialize(e)}getClassName(){return"FlowGraphArrayIndexBlock"}}(0,i.RegisterClass)("FlowGraphArrayIndexBlock",n),e.s(["FlowGraphArrayIndexBlock",0,n])},12914,e=>{"use strict";var r=e.i(33967);let t="displayPassPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var passSamplerSampler: sampler;var passSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(passSampler,passSamplerSampler,input.vUV);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["displayPassPixelShaderWGSL",0,{name:t,shader:i}])},43118,e=>{"use strict";var r=e.i(56363),t=e.i(61724);class i extends r.FlowGraphBlock{constructor(e){super();const r=e.glTF,i=r.animations?.map(e=>e._babylonAnimationGroup)||[];this.animationGroups=this.registerDataOutput("animationGroups",t.RichTypeAny,i);const a=r.nodes?.map(e=>e._babylonTransformNode)||[];this.nodes=this.registerDataOutput("nodes",t.RichTypeAny,a)}getClassName(){return"FlowGraphGLTFDataProvider"}}e.s(["FlowGraphGLTFDataProvider",0,i])},18412,e=>{"use strict";var r=e.i(33967);let t="lodPixelShader",i=`#extension GL_EXT_shader_texture_lod : enable
precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)
{gl_FragColor=texture2DLodEXT(textureSampler,vUV,lod);if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["lodPixelShader",0,{name:t,shader:i}])},75922,e=>{"use strict";var r=e.i(33967);let t="copyTexture3DLayerToTexturePixelShader",i=`var textureSampler: texture_3d<f32>;uniform layerNum: i32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let coord=vec3f(vec2f(input.vUV.x,input.vUV.y)*vec2f(textureDimensions(textureSampler,0).xy),f32(uniforms.layerNum));let color=textureLoad(textureSampler,vec3i(coord),0).rgb;fragmentOutputs.color= vec4f(color,1);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["copyTexture3DLayerToTexturePixelShaderWGSL",0,{name:t,shader:i}])},67559,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(26230),e.i(18178),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754),e.i(7025);let t="glowMapGenerationVertexShader",i=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;varying vec4 vPosition;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef DIFFUSE
varying vec2 vUVDiffuse;uniform mat4 diffuseMatrix;
#endif
#ifdef OPACITY
varying vec2 vUVOpacity;uniform mat4 opacityMatrix;
#endif
#ifdef EMISSIVE
varying vec2 vUVEmissive;uniform mat4 emissiveMatrix;
#endif
#ifdef VERTEXALPHA
attribute vec4 color;varying vec4 vColor;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef CUBEMAP
vPosition=worldPos;gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#else
vPosition=viewProjection*worldPos;gl_Position=vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vUVDiffuse=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef DIFFUSEUV2
vUVDiffuse=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vUVOpacity=vec2(opacityMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef OPACITYUV2
vUVOpacity=vec2(opacityMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vUVEmissive=vec2(emissiveMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef EMISSIVEUV2
vUVEmissive=vec2(emissiveMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef VERTEXALPHA
vColor=color;
#endif
#include<clipPlaneVertex>
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["glowMapGenerationVertexShader",0,{name:t,shader:i}])},49104,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(26230),e.i(18178);let t="pointCloudVertexDeclaration",i=`#ifdef POINTSIZE
uniform float pointSize;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754),e.i(7025),e.i(280);let a="depthVertexShader",o=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;varying vec4 vViewPos;
#endif
#include<pointCloudVertexDeclaration>
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<pointCloudVertex>
}
`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["depthVertexShader",0,{name:a,shader:o}],49104)},35424,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingBilateralBlurPixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform maxFilterSize: i32;uniform blurDir: vec2f;uniform projectedParticleConstant: f32;uniform depthThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var depth: f32=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color=vec4f(vec3f(depth),1.);return fragmentOutputs;}
var filterSize: i32=min(uniforms.maxFilterSize,i32(ceil(uniforms.projectedParticleConstant/depth)));var sigma: f32=f32(filterSize)/3.0;var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold/3.0;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sum: f32=0.;var wsum: f32=0.;var sumVel: f32=0.;for (var x: i32=-filterSize; x<=filterSize; x++) {var coords: vec2f=vec2f(f32(x));var sampleDepthVel: vec2f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rg;var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var rDepth: f32=sampleDepthVel.r-depth;var wd: f32=exp(-rDepth*rDepth/two_sigmaDepth2);sum+=sampleDepthVel.r*w*wd;sumVel+=sampleDepthVel.g*w*wd;wsum+=w*wd;}
fragmentOutputs.color=vec4f(sum/wsum,sumVel/wsum,0.,1.);}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fluidRenderingBilateralBlurPixelShaderWGSL",0,{name:t,shader:i}])},8985,e=>{"use strict";var r=e.i(33967);let t="depthOfFieldMergePixelShader",i=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,lod) texture2DLodEXT(s,c,lod)
#else
#define TEXTUREFUNC(s,c,bias) texture2D(s,c,bias)
#endif
uniform sampler2D textureSampler;varying vec2 vUV;uniform sampler2D circleOfConfusionSampler;uniform sampler2D blurStep0;
#if BLUR_LEVEL>0
uniform sampler2D blurStep1;
#endif
#if BLUR_LEVEL>1
uniform sampler2D blurStep2;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float coc=TEXTUREFUNC(circleOfConfusionSampler,vUV,0.0).r;
#if BLUR_LEVEL==0
vec4 original=TEXTUREFUNC(textureSampler,vUV,0.0);vec4 blurred0=TEXTUREFUNC(blurStep0,vUV,0.0);gl_FragColor=mix(original,blurred0,coc);
#endif
#if BLUR_LEVEL==1
if(coc<0.5){vec4 original=TEXTUREFUNC(textureSampler,vUV,0.0);vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);gl_FragColor=mix(original,blurred1,coc/0.5);}else{vec4 blurred0=TEXTUREFUNC(blurStep0,vUV,0.0);vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);gl_FragColor=mix(blurred1,blurred0,(coc-0.5)/0.5);}
#endif
#if BLUR_LEVEL==2
if(coc<0.33){vec4 original=TEXTUREFUNC(textureSampler,vUV,0.0);vec4 blurred2=TEXTUREFUNC(blurStep2,vUV,0.0);gl_FragColor=mix(original,blurred2,coc/0.33);}else if(coc<0.66){vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);vec4 blurred2=TEXTUREFUNC(blurStep2,vUV,0.0);gl_FragColor=mix(blurred2,blurred1,(coc-0.33)/0.33);}else{vec4 blurred0=TEXTUREFUNC(blurStep0,vUV,0.0);vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);gl_FragColor=mix(blurred1,blurred0,(coc-0.66)/0.34);}
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["depthOfFieldMergePixelShader",0,{name:t,shader:i}])},15582,e=>{"use strict";var r=e.i(33967);let t="iblShadowSpatialBlurPixelShader",i=`precision highp sampler2D;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D depthSampler;uniform sampler2D worldNormalSampler;uniform sampler2D voxelTracingSampler;uniform vec4 blurParameters;
#define stridef blurParameters.x
#define worldScale blurParameters.y
const float weights[5]=float[5](0.0625,0.25,0.375,0.25,0.0625);const int nbWeights=5;vec2 max2(vec2 v,vec2 w) {return vec2(max(v.x,w.x),max(v.y,w.y));}
void main(void)
{vec2 gbufferRes=vec2(textureSize(depthSampler,0));ivec2 gbufferPixelCoord=ivec2(vUV*gbufferRes);vec2 shadowRes=vec2(textureSize(voxelTracingSampler,0));ivec2 shadowPixelCoord=ivec2(vUV*shadowRes);vec3 N=texelFetch(worldNormalSampler,gbufferPixelCoord,0).xyz;if (length(N)<0.01) {glFragColor=vec4(1.0,1.0,0.0,1.0);return;}
float depth=-texelFetch(depthSampler,gbufferPixelCoord,0).x;vec4 X=vec4(0.0);for(int y=0; y<nbWeights; ++y) {for(int x=0; x<nbWeights; ++x) {ivec2 gBufferCoords=gbufferPixelCoord+int(stridef)*ivec2(x-(nbWeights>>1),y-(nbWeights>>1));ivec2 shadowCoords=shadowPixelCoord+int(stridef)*ivec2(x-(nbWeights>>1),y-(nbWeights>>1));vec4 T=texelFetch(voxelTracingSampler,shadowCoords,0);float ddepth=-texelFetch(depthSampler,gBufferCoords,0).x-depth;vec3 dN=texelFetch(worldNormalSampler,gBufferCoords,0).xyz-N;float w=weights[x]*weights[y] *
exp2(max(-1000.0/(worldScale*worldScale),-0.5) *
(ddepth*ddepth) -
1e1*dot(dN,dN));X+=vec4(w*T.x,w*T.y,w*T.z,w);}}
gl_FragColor=vec4(X.x/X.w,X.y/X.w,X.z/X.w,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblShadowSpatialBlurPixelShader",0,{name:t,shader:i}])},57458,e=>{"use strict";var r=e.i(61724),t=e.i(99839),i=e.i(22969),a=e.i(52898);class o extends i.FlowGraphExecutionBlockWithOutSignal{constructor(e){super(e),this.config=e,this.condition=this.registerDataInput("condition",r.RichTypeBoolean),this.executionFlow=this._registerSignalOutput("executionFlow"),this.completed=this._registerSignalOutput("completed"),this._unregisterSignalOutput("out")}_execute(e,r){let t=this.condition.getValue(e);this.config?.doWhile&&!t&&this.executionFlow._activateSignal(e);let i=0;for(;t;){if(this.executionFlow._activateSignal(e),++i>=o.MaxLoopCount){a.Logger.Warn("FlowGraphWhileLoopBlock: Max loop count reached. Breaking.");break}t=this.condition.getValue(e)}this.completed._activateSignal(e)}getClassName(){return"FlowGraphWhileLoopBlock"}}o.MaxLoopCount=1e3,(0,t.RegisterClass)("FlowGraphWhileLoopBlock",o),e.s(["FlowGraphWhileLoopBlock",0,o])},67523,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(18178);let t="geometryVertexDeclaration";r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]="uniform mat4 viewProjection;uniform mat4 view;"),e.i(84400);let i="geometryUboDeclaration",a=`#include<sceneUboDeclaration>
`;r.ShaderStore.IncludesShadersStore[i]||(r.ShaderStore.IncludesShadersStore[i]=a),e.i(26230),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754),e.i(7025),e.i(98698);let o="geometryVertexShader",n=`precision highp float;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<__decl__geometryVertex>
#include<clipPlaneVertexDeclaration>
attribute vec3 position;attribute vec3 normal;
#ifdef NEED_UV
varying vec2 vUV;
#ifdef ALPHATEST
uniform mat4 diffuseMatrix;
#endif
#ifdef BUMP
uniform mat4 bumpMatrix;varying vec2 vBumpUV;
#endif
#ifdef REFLECTIVITY
uniform mat4 reflectivityMatrix;uniform mat4 albedoMatrix;varying vec2 vReflectivityUV;varying vec2 vAlbedoUV;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef BUMP
varying mat4 vWorldView;
#endif
#ifdef BUMP
varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
uniform mat4 previousViewProjection;varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=vec4(finalWorld*vec4(positionUpdated,1.0));
#ifdef BUMP
vWorldView=view*finalWorld;mat3 normalWorld=mat3(finalWorld);vNormalW=normalize(normalWorld*normalUpdated);
#else
#ifdef NORMAL_WORLDSPACE
vNormalV=normalize(vec3(finalWorld*vec4(normalUpdated,0.0)));
#else
vNormalV=normalize(vec3((view*finalWorld)*vec4(normalUpdated,0.0)));
#endif
#endif
vViewPos=view*worldPos;
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vPositionW=worldPos.xyz/worldPos.w;
#endif
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#else
vUV=uvUpdated;
#endif
#ifdef BUMP_UV1
vBumpUV=vec2(bumpMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV1
vReflectivityUV=vec2(reflectivityMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef ALBEDO_UV1
vAlbedoUV=vec2(albedoMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#else
vUV=uv2Updated;
#endif
#ifdef BUMP_UV2
vBumpUV=vec2(bumpMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV2
vReflectivityUV=vec2(reflectivityMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#ifdef ALBEDO_UV2
vAlbedoUV=vec2(albedoMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#endif
#include<bumpVertex>
}
`;r.ShaderStore.ShadersStore[o]||(r.ShaderStore.ShadersStore[o]=n),e.s(["geometryVertexShader",0,{name:o,shader:n}],67523)},37982,49911,e=>{"use strict";var r=e.i(66423),t=e.i(61724);let i=new RegExp(/\/\{(\w+)\}\//g);class a{constructor(e,a){this.path=e,this.ownerBlock=a,this.templatedInputs=[];let o=i.exec(e);const n=new Set;for(;o;){const[,l]=o;if(n.has(l))throw Error("Duplicate template variable detected.");n.add(l),this.templatedInputs.push(a.registerDataInput(l,t.RichTypeFlowGraphInteger,new r.FlowGraphInteger(0))),o=i.exec(e)}}getAccessor(e,r){let t=this.path;for(let e of this.templatedInputs){let i=e.getValue(r).value;if("number"!=typeof i||i<0)throw Error("Invalid value for templated input.");t=t.replace(`{${e.name}}`,i.toString())}return e.convert(t)}}e.s(["FlowGraphPathConverterComponent",0,a],49911);var o=e.i(99839),n=e.i(45390),l=e.i(91500);class s extends l.FlowGraphCachedOperationBlock{constructor(e){super(t.RichTypeAny,e),this.config=e,this.object=this.registerDataOutput("object",t.RichTypeAny),this.propertyName=this.registerDataOutput("propertyName",t.RichTypeAny),this.setterFunction=this.registerDataOutput("setFunction",t.RichTypeAny,this._setPropertyValue.bind(this)),this.getterFunction=this.registerDataOutput("getFunction",t.RichTypeAny,this._getPropertyValue.bind(this)),this.generateAnimationsFunction=this.registerDataOutput("generateAnimationsFunction",t.RichTypeAny,this._getInterpolationAnimationPropertyInfo.bind(this)),this.templateComponent=new a(e.jsonPointer,this)}_doOperation(e){let r=this.templateComponent.getAccessor(this.config.pathConverter,e),t=r.info.get(r.object),i=r.info.getTarget?.(r.object),a=r.info.getPropertyName?.[0](r.object);if(i)this.object.setValue(i,e),a&&this.propertyName.setValue(a,e);else throw Error("Object is undefined");return t}_setPropertyValue(e,r,t,i){let a=this.templateComponent.getAccessor(this.config.pathConverter,i),o=a.info.type;o.startsWith("Color")&&(t=f(t,o)),a.info.set?.(t,a.object)}_getPropertyValue(e,r,t){let i=this.templateComponent.getAccessor(this.config.pathConverter,t);return i.info.get(i.object)}_getInterpolationAnimationPropertyInfo(e,r,t){let i=this.templateComponent.getAccessor(this.config.pathConverter,t);return(e,r,t,a)=>{let o=[],n=i.info.type;return n.startsWith("Color")&&(e=e.map(e=>({frame:e.frame,value:f(e.value,n)}))),i.info.interpolation?.forEach((r,n)=>{let l=i.info.getPropertyName?.[n](i.object)||"Animation-interpolation-"+n,s=e;t!==r.type&&(s=e.map(e=>({frame:e.frame,value:r.getValue(void 0,e.value.asArray?e.value.asArray():[e.value],0,1)}))),r.buildAnimations(i.object,l,60,s).forEach(e=>{a&&e.babylonAnimation.setEasingFunction(a),o.push(e.babylonAnimation)})}),o}}getClassName(){return"FlowGraphJsonPointerParserBlock"}}function f(e,r){return e.getClassName().startsWith("Color")?e:"Color3"===r?new n.Color3(e.x,e.y,e.z):"Color4"===r?new n.Color4(e.x,e.y,e.z,e.w):e}(0,o.RegisterClass)("FlowGraphJsonPointerParserBlock",s),e.s(["FlowGraphJsonPointerParserBlock",0,s],37982)},58059,e=>{"use strict";var r=e.i(33967);let t="anaglyphPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D leftSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 leftFrag=texture2D(leftSampler,vUV);leftFrag=vec4(1.0,leftFrag.g,leftFrag.b,1.0);vec4 rightFrag=texture2D(textureSampler,vUV);rightFrag=vec4(rightFrag.r,1.0,1.0,1.0);gl_FragColor=vec4(rightFrag.rgb*leftFrag.rgb,1.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["anaglyphPixelShader",0,{name:t,shader:i}])},24437,e=>{"use strict";var r=e.i(33967);let t="lensFlarePixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["lensFlarePixelShaderWGSL",0,{name:t,shader:i}])},82914,e=>{"use strict";var r=e.i(33967);let t="highlightsPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;const vec3 RGBLuminanceCoefficients=vec3(0.2126,0.7152,0.0722);
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec4 tex=texture2D(textureSampler,vUV);vec3 c=tex.rgb;float luma=dot(c.rgb,RGBLuminanceCoefficients);gl_FragColor=vec4(pow(c,vec3(25.0-luma*15.0)),tex.a); }`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["highlightsPixelShader",0,{name:t,shader:i}])},29919,e=>{"use strict";var r=e.i(33967);let t="depthBoxBlurPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colorDepth: vec4f=vec4f(0.0);for (var x: i32=-OFFSET; x<=OFFSET; x++) {for (var y: i32=-OFFSET; y<=OFFSET; y++) {colorDepth+=textureSample(textureSampler,textureSamplerSampler,input.vUV+ vec2f(f32(x),f32(y))/uniforms.screenSize);}}
fragmentOutputs.color=(colorDepth/ f32((OFFSET*2+1)*(OFFSET*2+1)));}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["depthBoxBlurPixelShaderWGSL",0,{name:t,shader:i}])},49397,e=>{"use strict";var r=e.i(33967);let t="iblShadowAccumulationPixelShader",i=`#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform vec4 accumulationParameters;
#define remanence accumulationParameters.x
#define resetb accumulationParameters.y
#define sceneSize accumulationParameters.z
uniform sampler2D motionSampler;uniform sampler2D positionSampler;uniform sampler2D spatialBlurSampler;uniform sampler2D oldAccumulationSampler;uniform sampler2D prevPositionSampler;vec2 max2(vec2 v,vec2 w) { return vec2(max(v.x,w.x),max(v.y,w.y)); }
void main(void) {bool reset=bool(resetb);vec2 gbufferRes=vec2(textureSize(motionSampler,0));ivec2 gbufferPixelCoord=ivec2(vUV*gbufferRes);vec2 shadowRes=vec2(textureSize(spatialBlurSampler,0));ivec2 shadowPixelCoord=ivec2(vUV*shadowRes);vec4 LP=texelFetch(positionSampler,gbufferPixelCoord,0);if (0.0==LP.w) {gl_FragColor=vec4(1.0,0.0,0.0,1.0);return;}
vec2 velocityColor=texelFetch(motionSampler,gbufferPixelCoord,0).xy;vec2 prevCoord=vUV+velocityColor;vec3 PrevLP=texture(prevPositionSampler,prevCoord).xyz;vec4 PrevShadows=texture(oldAccumulationSampler,prevCoord);vec3 newShadows=texelFetch(spatialBlurSampler,shadowPixelCoord,0).xyz;PrevShadows.a =
!reset && all(lessThan(abs(prevCoord-vec2(0.5)),vec2(0.5))) &&
distance(LP.xyz,PrevLP)<5e-2*sceneSize
? max(PrevShadows.a/(1.0+PrevShadows.a),1.0-remanence)
: 1.0;PrevShadows=max(vec4(0.0),PrevShadows);gl_FragColor =
vec4(mix(PrevShadows.x,newShadows.x,PrevShadows.a),
mix(PrevShadows.y,newShadows.y,PrevShadows.a),
mix(PrevShadows.z,newShadows.z,PrevShadows.a),PrevShadows.a);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["iblShadowAccumulationPixelShader",0,{name:t,shader:i}])},42419,e=>{"use strict";var r=e.i(33967);let t="iblCdfyPixelShader",i=`varying vUV : vec2f;
#include <helperFunctions>
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
uniform iblHeight: i32;
#ifdef IBL_USE_CUBE_MAP
fn fetchCube(uv: vec2f)->f32 {var direction: vec3f=equirectangularToCubemapDirection(uv);return sin(PI*uv.y) *
dot(textureSampleLevel(iblSource,iblSourceSampler,direction,0.0)
.rgb,
LuminanceEncodeApprox);}
#else
fn fetchPanoramic(Coords: vec2i,envmapHeight: f32)->f32 {return sin(PI*(f32(Coords.y)+0.5)/envmapHeight) *
dot(textureLoad(iblSource,Coords,0).rgb,LuminanceEncodeApprox);}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coords: vec2i= vec2i(fragmentInputs.position.xy);var cdfy: f32=0.0;for (var y: i32=1; y<=coords.y; y++) {
#ifdef IBL_USE_CUBE_MAP
var uv: vec2f= vec2f(input.vUV.x,( f32(y-1)+0.5)/ f32(uniforms.iblHeight));cdfy+=fetchCube(uv);
#else
cdfy+=fetchPanoramic( vec2i(coords.x,y-1), f32(uniforms.iblHeight));
#endif
}
fragmentOutputs.color= vec4f(cdfy,0.0,0.0,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["iblCdfyPixelShaderWGSL",0,{name:t,shader:i}])},97243,e=>{"use strict";var r=e.i(33967);let t="hdrIrradianceFilteringVertexShader",i=`attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["hdrIrradianceFilteringVertexShader",0,{name:t,shader:i}])},86704,e=>{"use strict";var r=e.i(33967);e.i(13851);let t="grainPixelShader",i=`#include<helperFunctions>
uniform sampler2D textureSampler; 
uniform float intensity;uniform float animatedSeed;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec2 seed=vUV*(animatedSeed);float grain=dither(seed,intensity);float lum=getLuminance(gl_FragColor.rgb);float grainAmount=(cos(-PI+(lum*PI*2.))+1.)/2.;gl_FragColor.rgb+=grain*grainAmount;gl_FragColor.rgb=max(gl_FragColor.rgb,0.0);}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["grainPixelShader",0,{name:t,shader:i}])},20826,e=>{"use strict";var r=e.i(33967);let t="meshUVSpaceRendererFinaliserVertexShader",i=`attribute position: vec3f;attribute uv: vec2f;uniform worldViewProjection: mat4x4f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.worldViewProjection* vec4f(input.position,1.0);vertexOutputs.positionvUV=input.uv;}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["meshUVSpaceRendererFinaliserVertexShaderWGSL",0,{name:t,shader:i}])},14523,e=>{"use strict";var r=e.i(33967);let t="fluidRenderingParticleThicknessPixelShader",i=`uniform float particleAlpha;varying vec2 uv;void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;float thickness=sqrt(1.0-r2);glFragColor=vec4(vec3(particleAlpha*thickness),1.0);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["fluidRenderingParticleThicknessPixelShader",0,{name:t,shader:i}])},33808,e=>{"use strict";var r=e.i(33967);let t="boundingBoxRendererVertexDeclaration",i=`uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(52102);let a="boundingBoxRendererVertexShader",o=`attribute vec3 position;
#include<__decl__boundingBoxRendererVertex>
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);vec4 worldPos=finalWorld*vec4(position,1.0);
#else
vec4 worldPos=world*vec4(position,1.0);
#endif
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["boundingBoxRendererVertexShader",0,{name:a,shader:o}],33808)},14961,e=>{"use strict";var r=e.i(64102),t=e.i(61724),i=e.i(99839),a=e.i(59637);class o extends r.FlowGraphEventBlock{constructor(e){super(e),this.type="PointerOver",this.pointerId=this.registerDataOutput("pointerId",t.RichTypeNumber),this.targetMesh=this.registerDataInput("targetMesh",t.RichTypeAny,e?.targetMesh),this.meshUnderPointer=this.registerDataOutput("meshUnderPointer",t.RichTypeAny)}_executeEvent(e,r){let t=this.targetMesh.getValue(e);this.meshUnderPointer.setValue(r.mesh,e);let i=r.out&&(0,a._isADescendantOf)(r.out,t);return this.pointerId.setValue(r.pointerId,e),!(!i&&(r.mesh===t||(0,a._isADescendantOf)(r.mesh,t)))||(this._execute(e),!this.config?.stopPropagation)}_preparePendingTasks(e){}_cancelPendingTasks(e){}getClassName(){return"FlowGraphPointerOverEventBlock"}}(0,i.RegisterClass)("FlowGraphPointerOverEventBlock",o),e.s(["FlowGraphPointerOverEventBlock",0,o])},12861,e=>{"use strict";var r=e.i(33967);let t="tonemapPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform _ExposureAdjustment: f32;
#if defined(HABLE_TONEMAPPING)
const A: f32=0.15;const B: f32=0.50;const C: f32=0.10;const D: f32=0.20;const E: f32=0.02;const F: f32=0.30;const W: f32=11.2;
#endif
fn Luminance(c: vec3f)->f32
{return dot(c, vec3f(0.22,0.707,0.071));}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colour: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;
#if defined(REINHARD_TONEMAPPING)
var lum: f32=Luminance(colour.rgb); 
var lumTm: f32=lum*uniforms._ExposureAdjustment;var scale: f32=lumTm/(1.0+lumTm); 
colour*=scale/lum;
#elif defined(HABLE_TONEMAPPING)
colour*=uniforms._ExposureAdjustment;const ExposureBias: f32=2.0;var x: vec3f=ExposureBias*colour;var curr: vec3f=((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;x= vec3f(W,W,W);var whiteScale: vec3f=1.0/(((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F);colour=curr*whiteScale;
#elif defined(OPTIMIZED_HEJIDAWSON_TONEMAPPING)
colour*=uniforms._ExposureAdjustment;var X: vec3f=max( vec3f(0.0,0.0,0.0),colour-0.004);var retColor: vec3f=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);colour=retColor*retColor;
#elif defined(PHOTOGRAPHIC_TONEMAPPING)
colour= vec3f(1.0,1.0,1.0)-exp2(-uniforms._ExposureAdjustment*colour);
#endif
fragmentOutputs.color= vec4f(colour.rgb,1.0);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["tonemapPixelShaderWGSL",0,{name:t,shader:i}])},55,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839),a=e.i(66423);class o extends r.FlowGraphBlock{constructor(e){super(e),this.config=e,this.object=this.registerDataInput("object",t.RichTypeAny),this.array=this.registerDataInput("array",t.RichTypeAny),this.index=this.registerDataOutput("index",t.RichTypeFlowGraphInteger,new a.FlowGraphInteger(-1))}_updateOutputs(e){let r=this.object.getValue(e),t=this.array.getValue(e);t&&this.index.setValue(new a.FlowGraphInteger(t.indexOf(r)),e)}serialize(e){super.serialize(e)}getClassName(){return"FlowGraphIndexOfBlock"}}(0,i.RegisterClass)("FlowGraphIndexOfBlock",o),e.s(["FlowGraphIndexOfBlock",0,o])},39479,e=>{"use strict";var r=e.i(33967);let t="glowBlurPostProcessPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform direction: vec2f;uniform blurWidth: f32;fn getLuminance(color: vec3f)->f32
{return dot(color, vec3f(0.2126,0.7152,0.0722));}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var weights: array<f32 ,7>;weights[0]=0.05;weights[1]=0.1;weights[2]=0.2;weights[3]=0.3;weights[4]=0.2;weights[5]=0.1;weights[6]=0.05;var texelSize: vec2f= vec2f(1.0/uniforms.screenSize.x,1.0/uniforms.screenSize.y);var texelStep: vec2f=texelSize*uniforms.direction*uniforms.blurWidth;var start: vec2f=input.vUV-3.0*texelStep;var baseColor: vec4f= vec4f(0.,0.,0.,0.);var texelOffset: vec2f= vec2f(0.,0.);for (var i: i32=0; i<7; i++)
{var texel: vec4f=textureSample(textureSampler,textureSamplerSampler,start+texelOffset);baseColor=vec4f(baseColor.rgb,baseColor.a+texel.a*weights[i]);var luminance: f32=getLuminance(baseColor.rgb);var luminanceTexel: f32=getLuminance(texel.rgb);var choice: f32=step(luminanceTexel,luminance);baseColor=vec4f(choice*baseColor.rgb+(1.0-choice)*texel.rgb,baseColor.a);texelOffset+=texelStep;}
fragmentOutputs.color=baseColor;}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["glowBlurPostProcessPixelShaderWGSL",0,{name:t,shader:i}])},93222,e=>{"use strict";var r=e.i(33967);let t="colorCorrectionPixelShader",i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;var colorTableSampler: sampler;var colorTable: texture_2d<f32>;const SLICE_COUNT: f32=16.0; 
fn sampleAs3DTexture(uv: vec3f,width: f32)->vec4f {var sliceSize: f32=1.0/width; 
var slicePixelSize: f32=sliceSize/width; 
var sliceInnerSize: f32=slicePixelSize*(width-1.0); 
var zSlice0: f32=min(floor(uv.z*width),width-1.0);var zSlice1: f32=min(zSlice0+1.0,width-1.0);var xOffset: f32=slicePixelSize*0.5+uv.x*sliceInnerSize;var s0: f32=xOffset+(zSlice0*sliceSize);var s1: f32=xOffset+(zSlice1*sliceSize);var slice0Color: vec4f=textureSample(colorTable,colorTableSampler,vec2f(s0,uv.y));var slice1Color: vec4f=textureSample(colorTable,colorTableSampler,vec2f(s1,uv.y));var zOffset: f32=((uv.z*width)%(1.0));return mix(slice0Color,slice1Color,zOffset);}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var screen_color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=sampleAs3DTexture(screen_color.rgb,SLICE_COUNT);}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["colorCorrectionPixelShaderWGSL",0,{name:t,shader:i}])},62953,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphBlock{constructor(e){super(e),this.functionName=this.registerDataInput("functionName",t.RichTypeString),this.object=this.registerDataInput("object",t.RichTypeAny),this.context=this.registerDataInput("context",t.RichTypeAny,null),this.output=this.registerDataOutput("output",t.RichTypeAny)}_updateOutputs(e){let r=this.functionName.getValue(e),t=this.object.getValue(e),i=this.context.getValue(e);if(t&&r){let a=t[r];a&&"function"==typeof a&&this.output.setValue(a.bind(i),e)}}getClassName(){return"FlowGraphFunctionReference"}}(0,i.RegisterClass)("FlowGraphFunctionReference",a),e.s(["FlowGraphFunctionReferenceBlock",0,a])},85073,e=>{"use strict";var r=e.i(33967);let t="fxaaVertexShader",i=`attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(input.position*madd+madd);vertexOutputs.sampleCoordS=vertexOutputs.vUV+ vec2f( 0.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordE=vertexOutputs.vUV+ vec2f( 1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordN=vertexOutputs.vUV+ vec2f( 0.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordW=vertexOutputs.vUV+ vec2f(-1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordNW=vertexOutputs.vUV+ vec2f(-1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSE=vertexOutputs.vUV+ vec2f( 1.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordNE=vertexOutputs.vUV+ vec2f( 1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSW=vertexOutputs.vUV+ vec2f(-1.0,1.0)*uniforms.texelSize;vertexOutputs.position=vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["fxaaVertexShaderWGSL",0,{name:t,shader:i}])},72564,e=>{"use strict";var r=e.i(33967);e.i(43434),e.i(10283),e.i(18577),e.i(39102),e.i(18178),e.i(14397),e.i(11617),e.i(22752),e.i(70017),e.i(44754);let t="pickingVertexShader",i=`attribute vec3 position;
#if defined(INSTANCES)
attribute vec4 instanceMeshID;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;
#if defined(INSTANCES)
varying vec4 vMeshID;
#endif
void main(void) {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;
#if defined(INSTANCES)
vMeshID=instanceMeshID;
#endif
}`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["pickingVertexShader",0,{name:t,shader:i}])},3315,e=>{"use strict";var r=e.i(33967);let t="bilateralBlurPixelShader",i=`uniform sampler2D textureSampler;uniform sampler2D depthSampler;uniform sampler2D normalSampler;uniform int filterSize;uniform vec2 blurDir;uniform float depthThreshold;uniform float normalThreshold;varying vec2 vUV;void main(void) {vec3 color=textureLod(textureSampler,vUV,0.).rgb;float depth=textureLod(depthSampler,vUV,0.).x;if (depth>=1e6 || depth<=0.) {glFragColor=vec4(color,1.);return;}
vec3 normal=textureLod(normalSampler,vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
float sigma=float(filterSize);float two_sigma2=2.0*sigma*sigma;float sigmaDepth=depthThreshold;float two_sigmaDepth2=2.0*sigmaDepth*sigmaDepth;float sigmaNormal=normalThreshold;float two_sigmaNormal2=2.0*sigmaNormal*sigmaNormal;vec3 sum=vec3(0.);float wsum=0.;for (int x=-filterSize; x<=filterSize; ++x) {vec2 coords=vec2(x);vec3 sampleColor=textureLod(textureSampler,vUV+coords*blurDir,0.).rgb;float sampleDepth=textureLod(depthSampler,vUV+coords*blurDir,0.).r;vec3 sampleNormal=textureLod(normalSampler,vUV+coords*blurDir,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
float r=dot(coords,coords);float w=exp(-r/two_sigma2);float depthDelta=abs(sampleDepth-depth);float wd=step(depthDelta,depthThreshold);vec3 normalDelta=abs(sampleNormal-normal);float wn=step(normalDelta.x+normalDelta.y+normalDelta.z,normalThreshold);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}
glFragColor=vec4(sum/wsum,1.);}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["bilateralBlurPixelShader",0,{name:t,shader:i}])},84973,e=>{"use strict";var r=e.i(33967);e.i(66911),e.i(73728),e.i(67930);let t="screenSpaceReflection2PixelShader",i=`var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;
#ifdef SSR_SUPPORTED
var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;var normalSampler: texture_2d<f32>;var depthSampler: texture_2d<f32>;
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var backDepthSampler: texture_2d<f32>;uniform backSizeFactor: f32;
#endif
#ifdef SSR_USE_ENVIRONMENT_CUBE
var envCubeSamplerSampler: sampler;var envCubeSampler: texture_cube<f32>;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;
#endif
#endif
uniform view: mat4x4f;uniform invView: mat4x4f;uniform projection: mat4x4f;uniform invProjectionMatrix: mat4x4f;uniform projectionPixel: mat4x4f;uniform nearPlaneZ: f32;uniform farPlaneZ: f32;uniform stepSize: f32;uniform maxSteps: f32;uniform strength: f32;uniform thickness: f32;uniform roughnessFactor: f32;uniform reflectionSpecularFalloffExponent: f32;uniform maxDistance: f32;uniform selfCollisionNumSkip: f32;uniform reflectivityThreshold: f32;
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
fn hash(a: vec3f)->vec3f
{var result=fract(a*0.8);result+=dot(result,result.yxz+19.19);return fract((result.xxy+result.yxx)*result.zyx);}
fn computeAttenuationForIntersection(ihitPixel: vec2f,hitUV: vec2f,vsRayOrigin: vec3f,vsHitPoint: vec3f,reflectionVector: vec3f,maxRayDistance: f32,numIterations: f32)->f32 {var attenuation: f32=1.0;
#ifdef SSR_ATTENUATE_SCREEN_BORDERS
var dCoords: vec2f=smoothstep(vec2f(0.2),vec2f(0.6),abs( vec2f(0.5,0.5)-hitUV.xy));attenuation*=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_DISTANCE
attenuation*=1.0-clamp(distance(vsRayOrigin,vsHitPoint)/maxRayDistance,0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_NUMITERATIONS
attenuation*=1.0-(numIterations/uniforms.maxSteps);
#endif
#ifdef SSR_ATTENUATE_BACKFACE_REFLECTION
var reflectionNormal: vec3f=texelFetch(normalSampler,hitPixel,0).xyz;var directionBasedAttenuation: f32=smoothstep(-0.17,0.0,dot(reflectionNormal,-reflectionVector));attenuation*=directionBasedAttenuation;
#endif
return attenuation;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef SSR_SUPPORTED
var colorFull: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var color: vec3f=colorFull.rgb;var reflectivity: vec4f=max(textureSampleLevel(reflectivitySampler,reflectivitySamplerSampler,input.vUV,0.0),vec4f(0.0));
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=uniforms.reflectivityThreshold) {
#ifdef SSR_USE_BLUR
fragmentOutputs.color= vec4f(0.);
#else
fragmentOutputs.color=colorFull;
#endif
return fragmentOutputs;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpaceVec3(color);
#endif
var texSize: vec2f= vec2f(textureDimensions(depthSampler,0));var csNormal: vec3f=textureLoad(normalSampler,vec2<i32>(input.vUV*texSize),0).xyz; 
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(uniforms.view* vec4f(csNormal,0.0)).xyz;
#endif
var depth: f32=textureLoad(depthSampler,vec2<i32>(input.vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,uniforms.nearPlaneZ,uniforms.farPlaneZ);
#endif
var csPosition: vec3f=computeViewPosFromUVDepth(input.vUV,depth,uniforms.projection,uniforms.invProjectionMatrix);
#ifdef ORTHOGRAPHIC_CAMERA
var csViewDirection: vec3f= vec3f(0.,0.,1.);
#else
var csViewDirection: vec3f=normalize(csPosition);
#endif
var csReflectedVector: vec3f=reflect(csViewDirection,csNormal);
#ifdef SSR_USE_ENVIRONMENT_CUBE
var wReflectedVector: vec3f=(uniforms.invView* vec4f(csReflectedVector,0.0)).xyz;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
var worldPos: vec4f=uniforms.invView* vec4f(csPosition,1.0);wReflectedVector=parallaxCorrectNormal(worldPos.xyz,normalize(wReflectedVector),uniforms.vReflectionSize,uniforms.vReflectionPosition);
#endif
#ifdef SSR_INVERTCUBICMAP
wReflectedVector.y*=-1.0;
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
wReflectedVector.z*=-1.0;
#endif
var envColor: vec3f=textureSampleLevel(envCubeSampler,envCubeSamplerSampler,wReflectedVector,0.0).xyz;
#ifdef SSR_ENVIRONMENT_CUBE_IS_GAMMASPACE
envColor=toLinearSpaceVec3(envColor);
#endif
#else
var envColor: vec3f=color;
#endif
var reflectionAttenuation: f32=1.0;var rayHasHit: bool=false;var startPixel: vec2f;var hitPixel: vec2f;var hitPoint: vec3f;var numIterations: f32;
#ifdef SSRAYTRACE_DEBUG
var debugColor: vec3f;
#endif
#ifdef SSR_ATTENUATE_FACING_CAMERA
reflectionAttenuation*=1.0-smoothstep(0.25,0.5,dot(-csViewDirection,csReflectedVector));
#endif
if (reflectionAttenuation>0.0) {
#ifdef SSR_USE_BLUR
var jitt: vec3f= vec3f(0.);
#else
var roughness: f32=1.0-reflectivity.a;var jitt: vec3f=mix( vec3f(0.0),hash(csPosition)- vec3f(0.5),roughness)*uniforms.roughnessFactor; 
#endif
var uv2: vec2f=input.vUV*texSize;var c: f32=(uv2.x+uv2.y)*0.25;var jitter: f32=((c)%(1.0)); 
rayHasHit=traceScreenSpaceRay1(
csPosition,
normalize(csReflectedVector+jitt),
uniforms.projectionPixel,
depthSampler,
texSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
backDepthSampler,
uniforms.backSizeFactor,
#endif
uniforms.thickness,
uniforms.nearPlaneZ,
uniforms.farPlaneZ,
uniforms.stepSize,
jitter,
uniforms.maxSteps,
uniforms.maxDistance,
uniforms.selfCollisionNumSkip,
&startPixel,
&hitPixel,
&hitPoint,
&numIterations
#ifdef SSRAYTRACE_DEBUG
,&debugColor
#endif
);}
#ifdef SSRAYTRACE_DEBUG
fragmentOutputs.color= vec4f(debugColor,1.);return fragmentOutputs;
#endif
var F0: vec3f=reflectivity.rgb;var fresnel: vec3f=fresnelSchlickGGXVec3(max(dot(csNormal,-csViewDirection),0.0),F0, vec3f(1.));var SSR: vec3f=envColor;if (rayHasHit) {var reflectedColor: vec3f=textureLoad(textureSampler,vec2<i32>(hitPixel),0).rgb;
#ifdef SSR_INPUT_IS_GAMMA_SPACE
reflectedColor=toLinearSpaceVec3(reflectedColor);
#endif
reflectionAttenuation*=computeAttenuationForIntersection(hitPixel,hitPixel/texSize,csPosition,hitPoint,csReflectedVector,uniforms.maxDistance,numIterations);SSR=reflectedColor*reflectionAttenuation+(1.0-reflectionAttenuation)*envColor;}
#ifndef SSR_BLEND_WITH_FRESNEL
SSR*=fresnel;
#endif
#ifdef SSR_USE_BLUR
var blur_radius: f32=0.0;var roughness: f32=1.0-reflectivity.a*(1.0-uniforms.roughnessFactor);if (roughness>0.001) {var cone_angle: f32=min(roughness,0.999)*3.14159265*0.5;var cone_len: f32=distance(startPixel,hitPixel);var op_len: f32=2.0*tan(cone_angle)*cone_len; 
var a: f32=op_len;var h: f32=cone_len;var a2: f32=a*a;var fh2: f32=4.0f*h*h;blur_radius=(a*(sqrt(a2+fh2)-a))/(4.0f*h);}
fragmentOutputs.color= vec4f(SSR,blur_radius/255.0); 
#else
#ifdef SSR_BLEND_WITH_FRESNEL
var reflectionMultiplier: vec3f=clamp(pow(fresnel*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#else
var reflectionMultiplier: vec3f=clamp(pow(reflectivity.rgb*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#endif
var colorMultiplier: vec3f=1.0-reflectionMultiplier;var finalColor: vec3f=(color*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpaceVec3(finalColor);
#endif
fragmentOutputs.color= vec4f(finalColor,colorFull.a);
#endif
#else
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);
#endif
}
`;r.ShaderStore.ShadersStoreWGSL[t]||(r.ShaderStore.ShadersStoreWGSL[t]=i),e.s(["screenSpaceReflection2PixelShaderWGSL",0,{name:t,shader:i}])},94020,e=>{"use strict";var r=e.i(33967);e.i(13851),e.i(61404),e.i(51715);let t="screenSpaceReflection2PixelShader",i=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,lod) texture2DLodEXT(s,c,lod)
#define TEXTURECUBEFUNC(s,c,lod) textureLod(s,c,lod)
#else
#define TEXTUREFUNC(s,c,bias) texture2D(s,c,bias)
#define TEXTURECUBEFUNC(s,c,bias) textureCube(s,c,bias)
#endif
uniform sampler2D textureSampler;varying vec2 vUV;
#ifdef SSR_SUPPORTED
uniform sampler2D reflectivitySampler;uniform sampler2D normalSampler;uniform sampler2D depthSampler;
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
uniform sampler2D backDepthSampler;uniform float backSizeFactor;
#endif
#ifdef SSR_USE_ENVIRONMENT_CUBE
uniform samplerCube envCubeSampler;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize;
#endif
#endif
uniform mat4 view;uniform mat4 invView;uniform mat4 projection;uniform mat4 invProjectionMatrix;uniform mat4 projectionPixel;uniform float nearPlaneZ;uniform float farPlaneZ;uniform float stepSize;uniform float maxSteps;uniform float strength;uniform float thickness;uniform float roughnessFactor;uniform float reflectionSpecularFalloffExponent;uniform float maxDistance;uniform float selfCollisionNumSkip;uniform float reflectivityThreshold;
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
vec3 hash(vec3 a)
{a=fract(a*0.8);a+=dot(a,a.yxz+19.19);return fract((a.xxy+a.yxx)*a.zyx);}
float computeAttenuationForIntersection(ivec2 hitPixel,vec2 hitUV,vec3 vsRayOrigin,vec3 vsHitPoint,vec3 reflectionVector,float maxRayDistance,float numIterations) {float attenuation=1.0;
#ifdef SSR_ATTENUATE_SCREEN_BORDERS
vec2 dCoords=smoothstep(0.2,0.6,abs(vec2(0.5,0.5)-hitUV.xy));attenuation*=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_DISTANCE
attenuation*=1.0-clamp(distance(vsRayOrigin,vsHitPoint)/maxRayDistance,0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_NUMITERATIONS
attenuation*=1.0-(numIterations/maxSteps);
#endif
#ifdef SSR_ATTENUATE_BACKFACE_REFLECTION
vec3 reflectionNormal=texelFetch(normalSampler,hitPixel,0).xyz;float directionBasedAttenuation=smoothstep(-0.17,0.0,dot(reflectionNormal,-reflectionVector));attenuation*=directionBasedAttenuation;
#endif
return attenuation;}
#endif
void main()
{
#ifdef SSR_SUPPORTED
vec4 colorFull=TEXTUREFUNC(textureSampler,vUV,0.0);vec3 color=colorFull.rgb;vec4 reflectivity=max(TEXTUREFUNC(reflectivitySampler,vUV,0.0),vec4(0.));
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=reflectivityThreshold) {
#ifdef SSR_USE_BLUR
gl_FragColor=vec4(0.);
#else
gl_FragColor=colorFull;
#endif
return;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpace(color);
#endif
vec2 texSize=vec2(textureSize(depthSampler,0));vec3 csNormal=texelFetch(normalSampler,ivec2(vUV*texSize),0).xyz; 
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(view*vec4(csNormal,0.0)).xyz;
#endif
float depth=texelFetch(depthSampler,ivec2(vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,nearPlaneZ,farPlaneZ);
#endif
vec3 csPosition=computeViewPosFromUVDepth(vUV,depth,projection,invProjectionMatrix);
#ifdef ORTHOGRAPHIC_CAMERA
vec3 csViewDirection=vec3(0.,0.,1.);
#else
vec3 csViewDirection=normalize(csPosition);
#endif
vec3 csReflectedVector=reflect(csViewDirection,csNormal);
#ifdef SSR_USE_ENVIRONMENT_CUBE
vec3 wReflectedVector=vec3(invView*vec4(csReflectedVector,0.0));
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
vec4 worldPos=invView*vec4(csPosition,1.0);wReflectedVector=parallaxCorrectNormal(worldPos.xyz,normalize(wReflectedVector),vReflectionSize,vReflectionPosition);
#endif
#ifdef SSR_INVERTCUBICMAP
wReflectedVector.y*=-1.0;
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
wReflectedVector.z*=-1.0;
#endif
vec3 envColor=TEXTURECUBEFUNC(envCubeSampler,wReflectedVector,0.0).xyz;
#ifdef SSR_ENVIRONMENT_CUBE_IS_GAMMASPACE
envColor=toLinearSpace(envColor);
#endif
#else
vec3 envColor=color;
#endif
float reflectionAttenuation=1.0;bool rayHasHit=false;vec2 startPixel;vec2 hitPixel;vec3 hitPoint;float numIterations;
#ifdef SSRAYTRACE_DEBUG
vec3 debugColor;
#endif
#ifdef SSR_ATTENUATE_FACING_CAMERA
reflectionAttenuation*=1.0-smoothstep(0.25,0.5,dot(-csViewDirection,csReflectedVector));
#endif
if (reflectionAttenuation>0.0) {
#ifdef SSR_USE_BLUR
vec3 jitt=vec3(0.);
#else
float roughness=1.0-reflectivity.a;vec3 jitt=mix(vec3(0.0),hash(csPosition)-vec3(0.5),roughness)*roughnessFactor; 
#endif
vec2 uv2=vUV*texSize;float c=(uv2.x+uv2.y)*0.25;float jitter=mod(c,1.0); 
rayHasHit=traceScreenSpaceRay1(
csPosition,
normalize(csReflectedVector+jitt),
projectionPixel,
depthSampler,
texSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
backDepthSampler,
backSizeFactor,
#endif
thickness,
nearPlaneZ,
farPlaneZ,
stepSize,
jitter,
maxSteps,
maxDistance,
selfCollisionNumSkip,
startPixel,
hitPixel,
hitPoint,
numIterations
#ifdef SSRAYTRACE_DEBUG
,debugColor
#endif
);}
#ifdef SSRAYTRACE_DEBUG
gl_FragColor=vec4(debugColor,1.);return;
#endif
vec3 F0=reflectivity.rgb;vec3 fresnel=fresnelSchlickGGX(max(dot(csNormal,-csViewDirection),0.0),F0,vec3(1.));vec3 SSR=envColor;if (rayHasHit) {vec3 reflectedColor=texelFetch(textureSampler,ivec2(hitPixel),0).rgb;
#ifdef SSR_INPUT_IS_GAMMA_SPACE
reflectedColor=toLinearSpace(reflectedColor);
#endif
reflectionAttenuation*=computeAttenuationForIntersection(ivec2(hitPixel),hitPixel/texSize,csPosition,hitPoint,csReflectedVector,maxDistance,numIterations);SSR=reflectedColor*reflectionAttenuation+(1.0-reflectionAttenuation)*envColor;}
#ifndef SSR_BLEND_WITH_FRESNEL
SSR*=fresnel;
#endif
#ifdef SSR_USE_BLUR
float blur_radius=0.0;float roughness=1.0-reflectivity.a*(1.0-roughnessFactor);if (roughness>0.001) {float cone_angle=min(roughness,0.999)*3.14159265*0.5;float cone_len=distance(startPixel,hitPixel);float op_len=2.0*tan(cone_angle)*cone_len; 
float a=op_len;float h=cone_len;float a2=a*a;float fh2=4.0f*h*h;blur_radius=(a*(sqrt(a2+fh2)-a))/(4.0f*h);}
gl_FragColor=vec4(SSR,blur_radius/255.0); 
#else
#ifdef SSR_BLEND_WITH_FRESNEL
vec3 reflectionMultiplier=clamp(pow(fresnel*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#else
vec3 reflectionMultiplier=clamp(pow(reflectivity.rgb*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#endif
vec3 colorMultiplier=1.0-reflectionMultiplier;vec3 finalColor=(color*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpace(finalColor);
#endif
gl_FragColor=vec4(finalColor,colorFull.a);
#endif
#else
gl_FragColor=TEXTUREFUNC(textureSampler,vUV,0.0);
#endif
}
`;r.ShaderStore.ShadersStore[t]||(r.ShaderStore.ShadersStore[t]=i),e.s(["screenSpaceReflection2PixelShader",0,{name:t,shader:i}])},15061,e=>{"use strict";var r=e.i(62160),t=e.i(56363),i=e.i(61724),a=e.i(99839),o=e.i(66423),n=e.i(59637);class l extends t.FlowGraphBlock{constructor(e){super(e),this.config=e,this.type=this.registerDataInput("type",i.RichTypeAny,e.type),this.value=this.registerDataOutput("value",i.RichTypeAny),this.index=this.registerDataInput("index",i.RichTypeAny,new o.FlowGraphInteger((0,n.getNumericValue)(e.index??-1)))}_updateOutputs(e){let t=this.type.getValue(e),i=this.index.getValue(e),a=(0,r.GetFlowGraphAssetWithType)(e.assetsContext,t,(0,n.getNumericValue)(i),this.config.useIndexAsUniqueId);this.value.setValue(a,e)}getClassName(){return"FlowGraphGetAssetBlock"}}(0,a.RegisterClass)("FlowGraphGetAssetBlock",l),e.s(["FlowGraphGetAssetBlock",0,l])},89858,e=>{"use strict";var r=e.i(61724),t=e.i(99839),i=e.i(91500);class a extends i.FlowGraphCachedOperationBlock{constructor(e){super(r.RichTypeAny,e),this.config=e,this.object=this.registerDataInput("object",r.RichTypeAny,e.object),this.propertyName=this.registerDataInput("propertyName",r.RichTypeAny,e.propertyName),this.customGetFunction=this.registerDataInput("customGetFunction",r.RichTypeAny)}_doOperation(e){let r,t=this.customGetFunction.getValue(e);if(t)r=t(this.object.getValue(e),this.propertyName.getValue(e),e);else{let t=this.object.getValue(e),i=this.propertyName.getValue(e);r=t&&i?this._getPropertyValue(t,i):void 0}return r}_getPropertyValue(e,r){let t=r.split("."),i=e;for(let e of t)if(void 0===(i=i[e]))return;return i}getClassName(){return"FlowGraphGetPropertyBlock"}}(0,t.RegisterClass)("FlowGraphGetPropertyBlock",a),e.s(["FlowGraphGetPropertyBlock",0,a])},68232,e=>{"use strict";var r=e.i(33967);e.i(28248),e.i(24137),e.i(1414),e.i(93563),e.i(93741);let t="gaussianSplattingFragmentDeclaration",i=`vec4 gaussianColor(vec4 inColor)
{float A=-dot(vPosition,vPosition);if (A<-4.0) discard;float B=exp(A)*inColor.a;
#include<logDepthFragment>
vec3 color=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4(color,B);}
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(11364);let a="gaussianSplattingPixelShader",o=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vec4 vColor;varying vec2 vPosition;
#include<gaussianSplattingFragmentDeclaration>
void main () { 
#include<clipPlaneFragment>
gl_FragColor=gaussianColor(vColor);}
`;r.ShaderStore.ShadersStore[a]||(r.ShaderStore.ShadersStore[a]=o),e.s(["gaussianSplattingPixelShader",0,{name:a,shader:o}],68232)},87204,e=>{"use strict";var r=e.i(56363),t=e.i(61724),i=e.i(99839);class a extends r.FlowGraphBlock{constructor(e){super(e),this.condition=this.registerDataInput("condition",t.RichTypeBoolean),this.onTrue=this.registerDataInput("onTrue",t.RichTypeAny),this.onFalse=this.registerDataInput("onFalse",t.RichTypeAny),this.output=this.registerDataOutput("output",t.RichTypeAny)}_updateOutputs(e){let r=this.condition.getValue(e);this.output.setValue(r?this.onTrue.getValue(e):this.onFalse.getValue(e),e)}getClassName(){return"FlowGraphConditionalBlock"}}(0,i.RegisterClass)("FlowGraphConditionalBlock",a),e.s(["FlowGraphConditionalDataBlock",0,a])},16854,e=>{"use strict";var r=e.i(99839),t=e.i(33316),i=e.i(61724),a=e.i(66423);class o extends t.FlowGraphExecutionBlock{constructor(e){super(e),this.config=e,this.outputSignals=[],this.reset=this._registerSignalInput("reset"),this.lastIndex=this.registerDataOutput("lastIndex",i.RichTypeFlowGraphInteger,new a.FlowGraphInteger(-1)),this.setNumberOfOutputSignals(e?.outputSignalCount)}_getNextIndex(e){if(!e.includes(!1)&&this.config.isLoop&&e.fill(!1),!this.config.isRandom)return e.indexOf(!1);{let r=e.map((e,r)=>e?-1:r).filter(e=>-1!==e);return r.length?r[Math.floor(Math.random()*r.length)]:-1}}setNumberOfOutputSignals(e=1){for(;this.outputSignals.length>e;){let e=this.outputSignals.pop();e&&(e.disconnectFromAll(),this._unregisterSignalOutput(e.name))}for(;this.outputSignals.length<e;)this.outputSignals.push(this._registerSignalOutput(`out_${this.outputSignals.length}`))}_execute(e,r){if(e._hasExecutionVariable(this,"indexesUsed")||e._setExecutionVariable(this,"indexesUsed",this.outputSignals.map(()=>!1)),r===this.reset){e._deleteExecutionVariable(this,"indexesUsed"),this.lastIndex.setValue(new a.FlowGraphInteger(-1),e);return}let t=e._getExecutionVariable(this,"indexesUsed",[]),i=this._getNextIndex(t);i>-1&&(this.lastIndex.setValue(new a.FlowGraphInteger(i),e),t[i]=!0,e._setExecutionVariable(this,"indexesUsed",t),this.outputSignals[i]._activateSignal(e))}getClassName(){return"FlowGraphMultiGateBlock"}serialize(e){super.serialize(e),e.config.outputSignalCount=this.config.outputSignalCount,e.config.isRandom=this.config.isRandom,e.config.loop=this.config.isLoop,e.config.startIndex=this.config.startIndex}}(0,r.RegisterClass)("FlowGraphMultiGateBlock",o),e.s(["FlowGraphMultiGateBlock",0,o])},11e3,e=>{"use strict";var r=e.i(33967);let t="lineVertexDeclaration",i=`uniform mat4 viewProjection;
#define ADDITIONAL_VERTEX_DECLARATION
`;r.ShaderStore.IncludesShadersStore[t]||(r.ShaderStore.IncludesShadersStore[t]=i),e.i(84400),e.i(17463);let a="lineUboDeclaration",o=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;r.ShaderStore.IncludesShadersStore[a]||(r.ShaderStore.IncludesShadersStore[a]=o),e.i(18178),e.i(26230),e.i(24137),e.i(22752),e.i(7025),e.i(3449);let n="lineVertexShader",l=`#include<__decl__lineVertex>
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
attribute vec3 position;attribute vec4 normal;uniform float width;uniform float aspectRatio;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
mat4 worldViewProjection=viewProjection*finalWorld;vec4 viewPosition=worldViewProjection*vec4(position,1.0);vec4 viewPositionNext=worldViewProjection*vec4(normal.xyz,1.0);vec2 currentScreen=viewPosition.xy/viewPosition.w;vec2 nextScreen=viewPositionNext.xy/viewPositionNext.w;currentScreen.x*=aspectRatio;nextScreen.x*=aspectRatio;vec2 dir=normalize(nextScreen-currentScreen);vec2 normalDir=vec2(-dir.y,dir.x);normalDir*=width/2.0;normalDir.x/=aspectRatio;vec4 offset=vec4(normalDir*normal.w,0.0,0.0);gl_Position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;r.ShaderStore.ShadersStore[n]||(r.ShaderStore.ShadersStore[n]=l),e.s(["lineVertexShader",0,{name:n,shader:l}],11e3)}]);